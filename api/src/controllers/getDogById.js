 const axios = require("axios");
const { Dog,Temperament } = require("../db");

const getDogById = async (idDog, src) => {
	if (src === "api") {
		const dogsApi = await axios.get(`https://api.thedogapi.com/v1/breeds`);
		const dogs = dogsApi.data;
		const [{ id, name, weight, height, life_span, temperament, image }] = await dogs.filter(dog=>dog.id==idDog)
		const dog = { 
			id,
			name,
			weight: weight.imperial,
			height: height.imperial,
			life_span,
			temperament,
			image: image.url 
		}
		return dog
		
	} else {
		const dog = await Dog.findByPk(idDog,{
			include: {
				model: Temperament,
				attributes: ["name"],
				through: { attributes: [] },
			},
		});
		return dog;
	}
};

module.exports = {
	getDogById,
};

