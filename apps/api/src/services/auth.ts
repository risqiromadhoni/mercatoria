import { Table } from "@/db";
import db from "@/db/connection";
import type {
	AuthLoginBodySchema,
	BodyRegisterUserSchema,
	DeviceIdHeaderSchema,
	RegisterDeviceSchema,
} from "@/schemas";
import { genSalt } from "@/utils/generator";
import { i18n } from "@/utils/i18n";
import { and, eq, isNull, or } from "drizzle-orm";
import { StatusMap, error } from "elysia";

class AuthService {
	/**
	 * @description Register device
	 * @method POST
	 */
	async device(headers: RegisterDeviceSchema) {
		const macAddress = headers["x-mac-address"];
		const userAgent = headers["user-agent"];

		try {
			const devices = await db
				.select({
					id: Table.devices.id,
				})
				.from(Table.devices)
				.where(
					and(
						eq(Table.devices.macAddress, macAddress),
						eq(Table.devices.userAgent, userAgent),
					),
				)
				.limit(1);

			const device = devices[0];

			if (device) {
				return {
					success: true,
					messages: i18n.success.auth.post.device,
					data: { ...device },
				};
			}

			const ids = await db.transaction(async (trx) => {
				return await trx
					.insert(Table.devices)
					.values({
						macAddress,
						userAgent,
					})
					.returning({ id: Table.devices.id });
			});

			const id = ids[0].id;

			return {
				success: true,
				messages: i18n.success.auth.post.device,
				data: { id },
			};
		} catch (err) {
			return error(StatusMap["Bad Request"], {
				success: false,
				messages: "Failed to register device",
			});
		}
	}

	/**
	 * @description Register new user
	 * @method POST
	 */
	async register(headers: DeviceIdHeaderSchema, body: BodyRegisterUserSchema) {
		const deviceId = headers["x-device-id"];
		const {
			phoneNumber,
			email,
			fullName,
			password,
			birthDate,
			role,
			gender,
			googleId,
			facebookId,
			ssoProvider,
			bankName,
			accountNumber,
			accountHolder,
		} = body;

		const salt = genSalt();
		const combinedPassword = `${password}${salt}`;
		const hashPassword = await Bun.password.hash(combinedPassword);

		try {
			const registeredUser = await db.transaction(async (trx) => {
				const [device] = await db
					.select({
						id: Table.devices.id,
					})
					.from(Table.devices)
					.where(
						and(eq(Table.devices.id, deviceId), isNull(Table.devices.userId)),
					);

				const [user] = await trx
					.insert(Table.users)
					.values({
						phoneNumber,
						email,
						fullName,
						password: hashPassword,
						salt,
						birthDate,
						role,
						gender,
						googleId,
						facebookId,
						ssoProvider,
					})
					.returning({
						id: Table.users.id,
					});

				if (device) {
					await trx
						.update(Table.devices)
						.set({
							userId: user.id,
						})
						.where(eq(Table.devices.id, deviceId));
				}

				await trx.insert(Table.bankAccounts).values({
					userId: user.id,
					bankName,
					accountNumber,
					accountHolder,
				});

				return {
					success: true,
					messages: i18n.success.auth.post.register,
				};
			});

			this.login(headers, { identifier: email, password: String(password) });

			return registeredUser;
		} catch (err) {
			if (err instanceof Error && err.message.includes("unique constraint")) {
				return error(StatusMap.Conflict, {
					success: false,
					messages: i18n.error.auth.post.duplicate,
				});
			}
			return error(StatusMap["Bad Request"], {
				success: false,
				messages: i18n.error.auth.post.register,
			});
		}
	}

	/**
	 * @description Login user
	 * @method POST
	 */
	async login(headers: DeviceIdHeaderSchema, body: AuthLoginBodySchema) {
		const deviceId = headers["x-device-id"];
		try {
			await db.transaction(async (trx) => {
				const [user] = await trx
					.select({
						id: Table.users.id,
					})
					.from(Table.users)
					.where(
						or(
							eq(Table.users.email, body.identifier),
							eq(Table.users.phoneNumber, body.identifier),
						),
					)
					.limit(1);

				const devices = await trx.$count(
					Table.devices,
					eq(Table.devices.id, deviceId),
				);

				if (!devices) {
					trx.rollback();
					return error(StatusMap["Bad Request"], {
						success: false,
						messages: i18n.error.auth.post.register,
					});
				}

				await trx
					.update(Table.devices)
					.set({
						userId: user.id,
					})
					.where(eq(Table.devices.id, deviceId));
			});
		} catch (err) {}
	}
}

const authService = Object.freeze(new AuthService());

export default authService;
