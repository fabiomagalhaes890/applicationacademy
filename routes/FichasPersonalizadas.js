module.exports = function(app) {
	var Usuarios = app.db.models.usuarios;
	var FichaPersonalizada = app.db.models.fichas_personalizadas;

	app.route("/fichaspersonalizadas")
		.post(function(req, res) {
			FichaPersonalizada.create(req.body)
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		})
		.get(function(req, res) {
			FichaPersonalizada.findAll({})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});

	app.route("/fichaspersonalizadas/:id") // get para trazer a ficha personalizada na tela do usuario caso exista ficha personalizada.
		.get(function(req, res) {
			FichaPersonalizada.findOne({
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
			FichaPersonalizada.update(req.body, { where: { id: req.params.id }}) // id da ficha
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		})
		.delete(function(req, res) {
			FichaPersonalizada.destroy({ where: { id: req.params.id }}) // id da ficha
			.then(function(result) {
				res.sendStatus(204);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});
};