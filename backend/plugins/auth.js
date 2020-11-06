const SECRET_KEY = process.env.JWT_SECRET;

const register = function (plugin) {
  plugin.auth.strategy('jwt', 'jwt', {
    key: SECRET_KEY,
    verifyOptions: {
      algorithms: ['HS256']
    },
    validate: () => {
      return { isValid: true };
    }
  });

  // Uncomment this to apply default auth to all routes
  plugin.auth.default('jwt');
};

exports.plugin = {
  register,
  name: 'auth'
};
