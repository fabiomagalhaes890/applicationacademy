module.exports = function(app) {

	var Usuarios = app.db.models.usuarios;
	var FichaModelo = app.db.models.fichas_modelo;

	app.route("/usuarios")
		.get(function(req, res) {
			Usuarios.findAll({})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		})
		.post(function(req, res) { // criar regra para gerar fichausuario quando salvar

			Usuarios.create(req.body)
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});

	app.route("/usuarios/:id")
		.get(function(req, res) {
			Usuarios.findOne({where: { id: req.params.id }})
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
			Usuarios.update(req.body, {where: { id: req.params.id }})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});				
		})
		.delete(function(req, res) {
			Usuarios.destroy({where: { id: req.params.id }})
			.then(function(result) {
				res.sendStatus(204);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});

	app.route("/usuariosfichasmodelo/:id") // get para trazer a ficha modelo na tela do usuario caso exista ficha modelo.
		.get(function(req, res) {
			FichaModelo.findAll({
				where: { id: req.params.id }
			})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});
};
/*
"fichas_modelo_id": null,
"fichas_personalizada_id": null
*/