import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from './Detail.module.css'
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
	{/* ID.
Imagen.
Nombre.
Altura.
Peso.
Temperamentos.
Años de vida. */}
	<div className={style.conteiner}>
			{ !dog.name ? 
			<div></div>
:
			<>
				<div>
					<img src={dog.image} className={style.img_dtl}/>
				</div>
				<p><span><b>Name: </b></span>{dog.name}</p>
				<p><span><b>Temperament: </b></span>{dog.temperament}</p>
				<p><span><b>Weigth: </b></span>{dog.weight?.metric} Kg / {dog.weight?.imperial} Pounds</p>
			</>
			
		}
		
			</div>
	</>
		
	);
};

export default Detail;
