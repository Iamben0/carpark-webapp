const express = require('express');

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require('../db/conn');

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require('mongodb').ObjectId;

// Check if server able to connect to database
console.log('dbo:', dbo);
let db_connect = dbo.getDb('hdb_carpark');
console.log('db_connect:', db_connect);

// get all car park information
recordRoutes.route('/result/records').get(function (req, res) {
  try {
    let db_connect = dbo.getDb('hdb_carpark');
    db_connect
      .collection('carpark_info')
      .find({})
      .project({ 'result.records': 1 })
      .toArray(function (err, result) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(result[0].result.records, null, 2));
      });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// get a single car park information by car_park_no
recordRoutes.route('/result/records/:car_park_no').get(function (req, res) {
  let db_connect = dbo.getDb('hdb_carpark');
  const car_park_no = req.params.car_park_no;
  db_connect
    .collection('carpark_info')
    .findOne({ 'result.records.car_park_no': car_park_no })
    .then(function (result) {
      if (!result) {
        res.status(404).send(`Car park ${car_park_no} not found`);
        return;
      }
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(result.result.records[0], null, 2));
    })
    .catch(function (err) {
      console.log(err);
      res.status(500).send('Internal server error');
    });
});

module.exports = recordRoutes;
