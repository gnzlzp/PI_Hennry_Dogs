const { createDog } = require("../controllers/postNewDog");

const postNewDogHandler = async (req, res) => {
	try {
		const { name, height, weight, life_span } = req.body;
		const newDog = await createDog(name, height, weight, life_span);
		res.status(201).json(newDog);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = {
	postNewDogHandler,
};
