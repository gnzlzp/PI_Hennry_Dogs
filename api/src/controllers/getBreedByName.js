const axios = require("axios");
const {Dog} = require("../db")
const { Op } = require("sequelize");
const url_image = "https://cdn2.thedogapi.com/images/"


const getBreedByName = async (name) => {
	const dogName = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);
	const dogsData = dogName.data

	const dogsList = dogsData.map((dog) => {
		const weights = dog.weight.imperial.includes(' – ') ? dog.weight.imperial.split(' – ') : dog.weight.imperial.split(' - ')
		const heights = dog.height.imperial.split (' - ')
	return {
			id: dog.id,
			name: dog.name,
			weight: weights,
			height: heights,
			life_span: dog.life_span,
			temperament: dog.temperament,
			image: `${url_image}${dog.reference_image_id}.jpg`,
			create: false,
		};
	});

	// let breed = "";
	// breed = dogName.data[0].breed_group
	// const dogsApi = await axios.get("https://api.thedogapi.com/v1/breeds/")
	// const breeds = dogsApi.data.filter((dog) => dog.breed_group === breed);
	
	// const breeds_db= await Dog.findAll({where:{breed_group:breed}})
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

	// return [...breeds,...breeds_db];
	return [...dogsList,...dogs_db]
};

module.exports = {
	getBreedByName,
};

/*
si es por nombre entonces la solicitud a la db seria

const { Op } = require("sequelize");

const dogs_db = await Dog.findAll({
  where: {
    name: {
      [Op.iLike]: `%${name}%`,
    },
  },
});
console.log(dogs_db);

*/