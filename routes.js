// Dependencies

const { sampleHandler } = require("./handlers/RouteHandlers/sampleHandler");
const { userHandler } = require("./handlers/RouteHandlers/userHandler");

const routes = {
  sample: sampleHandler,
  user: userHandler,
};

module.exports = routes;
