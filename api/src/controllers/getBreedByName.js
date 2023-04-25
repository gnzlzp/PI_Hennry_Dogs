const axios = require("axios");
const {Dog} = require("../db")
const { Op } = require("sequelize");
const url_image = "https://cdn2.thedogapi.com/images/"


const getBreedByName = async (name) => {

	// const dogName = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);
	const dogName = await axios.get(`https://api.thedogapi.com/v1/breeds`)
	const dogsData = dogName.data
	const dogsByName = dogsData.filter(d=>d.name.toLowerCase().includes(name.toLowerCase()))

	const dogsList = await dogsByName.map((dog) => {
		const weights =  dog.weight.imperial.includes(' – ') ? dog.weight.imperial.split(' – ') : dog.weight.imperial.split(' - ')
		const heights = dog.height.imperial.split (' - ')
		return {
			id: dog.id,
			name: dog.name,
			weight: weights,
			height: heights,
			life_span: dog.life_span,
			temperament: dog.temperament,
			image: dog.image.url,
			// image: `${url_image}${dog.reference_image_id}.jpg`,
			create: false,
		};
	});
		
	const dogs_db = await Dog.findAll({
		where: {
		  name: {
			[Op.iLike]: `%${name}%`,
		  },
		},
	  });
	if(!dogsList.length && !dogs_db.length){
		throw Error ('Name not found')
	}

	return [...dogsList,...dogs_db]
};

module.exports = {
	getBreedByName,
};
