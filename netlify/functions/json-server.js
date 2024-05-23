// netlify/functions/json-server.js

const { createServer } = require('json-server');
const server = createServer();
const router = server.router('db.json'); // tu archivo JSON con los datos
const middlewares = server.defaults();

server.use(middlewares);
server.use(router);

module.exports.handler = async (event, context) => {
  const response = await server.handleRequest(event, context);
  return response;
};
