import { cn } from "@/lib/utils";
import {
	IconBellFilled,
	IconSearch,
	IconShoppingCartFilled,
} from "@tabler/icons-react";
import type { FC } from "react";
import type { AppBarProps } from "./type";

import "./style.css";

const AppBar: FC<AppBarProps> = (props) => {
	const { isAuthenticated = false, className, ...headerProps } = props;
	return (
		<header className={cn("navbar", className)} {...headerProps}>
			<div className="w-fit">
				<img
					src="/images/Mercatoria.png"
					className="h-11"
					loading="eager"
					alt="Mercatoria Logo"
				/>
			</div>
			<div className="flex-1">
				<label className="input input-bordered w-full rounded-lg flex items-center gap-2">
					<IconSearch className="text-stormGray" />
					<input type="text" className="grow" placeholder="Cari disini" />
				</label>
			</div>
			<div className="flex-none">
				<div className="dropdown dropdown-end">
					<div className="btn btn-ghost btn-circle">
						<div className="indicator">
							<IconShoppingCartFilled className="text-neutral-700" />
							<span className="badge badge-sm badge-primary indicator-item">
								0
							</span>
						</div>
					</div>
				</div>
				<div className="dropdown dropdown-end">
					<div className="btn btn-ghost btn-circle">
						<div className="indicator">
							<IconBellFilled className="text-neutral-700" />
							<span className="badge badge-sm badge-primary indicator-item">
								0
							</span>
						</div>
					</div>
				</div>
				<div className="dropdown dropdown-end">
					<div className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<img
								alt="Tailwind CSS Navbar component"
								src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
							/>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

AppBar.displayName = "AppBar";

export default AppBar;
