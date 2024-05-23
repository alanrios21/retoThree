// netlify/functions/json-server.js

import { createServer } from 'json-server';
const server = createServer();
const router = server.router('db.json'); // tu archivo JSON con los datos
const middlewares = server.defaults();

server.use(middlewares);
server.use(router);

export async function handler(event, context) {
  const response = await server.handleRequest(event, context);
  return response;
}
