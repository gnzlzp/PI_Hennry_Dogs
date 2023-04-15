import { GET_ALL_DOGS, GET_ALL_TEMPERAMENTS, SEARCH_NAME } from "./actions";
import axios from "axios";

const initialState = {
	dogs: [],
	temperaments: [],
	names: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_DOGS:
			return {
				...state,
				dogs: action.payload,
			};
		case GET_ALL_TEMPERAMENTS:

      return {
        ...state,
        temperaments: [...state.temperaments , action.payload],
      };
		case SEARCH_NAME:
      const searchNames = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/name?name=${action.payload}`);
          return response.data;
        } catch (error) {
          console.error(error);
          return [];
        }
      };
      return {
        ...state,
        names: searchNames(),
      };
		default:
			return { ...state };
	}
};

export default rootReducer;
