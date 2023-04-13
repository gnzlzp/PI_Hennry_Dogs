const { Temperament } = require("../db");

const postTemperaments = (temperaments) => {
	temperaments.forEach(async (temperament,id) => {
		await Temperament.create({
            id,
			name: temperament,
			create:false,
		});
	});
};

module.exports = {
	postTemperaments,
};
