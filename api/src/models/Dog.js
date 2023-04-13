const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		"Dog",
		{
			id: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
				autoincrement: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			height: {
				type: DataTypes.DECIMAL,
				allowNull: false,
			},
			weight: {
				type: DataTypes.DECIMAL,
				allowNull: false,
			},
			life_span: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			image: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			breed_group:{
				type: DataTypes.STRING,
			},
			temperament:{
				type: DataTypes.STRING,
			}
		},
		{ timestamps: false }
	);
};
