import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imgDog from "./50f.png";
import { useDispatch } from "react-redux";
import { getAllDogs, getAllTemperaments } from "../../Redux/actions";
import axios from "axios";

const Login = () => {
	const dispatch = useDispatch();


	useEffect(async () => {
		try {
			dispatch(getAllDogs())
			dispatch(getAllTemperaments())
		} catch (error) {
			throw Error ('Algo salio mal')
		}
	}, []);

	const handleClick = () => {
	};

	return (
		<div>
			<div>
				<img src={imgDog} alt="" style={{ width: "30%" }} />
			</div>
			<Link to="/dogs">
				<button onClick={handleClick}>Foward</button>
			</Link>
		</div>
	);
};

export default Login;
