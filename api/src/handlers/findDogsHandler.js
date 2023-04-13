const { getBreedByName } = require("../controllers/getBreedByName");

const findDogsHandler = async (req, res) => {
	const { name } = req.query;
	try {
		const breeds = await getBreedByName(name);
			res.status(200).json(breeds);
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
};

module.exports = {
	findDogsHandler,
};
