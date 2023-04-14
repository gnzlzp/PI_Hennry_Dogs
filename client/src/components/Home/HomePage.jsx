import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import Card from "../Card/Card";
import style from '../Card/Card.module.css'

const HomePage = () => {
	const dogs = useSelector((state) => state.dogs);
	const first_eight = dogs.slice(0, 8);
	// useEffect(() => {
	// }, [dogs]);

	return (
		<>
			<SearchBar />
			<div className={style.conteiner}>
				{first_eight.map((dog) => {
					return <Card dog={dog} />
					})}
			</div>
		</>
	);
};

export default HomePage;
