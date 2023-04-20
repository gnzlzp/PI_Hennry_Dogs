import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByTemp, orderByName, orderByWeight } from "../../Redux/actions";

const Select = ({show_dogs,temperaments}) => {
  const myDogs = useSelector((state) => state.myDogs);
  const dogs = useSelector((state) => state.dogs);
	const dispatch = useDispatch();

	const handleOrder = (event) => {
		const value = event.target.value;
		const name = event.target.name;
		if(name === "order_name"){
			dispatch(orderByName(value))
		}else{
 			dispatch(orderByWeight(value))
		}
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
				onClick={handleOrder}
			> 
				<option value="AscName">Ascendent</option>
				<option value="DescName">Descendent</option>
			</select>
    </div>

    {/* ORDEN POR PESO */}
    <div>
      <label htmlFor="order_weight">Order weight</label>
			<select
        name="order_weight"
				onClick={handleOrder}
			> 
				<option value="AscWeight">Ascendent</option>
				<option value="DescWeight">Descendent</option>
			</select>
    </div>
    
    {/* FILTRADO POR TEMPERAMENTO */}
    {/* Botones/Opciones para filtrar por temperamentos, 
    y por si su origen es de la API o de la base de datos 
    (creados por nosotros desde el formulario). */}
    <div>

      <label htmlFor="filter">Temperaments</label>
			<select name="filter" onChange={handleFilter}>
				<option defaultSelect={true} disabled={true}>Choose a temperament</option>
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
