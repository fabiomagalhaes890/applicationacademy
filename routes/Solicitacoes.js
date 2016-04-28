module.exports = function(app) {
	
	var Usuarios = app.db.models.usuarios;
	var Solicitacoes = app.db.models.solicitacoes;

	app.route("/solicitacoesusuarios")
		.get(function(req, res) {
			Solicitacoes.findAll({})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		})
		.post(function(req, res) {
			Solicitacoes.create(req.body)
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});

	app.route("/solicitacoesusuariossituacao/:id")
		.get(function(req, res) {
			Solicitacoes.findAll({
				where: { situacao: req.params.id }
			})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});

	app.route("/solicitacaousuario/:id")
		.get(function(req, res) {
			Solicitacoes.findOne({
				where: { id: req.params.id }
			})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});

	app.route("/solicitacoesusuarios/:id") // id do usuario
		.get(function(req, res) {
			Solicitacoes.findAll({
				where: { usuario_id: req.params.id }
			})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		})
		.put(function(req, res) { // id da solicitacao
			Solicitacoes.update(req.body, { where: { id: req.params.id }})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		})
		.delete(function(req, res) { // id da solicitacao
			Solicitacoes.destroy({where: { id: req.params.id }})
			.then(function(result) {
				res.sendStatus(204);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});
};