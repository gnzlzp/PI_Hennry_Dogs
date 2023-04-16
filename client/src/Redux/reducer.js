import { FILTER_BY_TEMP, GET_ALL_DOGS, GET_ALL_TEMPERAMENTS, SEARCH_NAME } from "./actions";
import axios from "axios";

const initialState = {
	dogs: [],
	dogs_page: [],
	temperaments: [],
	names: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_DOGS:
			return {
				...state,
				dogs: [...action.payload],
				dogs_page: [...action.payload],
			};
		case GET_ALL_TEMPERAMENTS:
			return {
				...state,
				temperaments: [...action.payload],
			};
		case SEARCH_NAME:
			return {
				...state,
				names: [...action.payload],
				dogs_page: [...action.payload],
			};
			case FILTER_BY_TEMP:
				return {
					...state,
					dogs_page: [...action.payload],
				};
		default:
			return { ...state };
	}
};

export default rootReducer;
