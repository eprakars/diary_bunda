const Home = require('./handlers/home');
const User = require('./handlers/user');
const Item = require('./handlers/item');

module.exports = {
  name: 'go-rental',
  register: (server) => {
    const routes = [
      {
        method: 'GET', path: '/', config: Home.hello
      },
      {
        method: 'POST', path: '/user/login', config: User.login
      },
      {
        method: 'POST', path: '/item/{id}/edit', config: Item.update
      },
      {
        method: 'DELETE', path: '/item/{id}', config: Item.delete
      },
      {
        method: 'GET', path: '/item', config: Item.get
      }
    ];
    routes.forEach((route) => server.route(route));
  }
};
