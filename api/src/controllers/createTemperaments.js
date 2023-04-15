const { Temperament } = require("../db");

// const createTemperaments = (temperaments) => {
// 	temperaments.forEach(async (temperament) => {
// 		await Temperament.create({
// 			name: temperament,
// 		});
// 	});
// };

const createTemperaments = async (temperaments) => {
  for (const temperament of temperaments) {
    const [foundTemperament] = await Temperament.findOrCreate({
      where: { name: temperament },
    });
  }
};
module.exports = {
	createTemperaments,
};

