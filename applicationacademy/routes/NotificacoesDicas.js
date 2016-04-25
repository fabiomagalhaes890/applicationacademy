module.exports = function(app) {

	const NotificacoesDicas = app.db.models.notificacoes_dicas;

	app.route("/notificacoesdicas")
		.get(function(req, res) {
			NotificacoesDicas.findAll({})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			})
		})
		.post(function(req, res) {
			NotificacoesDicas.create(req.body)
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});

	app.route("/ultimasnotificacoes")
		.get(function(req, res) {
			NotificacoesDicas.findAll({ order: [['id', 'DESC']] })
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			})
		});

	app.route("/notificacoespaginadas/:id")
		.get(function(req, res) {

			var pagina = parseInt(req.params.id);

			NotificacoesDicas.findAll({ limit: 4, offset: ((pagina - 1) * 4), order: [['id', 'ASC']]})//((req.body.id - 1) * 5), limit: 4
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			})
		});

	app.route("/totalnotificacoes")
		.get(function(req, res) {
			NotificacoesDicas.findAll({ order: [['id', 'ASC']] })
			.then(function(result) {
				var qtd = result.length;
				res.json(qtd);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			})
		});

	app.route("/notificacoesdicas/:id")
		.get(function(req, res) {
			NotificacoesDicas.findOne({ where: { id: req.params.id }})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		})
		.put(function(req, res) {
			NotificacoesDicas.update(req.body, { where: { id: req.params.id }})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		})
		.delete(function(req, res) {
			NotificacoesDicas.destroy({ where: { id: req.params.id }})
			.then(function(result) {
				res.sendStatus(204);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});
};