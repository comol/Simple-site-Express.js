var goodsmodel = require('../models/goods.js');

exports.addgood = function (request, response){
  goodsmodel.addgood(request.body);
  try {
    request.flash('status', 'ok');
  }
  catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
  response.render('admin');
};
