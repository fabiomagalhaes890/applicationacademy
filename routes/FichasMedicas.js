module.exports = function(app) {

	var Usuarios = app.db.models.usuarios;
	var FichaMedica = app.db.models.fichas_medicas;

	app.route("/fichasmedicas/:id") // CRUD ficha medica para o front do usuario 
		.get(function(req, res) {
			FichaMedica.findOne({
				where: { usuario_id: req.params.id }
			})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		})
		.put(function(req, res) {
			FichaMedica.update(req.body, {where: { usuario_id: req.params.id }})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});	
		});

	app.route("/fichasmedicas")
	.get(function(req, res) {
			FichaMedica.findAll({})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		})
		.post(function(req, res) {
			FichaMedica.create(req.body)
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});

}