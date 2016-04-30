module.exports = function(app) {

	var server_port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
	var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

	app.db.sequelize.sync().done(function() {
		app.listen(server_port, server_ip_address, function() {
			console.log("API INSHAPE na porta: " + app.get("port"));
		});		
	});	
};