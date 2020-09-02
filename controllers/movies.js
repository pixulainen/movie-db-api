const { mongo } = require('mongoose');

const mongoose = require('mongoose');
const Movie = mongoose.model('Movie');

exports.getMovies = async (req, res) => {
	try {
		const movies = await Movie.find({});
		return res.json(movies);
	} catch (err) {
		return res.status(422).send(err.message);
	}
};

exports.getMovieById = async (req, res) => {
	try {
		const movie = await Movie.findById(req.params.id);
		return res.json(movie);
	} catch (err) {
		return res.status(422).send(err.message);
	}
};
