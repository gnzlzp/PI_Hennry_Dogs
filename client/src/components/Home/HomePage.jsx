import React, { useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";
import useDispatch from 'react-redux'

// import axios from 'axios'

const HomePage = () => {
	
	// const dispatch = useDispatch()

	useEffect(async () => {
		const dogsServ = await axios.get("http://localhost:3001/dogs");
		const dogs = dogsServ.data
	}, []);

	return (
		<>
			<div>
				<SearchBar />
				<div>
					
				</div>
			</div>
		</>
	);
};

export default HomePage;
