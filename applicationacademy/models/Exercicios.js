module.exports = function(sequelize, DataType) {

	const exercicios = sequelize.define("exercicios", {
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
		ativo: {
			type: DataType.STRING,
			allowNull: true
		}
	},
	{
		classMethods: {
			associate: function(models) {
				exercicios.hasMany(models.sequencias_exercicios);
				exercicios.hasMany(models.l_fichasmodelo_exercicios);
				exercicios.hasMany(models.l_fichaspersonalizadas_exercicios);
				exercicios.belongsTo(models.equipamentos);
				exercicios.hasMany(models.l_usuario_exercicios);
			}
		}
	});
	return exercicios;
};