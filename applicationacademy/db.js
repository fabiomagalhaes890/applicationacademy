'use strict'

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

let db = null;

module.exports = function(app) {

	if(!db) {
		const config = app.libs.config;
		const sequelize = new Sequelize(
			config.database,
			config.username,
			config.password,
			config.params
		);

		db = {
			sequelize,
			Sequelize,
			models: {}
		};

		const dir = path.join(__dirname, "models");
		fs.readdirSync(dir).forEach(function(file) {
			const modelDir = path.join(dir, file);
			const model = sequelize.import(modelDir);
			db.models[model.name] = model;
		});

		Object.keys(db.models).forEach(function(key) {
			db.models[key].associate(db.models);
		});
	}
	return db;
};