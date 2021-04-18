const mongoose = require('mongoose');
const { Schema } = mongoose;

// Your schemas will go here. Replace newSchema with the schema name. 
const newSchema = new Schema({
  // schema info here
  name: String,
});

// The name of the model you will be referencing throughout project, rename schemaModel. 'dbname' should match the database you are using in Mongo.
const schemaModel = mongoose.model('dbName', newSchema);

module.exports = schemaModel;