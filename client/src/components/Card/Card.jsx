import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ dog }) => {
	const { id, image, name, temperament, weight, Temperaments } = dog;
	if (Temperaments) var temp_db = (Temperaments.map(({ name }) => name)).join(', ');
	console.log(name);
	console.log(Temperaments);
	console.log(temp_db);
	
	return (
		<div className={style.card}>
			<Link to={`/detail/${id}`}>
				<img className={style.imgDog} src={image} alt={name} />
			</Link>
			<p>
				<b>Name: </b> {name}
			</p>
			{!Temperaments && <p>
				<b>Temperament:</b> {temperament ? temperament : temp_db}
			</p>}
			<p>
				<b>Weight:</b> {typeof weight === 'object' ? `${weight.metric} Kg / ${weight.imperial} Ponds` : `${weight} Kg`} 
			</p>
		</div>
	);
};

export default Card;