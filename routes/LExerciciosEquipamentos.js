module.exports = function(app) {

	var ExerciciosEquipamentos = app.db.models.l_exercicios_equipamentos;

	app.route("/exerciciosequipamentos")
		.post(function(req, res) {
			ExerciciosEquipamentos.create(req.body)
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.send(412).json({msg: err.message});
			});
		});

	app.route("/exerciciosequipamentos/:id")
		.get(function(req, res) {
			ExerciciosEquipamentos.findOne({ where: { id: req.params.id }})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.send(412).json({msg: err.message});
			});
		})
		.put(function(req, res) {
			ExerciciosEquipamentos.update(req.body, { where: { id: req.params.id }})
			.then(function(result) {
				res.json(result);
			})
			.catch(function(err) {
				res.send(412).json({msg: err.message});
			});
		})
		.delete(function(req, res) {
			ExerciciosEquipamentos.destroy({ where: { id: req.params.id }})
			.then(function(result) {
				res.sendStatus(204);
			})
			.catch(function(err) {
				res.send(412).json({msg: err.message});
			});
		});
};