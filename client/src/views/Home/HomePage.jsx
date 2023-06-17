import style from "./HomePage.module.css";
import { getAllDogs, getAllTemperaments } from "../../Redux/actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../components/SearchBar/SearchBar";
import Pages from "../../components/Pages/Pages";
import Filters from "../../components/Filters/Filters";
import Galery from "../../components/Galery/Galery";

const HomePage = () => {
	const dispatch = useDispatch();

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

	useEffect(() => {
		dispatch(getAllDogs()); // que haga el dispatch si la longitud de dogs cambio
		!temperaments.length && dispatch(getAllTemperaments());
	}, []);
	
	return (
		<>
			<div style={{ display: "flex", flexWrap:"wrap"}} >
				<section className={style.conteinerSelectors} style={{width:"40%"}}>
						{/* --------------BUSQUEDA------------------ */}
					<div className={style.search}>
						<SearchBar  currentPage={currentPage}
						setCurrentPage={setCurrentPage}/>
					<br />
					</div>
						{/* --------------FILTRADO------------------ */}
					<div className={style.filters} >
						<Filters 
						show_dogs={show_dogs} 
						temperaments={temperaments} 
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
						/>
					</div>
						{/* ----------PAGINACION------------------- */}
					<div className={style.btns_pages}>
						<Pages
							totalPages={totalPages}
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
						/>
					</div>
						<br />
				</section>

				<section style={{display:"flex", width:"60%"}}>
					<div className={style.conteinerGalery}>
						<Galery show_dogs={show_dogs} />
					</div>
				</section>
			</div>
		</>
	);
};

export default HomePage;
