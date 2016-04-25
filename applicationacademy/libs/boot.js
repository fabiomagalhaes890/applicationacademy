module.exports = function(app) {

	app.db.sequelize.sync().done(function() {
		app.listen(app.get("port"), function() {
			console.log("API INSHAPE na porta: " + app.get("port"));
		});		
	});	
};