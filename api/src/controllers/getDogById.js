const axios = require("axios");
const { Dog,Temperament } = require("../db");
const url_image = "https://cdn2.thedogapi.com/images/"

const getDogById = async (idDog, src) => {
	if (src === "api") {
		const dogApi = await axios.get(`https://api.thedogapi.com/v1/breeds/${idDog}`);
		const dog = dogApi.data;
		return  {
			id: dog.id,
			name: dog.name,
			weight: dog.weight,
			height: dog.height,
			life_span: dog.life_span,
			temperament: dog.temperament,
			image: dog.reference_image_id && `${url_image}${dog.reference_image_id}.jpg`
		};
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
