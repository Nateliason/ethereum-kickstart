const routes = require('next-routes')(); // need to do this extra () for Next Routes according to documentation

routes
  .add('/campaigns/new', '/campaigns/new') // makes sure that 'new' isn't treated like an address
  .add('/campaigns/:address', '/campaigns/show')
  .add('/campaigns/:address/requests', '/campaigns/requests/index')
  .add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;