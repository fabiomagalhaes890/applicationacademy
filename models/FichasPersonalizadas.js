module.exports = function(sequelize, DataType) {

	var fichas_personalizadas = sequelize.define("fichas_personalizadas", {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		descricao: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		repeticoes: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		psequenciasemana: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		ssequenciasemana: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		tsequenciasemana: {
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
				fichas_personalizadas.hasMany(models.usuarios);
				fichas_personalizadas.hasMany(models.l_fichaspersonalizadas_exercicios);
				fichas_personalizadas.hasMany(models.l_usuario_exercicios);
			}
		}
	});
	return fichas_personalizadas;
};