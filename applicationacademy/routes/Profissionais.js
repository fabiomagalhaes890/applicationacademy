module.exports = function(app) {

	const Profissionais = app.db.models.profissionais;

	/*app.route("/profissionais1")
		.get(function(req, res) {

			var quantidade = 0;

			Profissionais.findAll({})
			.then(function(result) {				

					var profissionais = {
						nome: 'Admin',
						password: 'inshapeAdministrator1989',
						email: 'inshapeadmin@inshape.com',
						ativo: 'S',
						datanascimento: '10/04/1989'
					};

					Profissionais.create(profissionais)
					.then(function(result){
						res.json(result);
					})
					.catch(function(err) {
						//res.status(412).json({msg: err.message});
					});


				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});*/

	app.route("/profissionais")
		.get(function(req, res) {
			Profissionais.findAll({})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		})
		.post(function(req, res) {
			Profissionais.create(req.body)
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});

	app.route("/profissionais/:id")
		.get(function(req, res) {
			Profissionais.findOne({ where: { id: req.params.id }})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		})
		.put(function(req, res) {
			Profissionais.update(req.body, { where: { id: req.params.id }})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		})
		.delete(function(req, res) {
			Profissionais.destroy({ where: { id: req.params.id }})
			.then(function(result) {
				res.sendStatus(204);
			})
			.catch(function(err) {
				res.status(412).json({msg: err.message});
			});
		});

};