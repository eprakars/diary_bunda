const itemController = require('../controllers/item-controller');
const Joi = require('joi');

module.exports.update = {
  tags: ['api'],
  handler: itemController.update,
  validate: {
    params: {
      id: Joi.number().required()
    },
    payload: {
      name: Joi.string().required(),
      quantity: Joi.number().required()
    }
  }
};

module.exports.delete = {
  tags: ['api'],
  handler: itemController.delete,
  validate: {
    params: {
      id: Joi.number().required()
    }
  }
}

module.exports.get = {
  tags: ['api'],
  handler: itemController.get
}
