const { getTemperaments } = require("../controllers/getTemperaments");

const getTempDogsHandler = async (req, res) => {
	try {
		const temperaments = await getTemperaments();

		res.status(200).json({ temperaments });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	getTempDogsHandler,
};
