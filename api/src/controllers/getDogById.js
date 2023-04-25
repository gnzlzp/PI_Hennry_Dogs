 const axios = require("axios");
const { Dog,Temperament } = require("../db");
// const url_image = "https://cdn2.thedogapi.com/images/"

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
		/////////////////////////////////////////////////////////////////////////////////////
		// const dogApi = await axios.get(`https://api.thedogapi.com/v1/breeds/${idDog}`);
		// const {id, name, weight, height, life_span, temperament, image} = dogApi.data;
		// const dog = {
		// 	id,
		// 	name,
		// 	weight: weight.imperial,
		// 	height: height.imperial,
		// 	life_span,
		// 	temperament,
		// 	image,// : image.url
		// }
		// console.log(dog);

		// return dog
		////////////////////////////////////////////////////////////////////////////////////
		// const dogApi = await axios.get(`https://api.thedogapi.com/v1/breeds/${idDog}`); 
		// const dog = dogApi.data;
		// return  {
		// 	id: dog.id,
		// 	name: dog.name,
		// 	weight: dog.weight.imperial,
		// 	height: dog.height.imperial,
		// 	life_span: dog.life_span,
		// 	temperament: dog.temperament,
		// 	// image: dog.reference_image_id && `${url_image}${dog.reference_image_id}.jpg`
		// 	image: dog.reference_image_id
		// };
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

