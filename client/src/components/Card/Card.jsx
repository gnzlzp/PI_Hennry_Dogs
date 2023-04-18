import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ dog }) => {
	console.log(dog);
	const { id, image, name, temperament, weight, Temperaments } = dog;
	if (Temperaments)
		var temp_db = Temperaments.map(({ name }) => name).join(", ");

	return (
		<div className={style.card}>
			<Link to={`/detail/${id}`}>
				<img className={style.imgDog} src={image} alt={name} />
			</Link>
			<p>
				<b>Id #: </b> {id}
			</p>
			<p>
				<b>Name: </b> {name}
			</p>
			{!Temperaments && (
				<p>
					<b>Temperament:</b> {temperament ? temperament : temp_db}
				</p>
			)}
			<p>
				<b>Weight:</b>{" "}
				{typeof weight === "object"
					? `${weight.metric} Kg / ${weight.imperial} Ponds`
					: `${weight} Kg`}
			</p>
		</div>
	);
};

export default Card;
