const user = require('../models/user');

function getUser(id) {
  return user.findByPk(id);
}

module.exports = {
  getUser
};
