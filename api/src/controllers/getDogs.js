const axios = require("axios");
const { Dog } = require("../db");

const getDogs = async () => {
	const db_dogs= await Dog.findAll()
	const dogsApi = await axios.get("https://api.thedogapi.com/v1/breeds/");
	const dogs = dogsApi.data.map((dog) => {
		return {
			id: dog.id,
			name: dog.name,
			weight: dog.weight,
			height: dog.height,
			life_span: dog.life_span,
			temperament: dog.temperament,
			image: dog.image.url,
			create:false,
		};
	});
	return [...db_dogs, ...dogs];
};

module.exports = {
	getDogs,
};
