module.exports = app => {
 // const customers = require("../controllers/customer.controller.js");
  

 

  // Retrieve all Customers
  app.get("/customers", require('./models/customer.model'));


};
