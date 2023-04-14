import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ dog }) => {

	return (
			<div className={style.card}>
				<Link to={`/detail/${dog.id}`}>
				<img className={style.imgDog} src={dog.image} alt={dog.name} />
				</Link>
				<p><span><b>Name:</b></span> {dog.name}</p>
			</div>
	);
};

export default Card;
