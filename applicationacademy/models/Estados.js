module.exports = function(sequelize, DataType) {

	const estados = sequelize.define("estados", {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		uf: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		nome: {
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
				estados.hasMany(models.usuarios);
				estados.hasMany(models.cidades);
			}
		}
	});
	return estados;
};