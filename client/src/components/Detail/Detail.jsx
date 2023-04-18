import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
import axios from "axios";

const Detail = () => {
	const { id } = useParams();

	const [dog, setDog] = useState({});

	useEffect(async () => {
		const dogServ = await axios.get(`http://localhost:3001/dogs/${id}`);
		setDog(dogServ.data);
	}, []);

	return (
		<>
			<div className={style.conteiner}>
				{!dog.name ? (
					<div></div>
				) : (
					<>
						<div>
							<img src={dog.image} className={style.img_dtl} />
						</div>
						<table>
							<tr>
								<td>NAME</td>
								<td>HEIGHT</td>
								<td>WEIGHT</td>
								<td>TEMPERAMENTS</td>
								<td>LIFE SPAN</td>
							</tr>
							<tr>
								<td>{dog.name}</td>
								<td>
									{dog.height?.metric} Kg / {dog.height?.imperial} Pounds
								</td>
								<td>
									{dog.weight?.metric} Kg / {dog.weight?.imperial} Pounds
								</td>
								<td>{dog.temperament}</td>
								<td>{dog.life_span}</td>
							</tr>
						</table>
					</>
				)}
			</div>
		</>
	);
};

export default Detail;
