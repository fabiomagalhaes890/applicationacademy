module.exports = function(app){

	const Estados = app.db.models.estados;

	app.route("/estados")
		.get(function(req, res) {
			Estados.findAll({})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.send(412).json({msg: err.message});
			});
		})
		.post(function(req, res) {

			req.body.forEach(function(estado){

				Estados.create(estado)
				.then(function(result) {
					res.json(result);
				})
				.catch(function(err) {
					res.send(412).json({msg: err.message});
				});
			});
		});

	app.route("/estados/:id")
		.get(function(req, res) {
			Estados.findOne({ where: { id: req.params.id }})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.send(412).json({msg: err.message});
			});
		});
};