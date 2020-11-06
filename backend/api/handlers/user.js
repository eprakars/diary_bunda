const userController = require('../controllers/user-controller');
const Joi = require('joi');

module.exports.login = {
  tags: ['api'],
  auth: false,
  handler: userController.login,
  validate: {
    payload: {
      email: Joi.string().email().required(),
      password: Joi.string().required()
    }
  }
};
