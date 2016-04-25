module.exports = function(app){

	const Metas = app.db.models.metas_usuarios;
	const Alunos = app.db.models.usuarios;
	const Solicitacoes = app.db.models.solicitacoes;
	const Equipamentos = app.db.models.equipamentos;
	const Historico = app.db.models.historico_revisoes;

	app.route("/ultimosalunos")
		.get(function(req, res) {
			Alunos.findAll({
				order: [
					['created_at', 'DESC']
				], limit: 10
			})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});

	app.route("/ultimassolicitacoes")
		.get(function(req, res) {
			Solicitacoes.findAll({ where: { situacao: 'N' },
				order: [
					['created_at', 'DESC']
				], limit: 10
			})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});

	/*app.route("/manutencoes")
		.get(function(req, res) {
			Exercicios.findAll({
				order: [
					['created_at', 'DESC']
				], limit: 10
			})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});*/

	app.route("/metasvencidas")
		.get(function(req, res) {
			Metas.findAll({
				where: { datarevisao: Date.now() - 180 }, limit: 10
			})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});
};