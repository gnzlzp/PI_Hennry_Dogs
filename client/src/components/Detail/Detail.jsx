import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
import axios from "axios";

const Detail = () => {
	const { id } = useParams();

	const [dog, setDog] = useState({});
	console.log(dog);
	// if(dog){
		
		// }
		
		useEffect(async () => {
			const dogServ = await axios.get(`http://localhost:3001/dogs/${id}`);
			!dogServ.data.Temperaments
			? setDog(dogServ.data)
			: setDog({
				image : dogServ.data.image,
				name:dogServ.data.name,
				height: dogServ.data.height.join(' - '),
				weight: dogServ.data.weight.join(' - '),
				temperament : (dogServ.data.Temperaments.map(t=>t.name)).join(', '),
				life_span: `${dogServ.data.life_span} years`,
			});
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
								<td>HEIGHT (inchs)</td>
								<td>WEIGHT (pounds)</td>
								<td>TEMPERAMENTS</td>
								<td>LIFE SPAN</td>
							</tr>
							<tr>
								<td>{dog.name}</td>
								<td>
									{dog.height}
								</td>
								<td>
									{dog.weight}
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
