var skillsmodel = require('../models/skills.js');

exports.addslills = function (request, response){
  skillsmodel.addskill(request.body);
  try {
    request.flash('status', 'ok');
  }
  catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
  response.render('admin');
};
