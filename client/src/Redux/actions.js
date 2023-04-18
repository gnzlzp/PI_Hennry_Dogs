import axios from "axios";

export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_ALL_TEMPERAMENTS = "GET_ALL_TEMPERAMENTS";
export const SEARCH_NAME = "SEARCH_NAME";
export const FILTER_BY_TEMP = "FILTER_BY_TEMP";


export const getAllDogs = () => {
	try {
		return async function (dispatch) {
			const res = await axios.get("http://localhost:3001/dogs");
			const dogs = res.data;
			return dispatch({ type: GET_ALL_DOGS, payload: dogs });
		};
	} catch (error) {
		throw Error ('Algo salio mal con perros')
	}
};
export const getAllTemperaments = () => {
	try {
		return async function (dispatch) {
			const res = await axios.get("http://localhost:3001/temperaments");
			const {temperaments} = res.data;
			return dispatch({ type: GET_ALL_TEMPERAMENTS, payload: temperaments });
		};
	} catch (error) {
		throw Error ('Algo salio mal con temperaments')
	}
};
export const searchName = (name) => {
	try {
		return async function (dispatch) {
			const res = await axios.get(
				`http://localhost:3001/dogs/name?name=${name.toLowerCase()}`
			);
			const dogName = res.data;
			console.log(dogName);
			return dispatch({ type: SEARCH_NAME, payload: dogName });
		};
	} catch (error) {
		throw Error("Algo salio mal con nombres");
	}
};
export const filterByTemp = (dogsTemp) => (
	{ type: FILTER_BY_TEMP, payload: dogsTemp }
)
