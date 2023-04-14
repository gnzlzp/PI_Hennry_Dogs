const { Temperament } = require("../db");

const createTemperaments = (temperaments) => {
	temperaments.forEach(async (temperament, id) => {
		await Temperament.create({
			id:id+1,
			name: temperament,
		});
	});
};

module.exports = {
	createTemperaments,
};
