import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTemperaments } from "../../Redux/actions";

const Form = () => {

	// GLOBAL STATE TEMP
	const temperaments = useSelector((state) => state.temperaments);

	const dispatch = useDispatch();

	useEffect(() => {
		!temperaments.length && dispatch(getAllTemperaments());
	}, []);

	const [error, setError] = useState({
		name: "",
	});

	// INPUT NAME
	const [nameDog, setNameDog] = useState("");
	const handleName = (event) => {
		setNameDog(event.target.value);
		validate();

		// if(nameDog)	/^[a-zA-Z\s]+$/.test(event.target.value)
		// ? setError({...error,name:''})
		// : setError({...error,name:'solo se admiten letras'})
	};

	const validate = () => {
		if (nameDog)
			/^[a-zA-Z\s]+$/.test(nameDog)
				? setError({ ...error, name: "" })
				: setError({ ...error, name: "solo se admiten letras" });
	};

	// INPUT UNIT
	const [unit, setUnit] = useState(true);
	const handleUnit = () => {
		unit === true ? setUnit(false) : setUnit(true);
	};

	// INPUT MIN HEIGHT
	const [minHeight, setMinHeight] = useState(Number);
	const handleMinHeight = (event) => {
		const value = Number(event.target.value);
		if (value > maxHeight) {
			setMinHeight(maxHeight + 1);
			setMaxHeight(value);
		} else {
			setMinHeight(value);
		}
	};

	// INPUT MAX HEIGHT
	const [maxHeight, setMaxHeight] = useState(Number);
	const handleMaxHeight = (event) => {
		const value = Number(event.target.value);
		if (value < minHeight) {
			setMaxHeight(minHeight - 1);
			setMinHeight(value);
		} else {
			setMaxHeight(value);
		}
	};

	// INPUT MIN WEIGHT
	const [minWeight, setMinWeight] = useState(Number);
	const handleMinWeight = (event) => {
		const value = Number(event.target.value);
		if (value > maxWeight) {
			setMinWeight(maxWeight + 1);
			setMaxWeight(value);
		} else {
			setMinWeight(value);
		}
	};

	// INPUT MAX WEIGHT
	const [maxWeight, setMaxWeight] = useState(Number);
	const handleMaxWeight = (event) => {
		const value = Number(event.target.value);
		if (value < minWeight) {
			setMaxWeight(minWeight - 1);
			setMinWeight(value);
		} else {
			setMaxWeight(value);
		}
	};

	// INPUT YEAR
	const [year, setYear] = useState(15);
	const handleYear = (event) => {
		setYear(event.target.value);
	};

	// INPUT TEMP
	const [tempSelect, setTempSelect] = useState([]);
	const handleTemp = (event) => {
		if (!tempSelect.includes(event.target.value)) {
			setTempSelect([...tempSelect, event.target.value]);
		} else {
			setTempSelect(tempSelect.filter((temp) => temp !== event.target.value));
		}
	};

	const [form, setForm] = useState({
		name: nameDog,
		height: `${minHeight} - ${maxHeight}`,
		weight: `${minWeight} - ${maxWeight}`,
		life_span: `${year}`,
		temperamet: tempSelect,
	});

	console.log(form);

	const handlePost = () => {
		//hago click y mando una peticion axios.post(http//:localhost:3001 , form)
	};

	return (
		<div style={{ margin: "10px", width: "90%", justifyContent: "center" }}>
			{/* NOMBRE */}
			<label htmlFor="name">Name: </label>
			<input
				type="text"
				name="name"
				id=""
				value={nameDog}
				onChange={handleName}
			/>
			{error.name && <span>{error.name}</span>}
			<br />

			<label htmlFor="unit">Select unid</label>
			<br />
			<input type="radio" name="unit" id="" onChange={handleUnit} checked={unit} /> Imperial
			<input type="radio" name="unit" id="" onChange={handleUnit} /> Metric
			<br />
			{/* ALTURA */}
			<label htmlFor="min_height">Min Height: </label>
			<input type="number" min={1} max={100} name="min_height" id="height" value={minHeight} onChange={handleMinHeight} style={{ width: "3rem" }}/>
			{unit === true ? <span>Foots</span> : <span>Cm</span>}
			<br />
			<label htmlFor="max_height">Max Height: </label>
			<input type="number" min={1} max={100} name="max_height" id="height" value={maxHeight} onChange={handleMaxHeight} style={{ width: "3rem" }} />
			{unit === true ? <span>Foots</span> : <span> Cm</span>}
			<br />
			{/* WEIGHT */}
			<label htmlFor="min_weight">Min Weight: </label>
			<input type="number" min={1} max={100} name="min_weight" value={minWeight} onChange={handleMinWeight}	style={{ width: "3rem" }}	/>
			{unit === true ? <span>Pounds</span> : <span>Kg</span>}
			<br />
			<label htmlFor="max_weight">Max Weight: </label>
			<input type="number" min={1} max={100} name="max_weight" value={maxWeight} onChange={handleMaxWeight} style={{ width: "3rem" }} />
			{unit === true ? <span>Pounds</span> : <span>Kg</span>}
			<br />
			{/* LIVE_SPAN */}
			<label htmlFor="life_span">Life Span: </label>
			<input type="range" min={1}	max={30} step={1} value={year} name="life_span" list="ticksmatks" onChange={handleYear} style={{ width: "10rem" }} />
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
			<input type="text" readOnly={true} value={year} style={{ width: "1rem" }} />
			<span>Years</span>
			<br />
			{/* TEMPERAMENT */}
			<label htmlFor="temperament">Temperament</label>
			<select name="temperament" id="" onClick={handleTemp}>
				{temperaments.map((temp) => (
					<option value={temp}>{temp}</option>
				))}
			</select>
			<br />
			<br />
			<div
				style={{
					textAlign: "center",
					backgroundColor: "grey",
					width: "60%",
					margin: "auto",
				}}
			>
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
						<td>{nameDog}</td>
						<td>{`${minHeight}-${maxHeight}`}</td>
						<td>{`${minWeight}-${maxWeight}`}</td>
						<td>{year}</td>
						<td>{tempSelect.join(", ")}</td>
					</tr>
				</table>
			</div>
			<br />
			<button onClick={handlePost}>Create</button>
		</div>
	);
};

export default Form;
