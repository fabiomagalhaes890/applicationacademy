var bodyParser = require("body-parser");
var cors = require("cors");

module.exports = function(app) {

	app.set("json spaces", 4);
	app.use(cors({
		origin: ["http://localhost:3001","http://localhost:8100"],
		methods: ["GET", "POST", "PUT", "DELETE"],
		allowedHeaders: ["Content-Type", "Authorization"]
	}));
	app.use(bodyParser.json());
	app.use(function(req, res, next) {
		//delete req.body.id;
		next();
	});
};