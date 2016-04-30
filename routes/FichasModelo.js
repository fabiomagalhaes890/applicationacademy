module.exports = function(app) {

	var FichasModelo = app.db.models.fichas_modelo;

	app.route("/fichasmodelo")
		.get(function(req, res) {
			FichasModelo.findAll({})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		})
		.post(function(req, res) {
			FichasModelo.create(req.body)
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});

	app.route("/fichasmodelo/:id")
		.get(function(req, res) {
			FichasModelo.findOne({where: { id: req.params.id }})
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
			FichasModelo.update(req.body, {where: { id: req.params.id }})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});				
		})
		.delete(function(req, res) {
			FichasModelo.destroy({where: { id: req.params.id }})
			.then(function(result) {
				res.sendStatus(204);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});
}; 