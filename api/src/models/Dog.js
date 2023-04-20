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
				type: DataTypes.ARRAY(DataTypes.STRING),
				allowNull: false,
			},
			weight: {
				type: DataTypes.ARRAY(DataTypes.STRING),
				allowNull: false,
			},
			life_span: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			image: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			create:{
				type : DataTypes.BOOLEAN,
				defaultValue : true,
			}

		},
		{ timestamps: false }
	);
};
