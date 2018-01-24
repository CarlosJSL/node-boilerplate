import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';
import config from './config';

let database = null;

const loadModels = (sequelize) => {
	const dir = path.join(__dirname, '../models');
	const models = [];
	fs.readdirSync(dir).forEach((file) => {
		const modelDir = path.join(dir, file);

		const model = sequelize.import(modelDir);
		models[model.name] = model;
	});

	return models;
};

export default () => {
	if(!database){
		const sequelize = new Sequelize(
			config[process.env.NODE_ENV].database,
			config[process.env.NODE_ENV].username,
			config[process.env.NODE_ENV].password,
			config[process.env.NODE_ENV].params
		);

		database = {
			sequelize,
			Sequelize,
			models: {},
		};

		database.models = loadModels(sequelize);

		// relações
		return database;
	} else{
		return database;

	}
};
