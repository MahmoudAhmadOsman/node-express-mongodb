var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Welcome to my page!' });
// });


router.get('/', function(req, res, next) {

  Post.find({}, function(err, posts){
    if(err){
            console.log(err);
          }else{
           // console.log(posts);
            res.render('index', {
                      title:'Posts',
                      posts: posts
                      // or like this Allpostsn 
                      //posts
                    });
          }
  });

  res.render('index', {
     title: 'Welcome to my page!' 
    
    });
});



module.exports = router;
