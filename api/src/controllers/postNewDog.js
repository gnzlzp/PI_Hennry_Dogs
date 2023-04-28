const { Dog, Temperament } = require("../db");

const createDog = async (
	name,
	height,
	weight,
	life_span,
	temperament,
	image,
	create
) => {
	if (name && height && weight && life_span && image) {
		const newDog = await Dog.create({
			name,
			weight,
			height,
			life_span,
			image,
			create
		});

			await newDog.addTemperaments(temperament);
		
		return newDog;
	}
	throw Error ("Missing Data!")
};
module.exports = {
	createDog,
};
