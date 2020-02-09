var express = require('express');
var router = express.Router();

/* Get All posts  */

router.get('/', function(req, res, next) {
  res.render('posts');
});
module.exports = router;