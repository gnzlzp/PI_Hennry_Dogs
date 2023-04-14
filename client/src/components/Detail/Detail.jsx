import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {

	const { id } = useParams();

	const [dog, setDog] = useState({});

	useEffect(async () => {
		const dogServ = await axios.get(`http://localhost:3001/dogs/${id}`);
		setDog(dogServ.data);
	}, []);

	return (
		<div className="conteiner">
			<div>
				<img src={dog.image} />
			</div>
			<p><span>{`Name: `}</span>{dog.name}</p>
			<p><span>{`Temperament: `}</span>{dog.temperament}</p>
			<p><span>{`Weigth: `}</span>{dog.weigth?.imperial}</p> 
		</div>
	);
};

export default Detail;
