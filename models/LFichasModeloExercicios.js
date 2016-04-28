module.exports = function(sequelize, DataType) {

	var l_fichasmodelo_exercicios = sequelize.define("l_fichasmodelo_exercicios", {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		ativo: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		sequencia: {
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
				l_fichasmodelo_exercicios.belongsTo(models.exercicios);
				l_fichasmodelo_exercicios.belongsTo(models.fichas_modelo);
			}
		}
	});
	return l_fichasmodelo_exercicios;
};