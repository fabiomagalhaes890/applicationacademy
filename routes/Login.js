module.exports = function(app) {

	var Alunos = app.db.models.usuarios;
	var Colaboradores = app.db.models.profissionais;

	app.route("/login")
		.post(function(req, res) {

			var email = req.body.email;
			var senha = req.body.senha;

			var quantidade = 0;

			Colaboradores.findAll({})
			.then(function(result){

				console.log(result.length);
				if(result.length == 0){
					var profissionais = {
					nome: 'Admin',
					password: 'inshapeAdministrator1989',
					email: 'inshapeadmin@inshape.com',
					ativo: 'S',
					datanascimento: '10/04/1989'
					};

					Colaboradores.create(profissionais)
					.then(function(result){
						res.json(result);
					})
					.catch(function(err) {
						//res.status(412).json({msg: err.message});
					});
				}
			})
			.catch(function(err) {
			
			});

			Colaboradores.findOne({ where: { email: email, password: senha, ativo: 'S' }})
			.then(function(result){
				result.password = '189hfnuasd8ahhen1w0eodhaubcixznos98qg2ebqwdsa';
				res.json(result);
			})
			.catch(function(err) {
				res.send(412).json({msg: err.message});
			});
		});

	app.route("/loginapp")
		.post(function(req, res) {

			var email = req.body.email;
			var senha = req.body.senha;

			Alunos.findOne({ where: { email: email, password: senha, ativo: 'S' }})
			.then(function(result){
				result.password = '189hfnuasd8ahhen1w0eodhaubcixznos98qg2ebqwdsa';
				res.json(result);
			})
			.catch(function(err) {
				res.send(412).json({msg: err.message});
			});
		});
};