const { getBreedByName } = require("../controllers/getBreedByName");

const findDogsHandler = async (req, res) => {
	const { name } = req.query;
	try {
		const breeds = await getBreedByName(name);
		breeds 
		&& res.status(200).json(breeds)
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = {
	findDogsHandler,
};
