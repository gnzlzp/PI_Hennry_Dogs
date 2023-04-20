import React from "react";
import Card from "../Card/Card";

const Galery = ({ show_dogs }) => {
	return (
		<>
			{
			show_dogs.length &&
			show_dogs.map((dog, index) => {
				return <Card dog={dog} key={index} />;
			})}
		</>
	);
};

export default Galery;
