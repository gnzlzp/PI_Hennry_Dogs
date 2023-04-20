import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ dog }) => {
	const { id, image, name, temperament, weight, height, Temperaments } = dog;
	if (Temperaments)
		var temp_db = Temperaments.map(({ name }) => name).join(", ");
	return (
		<>
			<label htmlFor="">Name : {name} ||| Id: {id}</label>
		<div className={style.card}>
			{/* <div className={style.identidy}>
				<span>
					<b>Name: </b> {name}
				</span>
				<span>
					<b>Id #: </b> {id}
				</span>
			</div> */}

			<div>
				<Link to={`/detail/${id}`}>
					<img className={style.imgDog} src={image} alt={name} />
				</Link>
			</div>


		<p>
				<b>Weight:</b>{" "}
				{typeof weight === "string"
					? `${[weight.split(", ")].join(" - ")} Pounds`
					: `${weight.join(" - ")} Pounds`}
			</p>

			<p>
				<b>Height:</b>{" "}
				{typeof height === "string"
					? `${[height.split(", ")].join(" - ")} Inchs`
					: `${height.join(" - ")} Inchs`}
			</p>


			<p>
				<b>Temperament:</b> {temperament ? temperament : temp_db}
			</p>

			
		</div>
					</>
	);
};

export default Card;
