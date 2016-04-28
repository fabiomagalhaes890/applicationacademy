module.exports = function(app){

	var Cidades = app.db.models.cidades;

	app.route("/cidades")
		.get(function(req, res) {
			Cidades.findAll({})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.send(412).json({msg: err.message});
			});
		})
		.post(function(req, res) {			
			req.body.forEach(function(cidade){
				Cidades.create(cidade)
				.then(function(result) {
					res.json(result);
				})
				.catch(function(err) {
					res.send(412).json({msg: err.message});
				});
			});
		});

	app.route("/cidadeporestado/:id")
		.get(function(req, res) {
			Cidades.findAll({ where: { estado_id: req.params.id }})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.send(412).json({msg: err.message});
			});
		});

	app.route("/cidades/:id")
		.get(function(req, res) {
			Cidades.findOne({ where: { id: req.params.id }})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.send(412).json({msg: err.message});
			});
		});	
};