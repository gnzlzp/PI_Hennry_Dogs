import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
import axios from "axios";

const Detail = () => {
	const { id } = useParams();

	const [dog, setDog] = useState({});
	useEffect(async () => {
		const dogServ = await axios.get(`http://localhost:3001/dogs/${id}`);
		!dogServ.data.Temperaments
			? setDog(dogServ.data)
			: setDog({
					image: dogServ.data.image,
					name: dogServ.data.name,
					height: dogServ.data.height.join(" - "),
					weight: dogServ.data.weight.join(" - "),
					temperament: dogServ.data.Temperaments.map((t) => t.name).join(", "),
					life_span: `${dogServ.data.life_span} years`,
			  });
	}, []);

	return (
		<>
			<div className={style.container}>
				{!dog.name ? (
					<div></div>
				) : (
					<>
						<div className={style.img}>
							<img src={dog.image} className={style.img_dtl} />
						</div>
						<div className={style.name}>{dog.name}</div>
						<div className={style.message}>
							<p>
								<p>
									<span className={style.name}>{dog.name}</span> is a beautiful
									dog with a{" "}
									<span className={style.temperament}>
										{dog.temperament && dog.temperament.toLowerCase()}
									</span>{" "}
									temperament. They have a height of{" "}
									<span className={style.measure}>{dog.height}</span> inchs and a
									weight of <span className={style.measure}>{dog.weight}</span> pounds. Their life span is
									about <span className={style.measure}>{dog.life_span}</span>. If
									you're looking for a loyal and friendly companion,{" "}
									<span className={style.name}>{dog.name}</span> might just be
									the dog for you!
								</p>
							</p>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default Detail;
