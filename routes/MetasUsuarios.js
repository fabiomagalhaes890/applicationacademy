module.exports = function(app) {

	const Usuarios = app.db.models.usuarios;
	const MetasUsuarios = app.db.models.metas_usuarios;

	app.route("/metasusuarios")
		.post(function(req, res) {

			console.log('AEEE', req.body);

			MetasUsuarios.create(req.body)
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});

	app.route("/metasusuariosunico/:id")
		.get(function(req, res) { //id do usuario
			MetasUsuarios.findOne({
				where: { id: req.params.id }
			})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		})
		.put(function(req, res) {
			MetasUsuarios.update(req.body, { where: { id: req.params.id }})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});
		
	app.route("/metasusuarios/:id")
		.get(function(req, res) { //id do usuario
			MetasUsuarios.findAll({
				where: { usuario_id: req.params.id }
			})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		})
		.put(function(req, res) { // id da meta
			MetasUsuarios.update(req.body, { where: { id: req.params.id }})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		})
		.delete(function(req, res) { // id da meta
			MetasUsuarios.destroy({ where: { id: req.params.id }})
			.then(function(result) {
				res.sendStatus(204);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});
};