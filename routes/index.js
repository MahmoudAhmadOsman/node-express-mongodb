var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Welcome to my page!' });
// });


router.get('/', function(req, res, next) {

  posts.find({}, function(err, Allposts){
    if(err){
            console.log(err);
          }else{
            res.render('index', {
                      title:'Posts',
                      //Allposts: Allposts
                    });
          }
  });

  res.render('index', { title: 'Welcome to my page!' });
});



module.exports = router;
