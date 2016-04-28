module.exports = function(sequelize, DataType) {

	var equipamentos = sequelize.define("equipamentos", {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nome: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		descricao: {
			type: DataType.STRING,
			allowNull: true
		},
		datarevisao: {
			type: DataType.STRING,
			allowNull: true
		}
	},
	{
		classMethods: {
			associate: function(models) {
				equipamentos.hasMany(models.exercicios);
				equipamentos.hasMany(models.historico_revisoes);
			}
		}
	});
	return equipamentos;
};