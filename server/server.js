const express = require('express');
const app = express();
const cors = require('cors'); // allows cross origin resource sharing
require('dotenv').config({ path: './config.env' }); // loads environment variables from a .env file into process.env file, this lets you separate configuration files from the code
const port = process.env.PORT || 5000; // const port process.env.port will access the port variable from the config.env we required
app.use(cors());
app.use(express.json());
app.use(require('./routes/record'));
// get driver connection
const dbo = require('./db/conn');

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
