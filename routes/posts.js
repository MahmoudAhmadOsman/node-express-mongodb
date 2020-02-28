var express = require('express');
var router = express.Router();

/* Get All posts  */

router.get('/posts', function(req, res, next) {
 const Post =  Post.find({}) // Query posts from the database 
  res.render('posts',{
    title: 'Post One',
    author: 'Mahmoud Osman',
    body: 'This is the main post body. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
  });
});
module.exports = router;
