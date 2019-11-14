const dbconnection = require('./dbconnect');

// bunch of functions

const userFunctions = require('./functions/userfunctions');
const petFunctions = require('./functions/petfunctions');

module.exports = {
  user: userFunctions,
  pet: petFunctions
};
