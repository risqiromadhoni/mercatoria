import { Button } from "@/components/molecules";
import type { AuthLoginSchema } from "@/schemas";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import type { z } from "zod";
import styles from "./style.module.css";

const AuthSignIn = () => {
	const [showPassword, setShowPassword] = useState(false);

	const { register, handleSubmit } = useForm<z.infer<typeof AuthLoginSchema>>({
		mode: "all",
	});

	const onSubmit: SubmitHandler<z.infer<typeof AuthLoginSchema>> = (
		data,
		e,
	) => {
		e?.stopPropagation();
		e?.preventDefault();
		console.log(data);
	};

	return (
		<div className={styles.wrapper}>
			<h1 className="text-base font-bold">MASUK</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="identifier" className="form-control w-full">
					<div className="label">
						<span className="label-text">No.Handphone/Email</span>
					</div>
					<input
						{...register("identifier")}
						id="identifier"
						inputMode="text"
						type="text"
						placeholder="No. Handphone atau email Anda"
						className="input input-bordered w-full"
					/>
					{/* <div className="label">
						<span className="label-text-alt">Bottom Left label</span>
					</div> */}
				</label>
				<div>
					<div className="label">
						<span className="label-text">Password</span>
					</div>
					<label
						htmlFor="password"
						className="input input-bordered flex items-center gap-2"
					>
						<input
							{...register("password")}
							id="password"
							type={showPassword ? "text" : "password"}
							className="grow"
							placeholder="Kata Sandi Anda"
						/>
						<Button
							type="button"
							iconOnly
							variant="ghost"
							onClick={() => setShowPassword(!showPassword)}
						>
							{!showPassword ? <IconEyeOff /> : <IconEye />}
						</Button>
					</label>
				</div>
				<Button type="submit" color="primary" fullWidth>
					Masuk
				</Button>
			</form>
		</div>
	);
};

export default AuthSignIn;
