import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import Card from "../Card/Card";
import style from "./HomePage.module.css";
import Select from "../Select/Select";

const HomePage = () => {
	const ITEMS_PER_PAGE = 8; // número de elementos por página
	const [currentPage, setCurrentPage] = useState(1); // estado para la página actual

	const dogs = useSelector((state) => state.dogs);
	const totalPages = Math.ceil(dogs.length / ITEMS_PER_PAGE); // calcula la cantidad total de páginas basado en la cantidad de datos y el número de elementos por página
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;
	const show_dogs = dogs.slice( 
		(currentPage - 1) * ITEMS_PER_PAGE,
		currentPage * ITEMS_PER_PAGE
	);
	// función para cambiar la página
	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};
	// función para avanzar a la siguiente página
	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	// función para retroceder a la página anterior
	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};
	return (
		<>
			<div style={{ display: "flex", width: "100%" }}>
				<section style={{ minWidth: "35%", height: "500px" }}>
					<SearchBar style={{ width: "100%" }} />
					<br />
					<div>


						{/* --------------FILTRADO------------------ */}
							<Select />
						{/* ----------PAGINACION------------------- */}
						
						<button onClick={handlePreviousPage}>Previous</button>
						<br />
						<button onClick={handleNextPage}>Next</button>
						<br />

						{[...Array(totalPages)].map((_, index) => (
					<button key={index} onClick={() => handlePageChange(index + 1)}>
					{index + 1}
					</button>
				))}
				<br />


					</div>
				</section>


				<section style={{ display: "flex", width: "auto" }}>
					<div className={style.conteiner}>
						{show_dogs.map((dog, index) => {
							return <Card dog={dog} key={index} />;
						})}
					</div>
				</section>
			</div>
		</>
	);
};

export default HomePage;
