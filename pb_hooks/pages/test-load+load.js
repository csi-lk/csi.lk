/// <reference path="../../pb_data/types.d.ts" />

module.exports = function(request, response) {
  return {
    message: "Hello from +load.js!",
    timestamp: new Date().toISOString()
  };
};
