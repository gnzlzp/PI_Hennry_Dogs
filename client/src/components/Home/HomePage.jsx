import style from "./HomePage.module.css";
import { getAllDogs, getAllTemperaments } from "../../Redux/actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import Botones from "../Botones/Botones";
import Select from "../Select/Select";
import Galery from "../Galery/Galery";

const HomePage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		try {
			dispatch(getAllDogs());
			dispatch(getAllTemperaments());
		} catch (error) {
			throw Error("Algo salio mal");
		}
	}, []);

	const ITEMS_PER_PAGE = 8; // número de elementos por página
	const [currentPage, setCurrentPage] = useState(1); // estado para la página actual

	const dogs_page = useSelector((state) => state.dogs_page);
	const temperaments = useSelector((state) => state.temperaments);

	const totalPages = Math.ceil(dogs_page.length / ITEMS_PER_PAGE); // calcula la cantidad total de páginas basado en la cantidad de datos y el número de elementos por página
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;
	const show_dogs = dogs_page.slice(
		(currentPage - 1) * ITEMS_PER_PAGE,
		currentPage * ITEMS_PER_PAGE
	);

	return (
		<>
			<div style={{ display: "flex", width: "100%" }}>
				<section style={{ minWidth: "35%", height: "500px" }}>
					<SearchBar style={{ width: "auto" }} />
					<br />
					<div>
						{/* --------------FILTRADO------------------ */}
						<Select show_dogs={show_dogs} temperaments={temperaments}/>
						{/* ----------PAGINACION------------------- */}

						<Botones
							totalPages={totalPages}
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
						/>

						<br />
					</div>
				</section>

				<section style={{ display: "flex", width: "100%", display:'inline-flex'}}>
					<div className={style.conteiner}>
						<Galery show_dogs={show_dogs} />
					</div>
				</section>
			</div>
		</>
	);
};

export default HomePage;
