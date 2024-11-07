import IllustrationSignIn from "@/assets/illustration-signin.svg?react";
import { Outlet } from "@tanstack/react-router";
import styles from "./style.module.css";

const AuthLayout = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<img
					src="/images/Mercatoria.png"
					className="h-16"
					loading="eager"
					alt="Mercatoria Logo"
				/>
				<div className="flex flex-col gap-3 justify-center items-center">
					<IllustrationSignIn />
					<p className="text-base font-bold text-white text-center">
						Lorem Ipsum
					</p>
					<p className="text-sm font-normal text-white text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei
						velit esse cil
					</p>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 320"
					className="rounded-br-[6.25rem]"
				>
					<title>Wave</title>
					<path
						fill="#DDE2FFA6"
						fillOpacity="0.65"
						d="M0,256L60,229.3C120,203,240,149,360,117.3C480,85,600,75,720,90.7C840,107,960,149,1080,149.3C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
					/>
					<path
						fill="#DDE2FFA6"
						fillOpacity="0.65"
						d="M0,128L80,149.3C160,171,320,213,480,213.3C640,213,800,171,960,144C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
					/>
				</svg>
			</div>
			<div className={styles.right}>
				<Outlet />
			</div>
		</div>
	);
};

export default AuthLayout;
