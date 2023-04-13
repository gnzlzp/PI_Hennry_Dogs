const { getDogs } = require("../controllers/getDogs");

const getDogsHandler = async (req, res) => {
	try {
		const dogs = await getDogs();
		res.status(200).json(dogs);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = {
	getDogsHandler,
};
