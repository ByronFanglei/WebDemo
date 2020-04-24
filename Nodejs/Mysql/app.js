const db = require('./index');

db.query("SELECT * FROM `car`", function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
 
db.end();