var authmodel = require('../models/auth.js');

exports.loginuser = function (request, response){
  authmodel.savelogin(request.body);
  try {
    request.flash('status', 'ok');
  }
  catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
  response.render('login');
};
