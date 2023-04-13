const { Dog } = require("../db");

const createDog = async (
	name,
	height,
	weight,
	life_span,
	temperament,
	breed_group
) => {
	if (name && height && weight && life_span) {
		const newDog = await Dog.create({
			name,
			weight,
			height,
			life_span,
			temperament,
			breed_group,
		});
		if (newDog) {
			return newDog;
		}
	}
};
module.exports = {
	createDog,
};
