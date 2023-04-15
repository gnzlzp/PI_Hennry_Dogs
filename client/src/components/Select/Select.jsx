import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Select = () => {
  const favorites = useSelector((state) => state.myFavorites);
	const dispatch = useDispatch();

	const handleOrder = (event) => {
		let orden = event.target.value;
		dispatch();
	};

	const handleFilter = (event) => {
		let gender = event.target.value;
		dispatch();
	};
  
  return (
		<>
    {/* ORDEN ALFABETICO */}
    <div>
      <label htmlFor="order_name">Orden Name</label>
			<select
        name="order_name"
				id=""
				onChange={handleOrder}
			> 
				<option value="Ascendente">Ascendent</option>
				<option value="Descendente">Descendent</option>
			</select>
    </div>

    {/* ORDEN POR PESO */}
    <div>
      <label htmlFor="order_weight">Order weight</label>
			<select
        name="order_weight"
				id=""
				onChange={handleOrder}
			> 
				<option value="Ascendente">Ascendent</option>
				<option value="Descendente">Descendent</option>
			</select>
    </div>
    
    {/* FILTRADO POR TEMPERAMENTO */}
    {/* Botones/Opciones para filtrar por temperamentos, 
    y por si su origen es de la API o de la base de datos 
    (creados por nosotros desde el formulario). */}
    <div>
      <label htmlFor="filter">Temperaments</label>
			<select
				name="filter"
				id=""
				onChange={handleFilter}
			>
				<option value="All">All</option>
        {/*Aca hago un map de los temperamentosw*/}
			</select>
    </div>
      
		</>
	);
};

export default Select;
