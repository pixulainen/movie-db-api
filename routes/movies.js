const express = require('express');
const router = express.Router();

const { getMovies, getMovieById, createMovie, deleteMovie, updateMovie } = require('../controllers/movies');

router.get('', getMovies);
router.get('/:id', getMovieById);

router.post('', createMovie);
router.patch('/:id', updateMovie);
router.delete('/:id', deleteMovie);
module.exports = router;
