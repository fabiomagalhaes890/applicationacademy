module.exports = function(sequelize, DataType) {

	const historico_revisoes = sequelize.define("historico_revisoes", {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		datarevisao: {
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
				historico_revisoes.belongsTo(models.equipamentos);
				historico_revisoes.belongsTo(models.profissionais);
			}
		}
	});
	return historico_revisoes;
};