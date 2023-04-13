const { getDogById } = require("../controllers/getDogById");

const getDogByIdHandler = async (req, res) => {
	const { id } = req.params;

	const src = isNaN(id) ? "bd" : "api";

	// if(isNaN(id)){
	// 	//busca en la bd
	// }else{
	// 	//busca en la api
	// }
	try {
		const dog = await getDogById(id, src);
		res.status(200).json(dog);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

module.exports = {
	getDogByIdHandler,
};
