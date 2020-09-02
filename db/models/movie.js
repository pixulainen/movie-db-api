const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
	name: { type: String, required: true, maxlength: 100 },
	releaseYear: { type: Number, required: true },
	description: { type: String, required: true },
	longDesc: { type: String, required: true },
	rating: { type: Number, required: true },
	genre: { type: String, required: true },
	cover: { type: String, required: true },
	image: { type: String, required: true }
});

module.exports = mongoose.model('Movie', movieSchema);
