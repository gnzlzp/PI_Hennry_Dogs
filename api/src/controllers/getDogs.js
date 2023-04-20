const axios = require("axios");
const { Dog , Temperament} = require("../db");

const getDogs = async () => {
	const dogsApi = await axios.get("https://api.thedogapi.com/v1/breeds/");
	const dogs = dogsApi.data.map((dog) => {
		const weights = dog.weight.imperial.includes(' – ') ? dog.weight.imperial.split(' – ') : dog.weight.imperial.split(' - ')
		const heights = dog.height.imperial.split (' - ')
	return {
			id: dog.id,
			name: dog.name,
			weight: weights,
			height: heights,
			life_span: dog.life_span,
			temperament: dog.temperament,
			image: dog.image.url,
			create: false,
		};
	});

	const db_dogs = await Dog.findAll({
		include: {
			model: Temperament,
			attributes: ["name"],
			through: { attributes: [] },
		},
	});

	return [...db_dogs, ...dogs];
};

module.exports = {
	getDogs,
};
