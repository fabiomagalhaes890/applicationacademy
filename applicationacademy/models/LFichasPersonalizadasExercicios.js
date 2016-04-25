module.exports = function(sequelize, DataType) {

	const l_fichaspersonalizadas_exercicios = sequelize.define("l_fichaspersonalizadas_exercicios", {
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
				l_fichaspersonalizadas_exercicios.belongsTo(models.fichas_personalizadas);
				l_fichaspersonalizadas_exercicios.belongsTo(models.exercicios);
			}
		}
	});
	return l_fichaspersonalizadas_exercicios;
};