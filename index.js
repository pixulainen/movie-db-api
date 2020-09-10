const express = require('express');
const bodyParser = require('body-parser');
const server = express();

async function runServer() {
	await require('./db').connect();

	server.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
	server.use(bodyParser.json()); // Send JSON responses

	server.use('/api/v1/movies', require('./routes/movies'));

	const PORT = parseInt(process.env.PORT, 10) || 3001;

	server.listen(PORT, (err) => {
		if (err) console.error(err);
		console.log('Server ready on port:', PORT);
	});
}

runServer();
