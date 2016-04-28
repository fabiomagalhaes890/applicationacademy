module.exports = function(app) {

	var FichasModeloExercicios = app.db.models.l_fichasmodelo_exercicios;
	
	app.route("/fichasmodeloexercicios")
		.post(function(req, res) {
			FichasModeloExercicios.create(req.body)
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.send(412).json({msg: err.message});
			});
		}).get(function(req, res) {
			FichasModeloExercicios.findAll({})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.send(412).json({msg: err.message});
			});
		});

	app.route("/fichasmodeloexerciciosativos/:id")
		.get(function(req, res){
			FichasModeloExercicios.findAll({ where: { fichas_modelo_id: req.params.id, ativo: 'S' }})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.send(412).json({msg: err.message});
			});
		});

	app.route("/fichasmodeloexercicios/:id")
		.get(function(req, res) {
			FichasModeloExercicios.findAll({ where: { fichas_modelo_id: req.params.id }})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.send(412).json({msg: err.message});
			});
		})
		.put(function(req, res) {
			FichasModeloExercicios.update(req.body, { where: { id: req.params.id }})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.send(412).json({msg: err.message});
			});
		})
		.delete(function(req, res) {
			FichasModeloExercicios.destroy({ where: { fichas_modelo_id: req.params.id }})
			.then(function(result) {
				res.sendStatus(204);
			})
			.catch(function(err) {
				res.send(412).json({msg: err.message});
			});
		})
};