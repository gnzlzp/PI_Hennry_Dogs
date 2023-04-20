import style from "./Form.module.css"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllTemperaments } from '../../Redux/actions';
import axios from 'axios';

const Form2 = () => {
  const temperaments = useSelector((state) => state.temperaments);

	const dispatch = useDispatch();

	const [error, setError] = useState({
		name: "",
    len: "",
	});

  const [form, setForm] = useState({
    name: "",
		minHeight: 0,
		maxHeight: 0,
    minWeight: 0,
		maxWeight: 0,
		life_span: 15,
		temperament: [],
    temperamentId: [],
    image:"http:"
  })

  const validate = (value) => {
   if ( !value ){
    setError({ ...error, name: "" })
    return
   }
    /^[a-zA-Z\s]+$/.test(value)
      ? setError({ ...error, name: "" })
      : setError({ ...error, name: "Only letters please" });
  };
  
	useEffect(() => {
		temperaments.length === 0 && dispatch(getAllTemperaments());
    validate(form.name)
	}, [form]);

const handleForm =  (event) => {
  const value =  event.target.value
  const numValue = Number(value)
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
   return setForm({...form, [prop]:numValue, [property]:numValue})
  }else{
    setForm(setValue)
  } 
if(property === "maxHeight" || property === "maxWeight"){
  const valueMin = property === "maxHeight" ? form.minHeight : form.minWeight
  const prop = property === "maxHeight" ? "minHeight" : "minWeight"
  if(value<valueMin)
  return setForm({...form, [prop]:numValue, [property]:numValue})
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

const reset = {
  name: "",
  minHeight: 0,
  maxHeight: 0,
  minWeight: 0,
  maxWeight: 0,
  life_span: 15,
  temperament: [],
  temperamentId: [],
  image:"http:"
}
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
  alert(`you are create a dog with the propertys:
          Name:${name},
          Height: ${minHeight} - ${maxHeight} inchs,
          Weight: ${minWeight} - ${maxWeight} pounds,
          Life span: ${life_span},
  `)
    axios.post("http://localhost:3001/dogs/", newDog)
    .then(res => res.data)
    .catch(error)
    setForm(reset)

}
  return (
  <div className={style.container}>
    {<p className={style.enun}>A continuacion indique las carcteristicas de su perro <span>{`(no puede dejar los campos vacios)`}</span></p>}

		{error.name ? <span className={style.warning}>{error.name}</span> : !form.name.length && <span className={style.warning}>Put your dog name</span>}<br />
    <div>
      <label htmlFor="name">Name: </label>
			<input className={style.input} type="search" name="name" value={form.name} onChange={handleForm} placeholder="Put your dog name" />
    </div>
    
    {/* HEIGHT */}
    <label htmlFor="minHeight">Min height: </label>
    <input className={style.input}  type="number" min={1} max={50} name="minHeight" value={minHeight} onChange={handleForm} style={{ width: "3rem" }}/>
    <span>inchs</span>
    <br />
    <label htmlFor="maxHeight">Max height: </label>
    <input className={style.input}  type="number" min={1} max={50} name="maxHeight" value={maxHeight} onChange={handleForm} style={{ width: "3rem" }} />
    <span>inchs</span>
    {maxHeight > 50 && <h5 className={style.warning}>Are you creating a dinosaur?</h5>}
    <br />

    {/* WEIGHT */}
    <label htmlFor="minWeight">Min weight: </label>
    <input className={style.input}  type="number" min={1} max={250} name="minWeight" value={minWeight} onChange={handleForm} style={{ width: "3rem" }}/>
    <span>pounds</span>
    <br />
    <label htmlFor="maxWeight">Max weight: </label>
    <input className={style.input} type="number" min={1} max={250} name="maxWeight" value={maxWeight} onChange={handleForm} style={{ width: "3rem" }} />
    <span>pounds</span>
    {maxWeight > 250 && <h5 className={style.warning}>Are you creating a dinosaur?</h5>}
    <br />

    {/* LIVE_SPAN */}
			<label htmlFor="life_span">Life span: </label>
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

			<input className={style.input} type="text" readOnly={true} value={form.life_span} style={{ width: "1rem" }} />
			<span>Years</span>
			<br />
			{/* TEMPERAMENT */}
        {temperamentId.length === 0 && <p className={style.warning}>Select almost one temperament</p>}
			<label htmlFor="temperament">Temperament</label>
			<select name="temperament" onClick={handleForm} >
				{temperaments.map((temp) => (
					<option value={temp}>{temp} </option>
				))}
			</select>
			<br />
     Put Url image<input className={style.input} type="url" name="image" placeholder='http://' value={form.image} onChange={handleForm}/>
			<br />
      <hr />
			<div
				style={{textAlign: "center", width: "60%", margin: "auto", }}>
				<table style={{ justifyContent: "center" }}>
					<thead>
						<tr>
							<th colspan="5">So is your dog?</th>
						</tr>
					</thead>
					<tr>
						<td>Name</td>
						<td>Height (inchs)</td>
						<td>Weight (pounds)</td>
						<td>Life Span (years)</td>
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