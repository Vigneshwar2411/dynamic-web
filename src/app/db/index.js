const mongoose = require('mongoose');
const config = require('../config');
let isConnectedBefore = false;
const env = process.env.NODE_ENV;
console.info('Node Env is set to:' + env);

const connect = function() {
  try {
    mongoose.connect(config.mongoConnectionString, { useNewUrlParser: true});
  } catch(error) {
    console.info("Connection Error" , error);
  }
};
connect();
mongoose.connection.on('error', function() {
  console.info("Could not connect to MongoDB");
});
mongoose.connection.on('disconnected', function(){
  console.warn('Lost MongoDB connection...');
  if (!isConnectedBefore)
    console.info("isConnectedBefore:"+ isConnectedBefore);
  connect();
});
mongoose.connection.on('connected', function() {
  isConnectedBefore = true;
  console.info("Connection established to MongoDB");

  console.info("Initial Connection established to MongoDB, database connected to:"+mongoose.connection.db.databaseName);
  console.info("isConnectedBefore:"+ isConnectedBefore);
  // change to ideasportal db
  mongoose.connection.db = mongoose.connection.client.db('asc');

  console.info("Connection established to MongoDB, database connected to:"+mongoose.connection.db.databaseName);

});
mongoose.connection.on('reconnected', function() {
  console.info('Reconnected to MongoDB');

});
const quit = () => {
  mongoose.connection.close(function () {
    console.info('Force to close the MongoDB conection');
  });
};
module.exports = {
  mongoose,
  quit
};
