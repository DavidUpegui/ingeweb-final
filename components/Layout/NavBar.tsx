import Link from "next/link";
import React from "react";
import { GrCatalogOption } from "react-icons/gr";
import { GrTransaction } from "react-icons/gr";
import { PiUsersBold } from "react-icons/pi";
import { useRouter } from "next/router";
import NavLink from "./NavLink";

const NavBar = () => {
	const { pathname } = useRouter();
	return (
		<nav className="flex flex-col gap-y-4">
			<NavLink href="/">
				<GrCatalogOption /> Catálogo
			</NavLink>
			<NavLink href="/transactions">
				<GrTransaction /> Transacciones
			</NavLink>
			<NavLink href="/users">
				<PiUsersBold /> Usuarios
			</NavLink>
		</nav>
	);
};

export default NavBar;
