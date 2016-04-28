module.exports = function(sequelize, DataType) {

	var solicitacoes = sequelize.define("solicitacoes", {
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
		situacao: {
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
				solicitacoes.belongsTo(models.usuarios);
				solicitacoes.belongsTo(models.profissionais);
			}
		}
	});
	return solicitacoes;
};