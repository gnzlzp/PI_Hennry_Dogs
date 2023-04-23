import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ dog }) => {
	const { id, image, name, temperament, weight, height, Temperaments } = dog;
	if (Temperaments)
		var temp_db = Temperaments.map(({ name }) => name).join(", ");
	return (
		<>
			<div className={style.card}>
				<div className={style.img}>
					<Link to={`/detail/${id}`}>
						<img className={style.imgDog} src={image} alt={name} />
					</Link>
				</div>

				<div className={style.name}>
					{name}
				</div>

				<div className={style.id}>
					<b>Id # </b> {id}
				</div>

				<div className={style.weight}>
					<p>
						<b>Weight:</b>{" "}
					</p>
					{typeof weight === "string"
						? `${[weight.split(", ")].join(" - ")} Pounds`
						: `${weight.join(" - ")} Pounds`}
				</div>

				<div className={style.height}>
					<p>
						<b>Height:</b>{" "}
					</p>
					{typeof height === "string"
						? `${[height.split(", ")].join(" - ")} Inchs`
						: `${height.join(" - ")} Inchs`}
				</div>

				<div className={style.temperament}>
					<p>
						<b>Temperament:</b>
					</p>
					{temperament ? temperament : temp_db}
				</div>
			</div>
		</>
	);
};

export default Card;
