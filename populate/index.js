const config = require('../config/dev');
const mongoose = require('mongoose');

const fakeDb = require('./FakeDb');

mongoose.connect(
	config.DB_URI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false
	},
	async (err) => {
		if (err) {
			console.error(err);
		} else {
			console.log('Starting to populate');
			await fakeDb.populate();
			await mongoose.connection.close;

			console.log('Db has been populated!');
		}
	}
);
