const express = require('express');
const app = express();
const cors = require('cors'); // allows cross origin resource sharing
require('dotenv').config({ path: './config.env' }); // loads environment variables from a .env file into process.env file, this lets you separate configuration files from the code
// const port = process.env.PORT || 5000; // const port process.env.port will access the port variable from the config.env we required

app.set('port', process.env.PORT || 5000);
console.log('+++++++++++++++' + app.get('port'));

app.use(cors());
app.use(express.json());
app.use(require('./routes/record'));

// Serve static assets if in production
app.use(express.static('./client/build'));

app.get('*', (req, res) => {
	//our GET route needs to point to the index.html in our build
	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

// get driver connection
const dbo = require('./db/conn');

module.exports = app;

app.listen(app.get('port'), () => {
	// perform a database connection when server starts
	dbo.connectToServer(function (err) {
		if (err) console.error(err);
	});
	console.log('Server is running on port:' + app.get('port'));
});
