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

exports.createMovie = async (req, res) => {
	const movieData = req.body;
	const movie = new Movie(movieData);
	try {
		const newMovie = await movie.save();
		return res.json(newMovie);
	} catch (e) {
		return res.status(422).send(e.message);
	}
};
exports.deleteMovie = async (req, res) => {
	try {
		const movie = await Movie.findOneAndRemove({ _id: req.params.id });
		return res.json({ _id: movie.id });
	} catch (e) {
		return res.status(e.status || 422).json(e.response.data);
	}
};
exports.updateMovie = async (req, res) => {
	const { body, params: { id } } = req;

	try {
		const updatedMovie = await Movie.findOneAndUpdate({ _id: id }, body, {
			new: true,
			runValidators: true
		});
		return res.json(updatedMovie);
	} catch (error) {
		return res.status(422).send(error.message);
	}
};
