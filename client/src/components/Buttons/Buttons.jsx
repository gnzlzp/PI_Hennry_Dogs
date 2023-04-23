import style from "./Button.module.css"
import React from "react";

const Botones = ({ totalPages, currentPage, setCurrentPage}) => {
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
		<div className={style.btnDiv}>
			<button className={style.btnP} onClick={handlePreviousPage}>Previous</button>
		
			{[...Array(totalPages)].map((_, index) => (
				<button className={style.btn} key={index} onClick={() => handlePageChange(index + 1)}>
					{index + 1}
				</button>
			))}

			<button className={style.btnN} onClick={handleNextPage}>Next</button>
		</div>
	);
};

export default Botones;
