var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Welcome to my page!' });
// });


router.get('/', function(req, res, next){
  Post.find({}, function(err, posts){
    if(err){
      console.log(err);
    } else {
      res.render('index', {
        title:'posts',
        posts: posts
      });
    }
  });
});


// router.get('/', function(req, res) {
//   console.log('All posts');
//   Post.find({})
//     .exec(function(err, posts) {
//       if(err) {
//         res.send('error occured')
//       } else {
//         console.log(posts);
//         res.json(posts);
//       }
//     });
// });


module.exports = router;
