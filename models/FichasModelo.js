module.exports = function(sequelize, DataType) {

	var fichas_modelo = sequelize.define("fichas_modelo", {
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
				fichas_modelo.hasMany(models.l_fichasmodelo_exercicios);
				fichas_modelo.hasMany(models.usuarios);
			}
		}
	});
	return fichas_modelo;
};