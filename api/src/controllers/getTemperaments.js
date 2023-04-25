const axios = require("axios");
const { createTemperaments } = require("./createTemperaments");
const Temperament = require("../models/Temperament");


const getTemperaments = async () => {

	const tempsApi = await axios.get("https://api.thedogapi.com/v1/breeds");
	
	const temperaments = [];

	tempsApi.data.forEach((dog) => {
		if (dog.temperament) {
			const temps = dog.temperament.split(","); 

			temps.forEach((temp) => {
				if (!temperaments.includes(temp.trim())) {
					temperaments.push(temp.trim());
				}
			});
		}
	});

	createTemperaments(temperaments.sort())
	return temperaments;
};

module.exports = {
	getTemperaments,
};
