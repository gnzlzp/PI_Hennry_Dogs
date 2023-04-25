import axios from "axios";

export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_ALL_TEMPERAMENTS = "GET_ALL_TEMPERAMENTS";
export const SEARCH_NAME = "SEARCH_NAME";
export const FILTER_BY_TEMP = "FILTER_BY_TEMP";
export const POST_NEW_DOG = "POST_NEW_DOG";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_WEIGHT = "ORDER_BY_WEIGHT";
export const GET_MY_DOGS = "GET_MY_DOGS";
export const GET_OTHER_DOGS = "GET_OTHER_DOGS";
export const GET_JOIN_DOGS = "GET_JOIN_DOGS";
export const SET_ERROR = "SET_ERROR"

export const getAllDogs = () => {
	return async function (dispatch) {
		const res = await axios.get("http://localhost:3001/dogs");
		const dogs = res.data;
		return dispatch({ type: GET_ALL_DOGS, payload: dogs });
	};
};
export const getAllTemperaments = () => {
	return async function (dispatch) {
		const res = await axios.get("http://localhost:3001/temperaments");
		const { temperaments } = res.data;
		return dispatch({ type: GET_ALL_TEMPERAMENTS, payload: temperaments });
	};
};
export const searchName = (name) => {
	return async function (dispatch) {
		try {
			const res = await axios.get(
			`http://localhost:3001/dogs/name?name=${name.toLowerCase()}`
		);
		const dogName = res.data;
		const error = res.message
		if(error){
			alert(error)
			dispatch({type:SET_ERROR, payload : error})
		} else {
		 dispatch({ type: SEARCH_NAME, payload: dogName });
		}
		} catch (error) { 
			dispatch({type:SET_ERROR, payload : error})
		}
	};
};
export const getMyDogs = () => ({ type: GET_MY_DOGS });
export const getOtherDogs = () => ({ type: GET_OTHER_DOGS });
export const getJoinDogs = () => ({ type: GET_JOIN_DOGS });
export const filterByTemp = (dogsTemp) => ({
	type: FILTER_BY_TEMP,
	payload: dogsTemp,
});
export const orderByName = (value) => ({ type: ORDER_BY_NAME, payload: value });
export const orderByWeight = (value) => ({
	type: ORDER_BY_WEIGHT,
	payload: value,
});
