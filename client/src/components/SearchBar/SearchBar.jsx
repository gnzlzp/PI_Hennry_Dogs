import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {searchName} from '../../Redux/actions'

const SearchBar = () => {
	const [name, setName] =  useState('')
	const dispatch = useDispatch()
	const handleChange=(event)=>{
		setName(event.target.value)
	}
	const onSearch =()=>{
		dispatch(searchName(name))
		setName('')
	}
	return (
		<div>
			<input type="text" name="input" value={name} onChange={handleChange} autoFocus={true}/>
			<button onClick={onSearch}>Search Dog</button>
		</div>
	);
};

export default SearchBar;
	