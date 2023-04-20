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

		// if (temperament && temperament.length > 0) {
		// 	const temperamentDb = await Temperament.findAll({
		// 		where: { name: temperament },
		// 	});
			await newDog.addTemperaments(temperament);
		// }
		
		return newDog;
	}
};
module.exports = {
	createDog,
};
