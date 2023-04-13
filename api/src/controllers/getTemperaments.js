const axios = require("axios");
const { postTemperaments } = require("../controllers/postTemperaments");


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

	postTemperaments(temperaments.sort())

	return temperaments;
};

module.exports = {
	getTemperaments,
};
