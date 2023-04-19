import {
	FILTER_BY_TEMP,
	GET_ALL_DOGS,
	GET_ALL_TEMPERAMENTS,
	SEARCH_NAME,
	ORDER_BY_WEIGHT,
	ORDER_BY_NAME,
} from "./actions";

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
		case ORDER_BY_NAME:
			if(action.payload === 'AscName'){
				return {
					...state,
					dogs_page : [...state.dogs_page].sort((a,b)=>a.name.localeCompare(b.name))
				}
			} else {
				return {
					...state,
					dogs_page : [...state.dogs_page].sort((a,b)=>b.name.localeCompare(a.name))
				}
			}
		case ORDER_BY_WEIGHT:
			if(action.payload === 'AscWeight'){
				
				return {
					...state,
					dogs_page : []
				}
			}else{

			}
		default:
			return { ...state };
	}
};

export default rootReducer;
