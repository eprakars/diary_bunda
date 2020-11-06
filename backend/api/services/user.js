const Model = require('../../models');
const bcrypt = require('bcryptjs');
const jwtToken = require('../../utils/jwtToken');

module.exports.login = ( payload, transaction ) => {
  return Model.User.findOne({
    where: {
      email: payload.email.toLowerCase()
    },
    transaction
  }).then( user => {
    if (!user) return { message: "Email not found"};
    const validPassword = bcrypt.compareSync( payload.password, user.password );
    if (!validPassword) return { message: "Incorrect Password"};

    const tokenData = {
      id: user.id,
      email: user.email,
    };
    return {
      token: jwtToken.createToken(tokenData)
    };
  });
};
