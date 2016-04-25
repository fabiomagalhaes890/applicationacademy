module.exports = function(sequelize, DataType) {

	const fichas_medicas = sequelize.define("fichas_medicas", {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		pa: {
			type: DataType.STRING,
			allowNull: true
		},
		bpm: {
			type: DataType.STRING,
			allowNull: true
		},
		dobras: {
			type: DataType.STRING,
			allowNull: true
		},
		subescapular: {
			type: DataType.STRING,
			allowNull: true
		},
		triceps: {
			type: DataType.STRING,
			allowNull: true
		},
		peitoral: {
			type: DataType.STRING,
			allowNull: true
		},
		axilarmedia: {
			type: DataType.STRING,
			allowNull: true
		},
		suprailiaca: {
			type: DataType.STRING,
			allowNull: true
		},
		abdominal: {
			type: DataType.STRING,
			allowNull: true
		},
		femuralmedio: {
			type: DataType.STRING,
			allowNull: true
		},
		bracodireito: {
			type: DataType.STRING,
			allowNull: true
		},
		bracoesquerdo: {
			type: DataType.STRING,
			allowNull: true
		},
		peito: {
			type: DataType.STRING,
			allowNull: true
		},
		cintura: {
			type: DataType.STRING,
			allowNull: true
		},
		abdomem: {
			type: DataType.STRING,
			allowNull: true
		},
		quadril: {
			type: DataType.STRING,
			allowNull: true
		},
		coxadireita: {
			type: DataType.STRING,
			allowNull: true
		},
		coxaesquerda: {
			type: DataType.STRING,
			allowNull: true
		},
		panturrilhadireita: {
			type: DataType.STRING,
			allowNull: true
		},
		panturrilhaesquerda: {
			type: DataType.STRING,
			allowNull: true
		},
		observacoes: {
			type: DataType.STRING,
			allowNull: true
		},
		peso: {
			type: DataType.REAL,
			allowNull: true
		},
		estatura: {
			type: DataType.STRING,
			allowNull: true
		}		
	},
	{
		classMethods: {
			associate: function(models) {
				fichas_medicas.belongsTo(models.usuarios);
				fichas_medicas.belongsTo(models.profissionais);
			}
		}
	});
	return fichas_medicas;
};