var modeldb = require('./model.js');

exports.addskill = function (jsondata){
  addskill(jsondata);
};

async function addskill(jsondata)
{
  db = modeldb.initdb();
  modeldb.pushtodb(db, 'skills', jsondata);
}
