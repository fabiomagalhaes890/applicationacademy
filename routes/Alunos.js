module.exports = function(app) {

	var Alunos = app.db.models.alunos;

	app.route("/alunos")
		.get(function(req, res) {
			Alunos.findAll({})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		})
		.post(function(req, res) { // criar regra para gerar fichausuario quando salvar

			Alunos.create(req.body)
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});

	app.route("/alunos/:id")
		.get(function(req, res) {
			Alunos.findOne({where: { id: req.params.id }})
			.then(function(result) {
				if(result) {
					res.json(result);
				} else {
					res.sendStatus(404);
				}
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});				
		})
		.put(function(req, res) {
			Alunos.update(req.body, {where: { id: req.params.id }})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});				
		})
		.delete(function(req, res) {
			Alunos.destroy({where: { id: req.params.id }})
			.then(function(result) {
				res.sendStatus(204);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});
};