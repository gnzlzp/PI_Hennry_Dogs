const { Temperament } = require("../db");

const createTemperaments = async (temperaments) => {
  for (const temperament of temperaments) {
   await Temperament.findOrCreate({
      where: { name: temperament },
    });
  }
};
module.exports = {
	createTemperaments,
};

