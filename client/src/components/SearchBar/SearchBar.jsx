import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {searchName} from '../../Redux/actions'


const SearchBar = () => {
	const [name, setName] =  useState('')
	const dispatch = useDispatch()
	const handleChange=()=>{}
	const onSearch =(event)=>{
		dispatch(searchName(name))
	}
	return (
		<div>
			<input type="text" name="input" value={''} onChange={handleChange} />
			<button onClick={onSearch}>Search Dog</button>
		</div>
	);
};

export default SearchBar;
