export const GET_ALL_DOGS = "GET_ALL_DOGS";

export const getAllDogs = (dogs) => {
	return { type: GET_ALL_DOGS, payload: dogs };
};
