const sql = require("./db.js");

       
    
constructor
const Customer = function(customer) {
  this.name = customer.name;
  this.key = customer.key;
  this.insDate = customer.insDate;
  this.updDate= customer.updDate
};


Customer.getAll = result => {
  sql.query("SELECT * FROM region", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};
