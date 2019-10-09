var blogmodel = require('../models/blog.js');

exports.addblogrecord = function (request, response){
  blogmodel.posttoblog(request.body);
  try {
    request.flash('status', 'ok');
  }
  catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
  response.render('index');
};
