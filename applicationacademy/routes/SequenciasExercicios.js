	module.exports = function(app) {
	
	const SequenciasExercicios = app.db.models.sequencias_exercicios;

	app.route("/sequenciasexercicios/:id")
		.get(function(req, res) {
			SequenciasExercicios.findAll({ where: { usuario_id: req.params.id }})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		})
		.post(function(req, res) {
			SequenciasExercicios.create(req.body)
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		})
		.put(function(req, res) {
			SequenciasExercicios.update(req.body, { where: { usuarios_id: req.params.id }})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});
};