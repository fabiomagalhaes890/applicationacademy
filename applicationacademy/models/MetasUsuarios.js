module.exports = function(sequelize, DataType) {

	const metas_usuarios = sequelize.define("metas_usuarios", {
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
		datainicial: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		datafinal: {
			type: DataType.STRING,
			allowNull: true
		},
		estadoinicial: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		estadoatual: {
			type: DataType.STRING,
			allowNull: true
		},
		estadofinal: {
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
				metas_usuarios.belongsTo(models.usuarios);
			}
		}
	});
	return metas_usuarios;
};