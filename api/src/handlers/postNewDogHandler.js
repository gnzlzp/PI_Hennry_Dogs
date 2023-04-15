const { createDog } = require("../controllers/postNewDog");

const postNewDogHandler = async (req, res) => {
	const { name, height, weight, life_span, temperament, image} = req.body;
	try {
		const newDog = await createDog(
			name,
			height,
			weight,
			life_span,
			temperament,
			image
			);
			console.log(newDog)
		res.status(201).json(newDog);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = {
	postNewDogHandler,
};
