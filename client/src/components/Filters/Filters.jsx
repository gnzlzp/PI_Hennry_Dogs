import style from "./Filters.module.css"
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByTemp, orderByName, orderByWeight } from "../../Redux/actions";

const Select = ({show_dogs,temperaments,currentPage,setCurrentPage}) => {
  const myDogs = useSelector((state) => state.myDogs);
  const dogs = useSelector((state) => state.dogs);
  const dogs_page = useSelector((state) => state.dogs_page);
	const dispatch = useDispatch();

	const handleOrder = (event) => {
		const value = event.target.value;
		const name = event.target.name;
		if(name === "order_name"){
			dispatch(orderByName(value))
			setCurrentPage(1)

		}else{
 			dispatch(orderByWeight(value))
			setCurrentPage(1)
		}
};

	const handleFilter = (event) => {

		const dogFilt = dogs.filter( dog => dog.Temperaments && dog.Temperaments.find( temp => temp.name === event.target.value ) )
		
		const dogsTemp = dogs.filter(dog => dog.temperament && dog.temperament.includes( event.target.value )	)
		dispatch(filterByTemp([...dogFilt, ...dogsTemp]))
		setCurrentPage(1)
	};
  
  return (
		<>
    {/* ORDEN ALFABETICO */}
		<p>
		<label className={style.label} htmlFor="filter">
			Filter by:
			</label>
		</p>
    <div>
      <label  className={style.label}  htmlFor="order_name">Name : </label>
			<select
				className={style.select}
        name="order_name"
				onClick={handleOrder}
			> 
				<option value="AscName">A - Z</option>
				<option value="DescName">Z - A</option>
			</select>
    </div>

    {/* ORDEN POR PESO */}
    <div>
      <label  className={style.label}  htmlFor="order_weight">Weight : </label>
			<select
				className={style.select}
        name="order_weight"
				onClick={handleOrder}
			> 
				<option value="AscWeight">Lighter</option>
				<option value="DescWeight">Heavier</option>
			</select>
    </div>
    
    {/* FILTRADO POR TEMPERAMENTO */}
    <div>

      <label className={style.label} htmlFor="filter">Temperaments : </label>
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
