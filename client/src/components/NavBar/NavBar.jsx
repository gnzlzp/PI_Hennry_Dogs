import React from "react";
import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
	return (
		<div className={style.navConteiner}>
			<h2 className={style.nav1}>
				<NavLink to="/dogs" className={style.nav}>
					HomePage
				</NavLink>
			</h2>
			<h2 className={style.nav2}>
				<NavLink to="/form" className={style.nav}>
					Create Dog
				</NavLink>
			</h2>
		</div>
	);
};

export default NavBar;
