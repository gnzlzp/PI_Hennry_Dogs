const axios = require("axios");
const {Dog} = require("../db")

const getBreedByName = async (name) => {

	const dogName = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);
	let breed = "";
	breed = dogName.data[0].breed_group
	const dogsApi = await axios.get("https://api.thedogapi.com/v1/breeds/")
	const breeds = dogsApi.data.filter((dog) => dog.breed_group === breed);
	
	const breeds_db= await Dog.findAll({where:{breed_group:breed}})
	
	if(!dogName.data.length && !breeds_db.length){
		throw Error ('Name not found')
	}

	return [...breeds,...breeds_db];
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