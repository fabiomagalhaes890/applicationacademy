module.exports = function(sequelize, DataType) {

	var alunos = sequelize.define("alunos", {
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
		apelido: {
			type: DataType.STRING,
			allowNull: true
		},
		email: {
			type: DataType.STRING,
			allowNull: false,
			unique: true,
			validate: {
				notEmpty: true
			}
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
			allowNull: true,
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
			type: DataType.BOOLEAN,
			allowNull: false,
			defaultValue: true
		},
		datanascimento: {
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
				alunos.belongsTo(models.fichas_personalizadas);
				alunos.belongsTo(models.fichas_modelo);
				alunos.belongsTo(models.cidades);
				alunos.belongsTo(models.estados);
				alunos.hasMany(models.sequencias_exercicios);
				alunos.hasMany(models.solicitacoes);
				alunos.hasMany(models.fichas_medicas);
				alunos.hasMany(models.metas_usuarios);
				alunos.hasMany(models.l_usuario_exercicios);
			}
		}
	});
	return alunos;
};