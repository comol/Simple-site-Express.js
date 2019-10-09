var modeldb = require('./model.js');

exports.addgood = function (jsondata){
  addgood(jsondata);
};

async function addgood(jsondata) {
  db = modeldb.initdb();
  modeldb.pushtodb(db, 'goods', jsondata);
}
