module.exports = function(app) {

	var FichasPersonalizadasExercicios = app.db.models.l_fichaspersonalizadas_exercicios;

	app.route("/fichasperexercicios")
		.post(function(req, res) {
			FichasPersonalizadasExercicios.create(req.body)
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.send(412).json({msg: err.message});
			});
		})
		.get(function(req, res){
			FichasPersonalizadasExercicios.findAll({})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});

	app.route("/fichaspersexerciciosativos/:id")
		.get(function(req, res){
			FichasPersonalizadasExercicios.findAll({ where: { fichas_personalizada_id: req.params.id, ativo: 'S' }})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.send(412).json({msg: err.message});
			});
		});

	app.route("/fichasperexerciciosexcluir/:id")
		.delete(function(req, res){
			FichasPersonalizadasExercicios.destroy({ where: { ativo: req.params.id }})
			.then(function(result) {
				res.sendStatus(204);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});

	app.route("/fichasperexercicios/:id")
		.get(function(req, res) {
			FichasPersonalizadasExercicios.findAll({ where: { fichas_personalizada_id: req.params.id }})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		})
		.put(function(req, res) {
			FichasPersonalizadasExercicios.update(req.body, { where: { id: req.params.id }})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		})
		.delete(function(req, res) {
			FichasPersonalizadasExercicios.destroy({ where: { fichas_personalizada_id: req.params.id }})
			.then(function(result) {
				res.sendStatus(204);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});
};