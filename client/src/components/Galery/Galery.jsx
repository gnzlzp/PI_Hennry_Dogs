import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import style from "./Galery.module.css";

const Galery = ({ show_dogs }) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<div className={`${style.gallery} ${isMounted ? style.show : ""}`}>
			{
      show_dogs.length
      ? show_dogs.map((dog, index) => (
				<div key={index} className={style.card}>
					{dog ? <Card dog={dog} /> : 'Dog Not Found'}
				</div>
			))
      : 
      <div className={style.card}>
        <h1> You don't have dogs created yet </h1>  
        <h3>If you want creat one dog, push in "Create Dog"</h3>
      </div>
      
      }
		</div>
	);
};

// const Galery = ({ show_dogs }) => {
// 	return (
// 		<>
// 			{show_dogs.length && show_dogs.map((dog, index) => <Card dog={dog} key={index} /> )}
// 		</>
// 	);
// };

export default Galery;
