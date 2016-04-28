module.exports = function(sequelize, DataType) {

	var usuarios = sequelize.define("usuarios", {
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
				usuarios.belongsTo(models.fichas_personalizadas);
				usuarios.belongsTo(models.fichas_modelo);
				usuarios.belongsTo(models.cidades);
				usuarios.belongsTo(models.estados);
				usuarios.hasMany(models.sequencias_exercicios);
				usuarios.hasMany(models.solicitacoes);
				usuarios.hasMany(models.fichas_medicas);
				usuarios.hasMany(models.metas_usuarios);
				usuarios.hasMany(models.l_usuario_exercicios);
			}
		}
	});
	return usuarios;
};