const users = require("./users/users.service.js");
const string = require("./string/string.service.js");
const boolean = require("./boolean/boolean.service.js");
const number = require("./number/number.service.js");
const date = require("./date/date.service.js");
const array = require("./array/array.service.js");
const objectid = require("./objectid/objectid.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(string);
  app.configure(boolean);
  app.configure(number);
  app.configure(date);
  app.configure(array);
  app.configure(objectid);
  // ~cb-add-configure-service-name~
};
