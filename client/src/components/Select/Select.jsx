import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByTemp } from "../../Redux/actions";

const Select = ({dogs_page,temperaments}) => {
  const myDogs = useSelector((state) => state.myDogs);
  const dogs = useSelector((state) => state.dogs);
	const dispatch = useDispatch();

	const handleOrder = (event) => {
		let orden = event.target.value;
		// dispatch();
	};

	const handleFilter = (event) => {
		const dogsTemp = dogs.filter(dog=>dog.temperament && dog.temperament.includes(event.target.value))
		dispatch(filterByTemp(dogsTemp))
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
			<input type="radio" name="dog" id="" />
			<label htmlFor="dog">My Dogs</label>
			<br />
			<input type="radio" name="dog" id="" />
			<label htmlFor="dog">Other Dogs</label>
			<br />
      <label htmlFor="filter">Temperaments</label>
			<select name="filter" onChange={handleFilter}>
        {temperaments.map((temp)=>
					    <option key={temp} value={temp}>

						{temp}
					</option>
				)}
			</select>
    </div>
      
		</>
	);
};

export default Select;
