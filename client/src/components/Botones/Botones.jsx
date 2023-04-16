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
		<div>
			<button onClick={handlePreviousPage}>Previous</button>
			<br />
			<button onClick={handleNextPage}>Next</button>
			<br />

			{[...Array(totalPages)].map((_, index) => (
				<button key={index} onClick={() => handlePageChange(index + 1)}>
					{index + 1}
				</button>
			))}
		</div>
	);
};

export default Botones;
