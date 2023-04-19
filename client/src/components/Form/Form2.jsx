import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllTemperaments } from '../../Redux/actions';
import axios from 'axios';

const Form2 = () => {
  const temperaments = useSelector((state) => state.temperaments);

	const dispatch = useDispatch();



	const [error, setError] = useState({
		name: "",
	});

	const [unit, setUnit] = useState(true);
	const handleUnit = () => {
		unit === true ? setUnit(false) : setUnit(true);
	};

  const [form, setForm] = useState({
    name: "",
		minHeight: 0,
		maxHeight: 0,
    minWeight: 0,
		maxWeight: 0,
		life_span: 15,
		temperament: [],
    temperamentId: [],
    image:"que la url"
  })

  const validate = (value) => {
   if ( !value ){
    setError({ ...error, name: "" })
    return
   }
    /^[a-zA-Z\s]+$/.test(value)
      ? setError({ ...error, name: "" })
      : setError({ ...error, name: "Solo se admiten letras y espacios" });
  };
  
	useEffect(() => {
		temperaments.length === 0 && dispatch(getAllTemperaments());
    validate(form.name)
	}, [form.name]);

const handleForm =  (event) => {
  const value =  event.target.value
  const property = event.target.name
  const setValue = {...form, [property]: value }

  // MANEJO EL NOMBRE
  if (property === "name"){
    setForm({...form, [property]: value })
    validate(value)
  }

  // MANEJO EL TIEMPO DE VIDA
  property === "life_span" && setForm(setValue)

// MANEJO LA ESTATURA Y PESO
if(property === "minHeight" || property === "minWeight" ){
  const valueMax = property === "minHeight" ? form.maxHeight : form.maxWeight
  const prop = property === "minHeight" ? "maxHeight" : "maxWeight"
  if(value>valueMax)
   return setForm({...form, [prop]:Number(valueMax)+1, [property]:value})
  }else{
    setForm(setValue)
  } 
if(property === "maxHeight" || property === "maxWeight"){
  const valueMin = property === "maxHeight" ? form.minHeight : form.minWeight
  const prop = property === "maxHeight" ? "minHeight" : "minWeight"
  if(value<valueMin)
  return setForm({...form, [prop]:Number(valueMin)-1, [property]:value})
}else{
  setForm(setValue)
}
// MANEJO TEMPERAMENTOS
if(property === "temperament"){
  const tempSelect = form.temperament
  const tempSelectId = form.temperamentId
  const id = temperaments.indexOf(value)+1
  !tempSelect.includes(value) 
  ? setForm({...form, [property]:[...tempSelect, value], [`${property}Id`]:[...tempSelectId, id]}) 
  : setForm({...form, [property]:tempSelect.filter((temp) => temp !== value), [`${property}Id`]:tempSelectId.filter((temp) => temp !== id) })
}

// MANEJO LA URL DE LA IMAGEN
if(property === "image") setForm(setValue)

};


const {name,minHeight,maxHeight,minWeight,maxWeight,life_span,temperamentId, image} = form
const newDog = {
  name:name,
  height : [minHeight, maxHeight],
  weight : [minWeight, maxWeight],
  life_span: life_span,
  temperament: temperamentId,
  image:image,
}


const handlePost = ()=>{
  if(!form.minHeight || !form.maxHeight || !form.minWeight || !form.minWeight || !form.name.length || !form.temperament.length ) {
    return alert('Complete the form')
  }
    axios.post("http://localhost:3001/dogs/", newDog)
    .then(res => res.data)
    .catch(error)

}
  return (
    <div style={{ margin: "10px", minWidth: "40%", maxWidth:"60%",justifyContent: "center" , backgroundColor:'yellow'}}>

    <div>
      <label htmlFor="name">Name: </label>
			<input type="search" name="name" value={form.name} onChange={handleForm} />
      
    </div>
		{error.name ? <span>{error.name}</span> : !form.name.length && <span>Put your dog name</span>}<br />

    {/* UNIT
    <label htmlFor="unit">Select unit</label><br />
    <input type="radio" name="unit" id="" onChange={handleUnit} checked={unit} /> Imperial
		<input type="radio" name="unit" id="" onChange={handleUnit} /> Metric
    <br /> */}
    
    {<p>A continuacion indique las carcteristicas de su perro <span>{`(no puede dejar los campos vacios)`}</span></p>}
    {/* HEIGHT */}
    <label htmlFor="minHeight">Min Height: </label>
    <input type="number" min={1} max={100} name="minHeight" value={minHeight} onChange={handleForm} style={{ width: "3rem" }}/>
    {unit === true ? <span>Inchs</span> : <span>Cm</span>}
    <br />
    <label htmlFor="maxHeight">Max Height: </label>
    <input type="number" min={1} max={100} name="maxHeight" value={maxHeight} onChange={handleForm} style={{ width: "3rem" }} />
    {unit === true ? <span>Inchs</span> : <span>Cm</span>}
    <br />

    {/* WEIGHT */}
    <label htmlFor="minWeight">Min Weight: </label>
    <input type="number" min={1} max={100} name="minWeight" value={minWeight} onChange={handleForm} style={{ width: "3rem" }}/>
    {unit === true ? <span>Pound</span> : <span>Kg</span>}
    <br />
    <label htmlFor="maxWeight">Max Weight: </label>
    <input type="number" min={1} max={100} name="maxWeight" value={maxWeight} onChange={handleForm} style={{ width: "3rem" }} />
    {unit === true ? <span>Pound</span> : <span>Kg</span>}
    <br />
    {/* LIVE_SPAN */}
			<label htmlFor="life_span">Life Span: </label>
			<input type="range" min={1}	max={30} step={1} value={form.life_span} name="life_span" list="ticksmatks" onChange={handleForm} style={{ width: "10rem" }} />
			<datalist id="ticksmatks">
				<option value="1" label="1" />
				<option value="5" label="5" />
				<option value="10" label="10" />
				<option value="15" label="15" />
				<option value="20" label="20" />
				<option value="25" label="25" />
				<option value="30" label="30" />
			</datalist>
			<br />
			<input type="text" readOnly={true} value={form.life_span} style={{ width: "1rem" }} />
			<span>Years</span>
			<br />
			{/* TEMPERAMENT */}
			<label htmlFor="temperament">Temperament</label>
			<select name="temperament" onClick={handleForm} >
				{temperaments.map((temp) => (
					<option value={temp}>{temp} </option>
				))}
			</select>
      {!temperamentId.length && <p>Select almost one temperament</p>}
			<br />
     Put Url image<input type="url" name="image" placeholder='http://' value={form.image} onChange={handleForm}/>
			<br />
      <hr />
			<div
				style={{textAlign: "center", width: "60%", margin: "auto", }}>
				<table style={{ justifyContent: "center" }}>
					<thead>
						<tr>
							<th colspan="5">Your Dog Specify</th>
						</tr>
					</thead>
					<tr>
						<td>Name</td>
						<td>Height</td>
						<td>Weight</td>
						<td>Life Span</td>
						<td>Temperaments</td>
					</tr>
					<tr>
						<td>{form.name}</td>
						<td>{`${form.minHeight}-${form.maxHeight}`}</td>
						<td>{`${form.minWeight}-${form.maxWeight}`}</td>
						<td>{form.life_span}</td>
						<td>{[...form.temperament].join(", ")}</td>
					</tr>
				</table>
			</div>
      <hr />
			<button onClick={handlePost} >Create</button>
    </div>
  )
}

export default Form2