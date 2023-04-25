const { getBreedByName } = require("../controllers/getBreedByName");

const findDogsHandler = async (req, res) => {
	const { name } = req.query;
	try {
		const breeds = await getBreedByName(name);
		breeds 
		? res.status(200).json(breeds)
		: res.status(200).json({message : 'Name not found' })
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	findDogsHandler,
};
