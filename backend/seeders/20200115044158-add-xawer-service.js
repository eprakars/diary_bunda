'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: function (queryInterface) {
    // please don't change this seeders. we initialize the id on util/constants.js.
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Admin',
      email: 'Admin@diarybunda.com',
      password: bcrypt.hashSync("password", 10),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
