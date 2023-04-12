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
  let db_connect = dbo.getDb('hdb_carpark');
  db_connect
    .collection('carpark_info')
    .find({})
    .project({ 'result.records': 1 })
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result[0].result.records);
    });
});

// get a single car park information by car_park_no
recordRoutes.route('/record/:id').get(function (req, res) {
  let db_connect = dbo.getDb('hdb_carpark');
  let myquery = { 'result.records.car_park_no': new ObjectId(req.params.id) };
  db_connect
    .collection('carpark_info')
    .findOne(myquery, { 'result.records.$': 1 }, function (err, result) {
      if (err) throw err;
      res.json(result.result.records[0]);
    });
});

module.exports = recordRoutes;
