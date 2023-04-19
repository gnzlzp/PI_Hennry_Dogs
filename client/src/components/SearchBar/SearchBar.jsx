import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {searchName} from '../../Redux/actions'

const SearchBar = () => {
	const [name, setName] =  useState('')
	const [checked, setChecked] = useState(true)
	const [searchIn, setSearchIn] =  useState('allDogs')

	const dispatch = useDispatch()

	const handleChange=(event)=>{
		setName(event.target.value)
	}
	const onSearch =(searchIn)=>{
		if(searchIn === 'allDogs') dispatch(searchName(name))
		if(searchIn === 'myDogs') console.log('aqui busco a los perros de la db');
		if(searchIn === 'otherDogs') console.log('aqui busco a los de la store');
		setName('')
	}
	const handleCheck = (event) =>{
		const value = event.target.value
		value !== 'allDogs' ? setChecked(false): setChecked(true)
		setSearchIn(value) 
	}

	return (
		<div>
			<input type="radio" name="dog" value='myDogs' onClick={handleCheck}/>
			<label htmlFor="dog">My Dogs</label>
			<input type="radio" name="dog" value='otherDogs' onClick={handleCheck}/>
			<label htmlFor="dog">Other Dogs</label>
			<input type="radio" name="dog" value='allDogs' checked={checked} onClick={handleCheck} />
			<label htmlFor="dog">All Dogs</label>
			<br />
			<input type="text" name="input" value={name} onChange={handleChange} searchIn={searchIn} autoFocus={true}/>
			<button onClick={()=>onSearch(searchIn)}>Search Dog</button>
		</div>
	);
};

export default SearchBar;
	