const homeController = require('../controllers/home-controller');

module.exports.hello = {
  tags: ['api'],
  auth: false,
  handler: homeController.index
};

module.exports.notFound = {
  handler: function () {
    return { result: '404 Not Found.' };
  }
};
