import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<div>
			<NavLink to='/dogs'>HomePage</NavLink>
			<NavLink to='/detail'>Detail</NavLink>
			<NavLink to='/form'>Create Dog</NavLink>
		</div>
	);
};

export default NavBar;
