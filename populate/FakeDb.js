const { movies } = require('./data');
const Movie = require('../db/models/movie');

class FakeDb {
	async clean() {
		await Movie.deleteMany({});
	}
	async addData() {
		await Movie.create(movies);
	}
	async populate() {
		await this.clean();
		await this.addData();
	}
}

module.exports = new FakeDb();
