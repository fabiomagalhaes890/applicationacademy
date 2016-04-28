module.exports = function(sequelize, DataType) {

	var notificacoes_dicas = sequelize.define("notificacoes_dicas", {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		titulo: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		descricao: {
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
				notificacoes_dicas.belongsTo(models.profissionais);
			}
		}
	});
	return notificacoes_dicas;
};