module.exports = function(sequelize, DataType) {

	var sequencias_exercicios = sequelize.define("sequencias_exercicios", {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		repeticoes: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		}
	},
	{
		classMethods: {
			associate: function(models) {
				sequencias_exercicios.belongsTo(models.usuarios);
				sequencias_exercicios.belongsTo(models.exercicios);
			}
		}
	});
	return sequencias_exercicios;
};