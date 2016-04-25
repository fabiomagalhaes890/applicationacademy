module.exports = function(sequelize, DataType) {

	const cidades = sequelize.define("cidades", {
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
		}
	},
	{
		classMethods: {
			associate: function(models) {
				cidades.hasMany(models.usuarios);
				cidades.hasMany(models.profissionais);
				cidades.belongsTo(models.estados);
			}
		}
	});
	return cidades;
};