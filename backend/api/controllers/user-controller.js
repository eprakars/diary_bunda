const userService = require('../services/user')
module.exports.login = (request, h) => {
  return userService.login(request.payload)
  .then(user => {
    if (user.message) {
      return h.response(user).code(400)
    }
    return user;
  })
}
