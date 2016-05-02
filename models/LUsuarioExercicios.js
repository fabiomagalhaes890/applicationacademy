module.exports = function(sequelize, DataType) {

	var l_usuario_exercicios = sequelize.define("l_usuario_exercicios", {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		peso: {
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
				l_usuario_exercicios.belongsTo(models.exercicios);
				l_usuario_exercicios.belongsTo(models.usuarios);
				l_usuario_exercicios.belongsTo(models.fichas_modelo);
				l_usuario_exercicios.belongsTo(models.fichas_personalizadas);
			}
		}
	});
	return l_usuario_exercicios;
};