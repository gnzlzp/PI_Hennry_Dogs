import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import imgDog from "./50f.png";
import { useDispatch } from "react-redux";
import { getAllDogs } from "../Redux/actions";
import axios from "axios";

const Login = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		alert("BIENVENIDO");
		return async () => {
			const dogsServ = await axios.get("http://localhost:3001/dogs");
			const allDogs = dogsServ.data;
			dispatch(getAllDogs(allDogs));
		};
	}, []);
	return (
		<div>
			<div>
				<img src={imgDog} alt="" style={{ width: "30%" }} />
			</div>
			<Link to="/dogs">
				<button>Follow</button>
			</Link>
		</div>
	);
};

export default Login;
