var express = require('express');
var router = express.Router();

/* Get All posts  */

router.get('/', function(req, res, next) {
 //const Post =  Post.find({}) // Query posts from the database 



  res.render('posts',{
    title: 'Post One',
    author: 'Mahmoud Osman',
    body: 'This is the main post body.'
  });
});
module.exports = router;
