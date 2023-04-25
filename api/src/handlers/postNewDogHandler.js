const { createDog } = require("../controllers/postNewDog");

const postNewDogHandler = async (req, res) => {
	const { name, height, weight, life_span, temperament, image, create } =
		req.body;
	try {
		const newDog = await createDog(
			name,
			height,
			weight,
			life_span,
			temperament,
			image,
			create
		);
		res.status(201).json({ message: "Dog created!" });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = {
	postNewDogHandler,
};
