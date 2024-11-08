import { Table } from "@/db";
import db from "@/db/connection";
import type {
	CheckVerificationCodeBodySchema,
	VerifyParamsSchema,
} from "@/schemas";
import { eq } from "drizzle-orm";

class VerificationService {
	/**
	 * @description Send verification code
	 * @method POST
	 */
	send(params: VerifyParamsSchema) {}
	/**
	 * @description Resend verification code
	 * @method POST
	 */
	resend(params: VerifyParamsSchema) {}
	/**
	 * @description Verify code
	 * @method POST
	 */
	verify(params: VerifyParamsSchema) {}
}

const verificationService = Object.freeze(new VerificationService());

export default verificationService;
