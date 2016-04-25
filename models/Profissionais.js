module.exports = function(sequelize, DataType) {

	const profissionais = sequelize.define("profissionais", {
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
		password: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		email: {
			type: DataType.STRING,
			allowNull: false 
		},
		celular: {
			type: DataType.STRING,
			allowNull: true,
			validate: {
				notEmpty: true
			}
		},
		telefone: {
			type: DataType.STRING,
			allowNull: true
		},
		datanascimento: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		endereco: {
			type: DataType.STRING,
			allowNull: true,
			validate: {
				notEmpty: true
			}
		},
		numero: {
			type: DataType.STRING,
			allowNull: true
		},
		bairro: {
			type: DataType.STRING,
			allowNull: true,
			validate: {
				notEmpty: true
			}
		},
		ativo: {
			type: DataType.STRING,
			allowNull: false,
			defaultValue: true
		}
	},
	{
		classMethods: {
			associate: function(models) {
				profissionais.hasMany(models.historico_revisoes);
				profissionais.hasMany(models.solicitacoes);
				profissionais.hasMany(models.notificacoes_dicas);
				profissionais.hasMany(models.fichas_medicas);
				profissionais.belongsTo(models.cidades);
			}
		}
	});
	return profissionais;
};