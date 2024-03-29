const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

var _db;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
          if (err) throw err;
          _db = db.db('hdb_carpark');
          console.log('Successfully connected to MongoDB.');
          return callback();
        });
      },

  getDb: function () {
    return _db;
  },
};
