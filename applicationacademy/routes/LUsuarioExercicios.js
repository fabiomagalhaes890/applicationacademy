module.exports = function(app) {

	const UsuarioExercicios = app.db.models.l_usuario_exercicios;

	app.route("/usuarioexercicios")
	.get(function(req, res) {
			UsuarioExercicios.findAll({})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		})
		.post(function(req, res) {
			UsuarioExercicios.create(req.body)
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});

	app.route("/usuarioexerciciosget")
		.post(function(req, res){
			var sequencia = req.body.sequencia;
			var exercicio_id = req.body.exercicio_id;
			var usuario_id = req.body.usuario_id;

			UsuarioExercicios.findOne({ where: { sequencia: sequencia, exercicio_id: exercicio_id, usuario_id: usuario_id }})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});

	app.route("/usuarioexerciciosid")
		.post(function(req, res) {

			var sequencia = req.body.sequencia;
			var exercicio_id = req.body.exercicio_id;
			var usuario_id = req.body.usuario_id;

			UsuarioExercicios.destroy({ where: { sequencia: sequencia, exercicio_id: exercicio_id, usuario_id: usuario_id }})
			.then(function(result) {
				res.sendStatus(204);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});

	app.route("/alunoexercicios/:id")
		.get(function(req, res) {
			UsuarioExercicios.findAll({ where: { usuario_id: req.params.id }})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});

	app.route("/usuarioexercicios/:id")
		.get(function(req, res) {
			UsuarioExercicios.findAll({ where: { exercicio_id: req.params.id }})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		})
		.put(function(req, res) {
			UsuarioExercicios.update(req.body, { where: { id: req.params.id }})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		})
		.delete(function(req, res) {
			UsuarioExercicios.destroy({ where: { usuario_id: req.params.id }})
			.then(function(result) {
				res.sendStatus(204);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});

	app.route("/usuarioexerciciosdelete/:id")
		.delete(function(req, res) {
			UsuarioExercicios.destroy({ where: { id: req.params.id }})
			.then(function(result) {
				res.sendStatus(204);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});
};