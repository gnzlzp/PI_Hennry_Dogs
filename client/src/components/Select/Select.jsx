import style from "./Select.module.css"
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
		const dogFilt = dogs.filter( dog => dog.Temperaments && dog.Temperaments.find( temp => temp.name === event.target.value ) )
		const dogsTemp = dogs.filter(dog => dog.temperament && dog.temperament.includes( event.target.value )	)
		dispatch(filterByTemp([...dogFilt, ...dogsTemp]))
	};
  
  return (
		<>
    {/* ORDEN ALFABETICO */}
    <div>
      <label  className={style.label}  htmlFor="order_name">Orden Name</label>
			<select
				className={style.select}
        name="order_name"
				onClick={handleOrder}
			> 
				<option value="AscName">Ascendent</option>
				<option value="DescName">Descendent</option>
			</select>
    </div>

    {/* ORDEN POR PESO */}
    <div>
      <label  className={style.label}  htmlFor="order_weight">Order weight</label>
			<select
				className={style.select}
        name="order_weight"
				onClick={handleOrder}
			> 
				<option value="AscWeight">Ascendent</option>
				<option value="DescWeight">Descendent</option>
			</select>
    </div>
    
    {/* FILTRADO POR TEMPERAMENTO */}
    <div>

      <label className={style.label} htmlFor="filter">Temperaments</label>
			<select name="filter" 
				className={style.select}
				onChange={handleFilter}>
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
