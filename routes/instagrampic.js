var express = require('express'),
    db = require('../models'),
    bodyParser = require('body-parser'),
    request = require('request'),
    router = express.Router();


//POST WORKS ==================================================
// var token = '3139185.369b559.7e7dacf5e1c94a409b8939609f337255',
// userid = 3139185;
// request("https://api.instagram.com/v1/users/self/media/recent/?access_token=3139185.369b559.7e7dacf5e1c94a409b8939609f337255", function(error, response, body) {
//   if(!error && response.statusCode === 200) {
//     var parsedData = JSON.parse(body);
//
//     parsedData.data.forEach(function(ig) {
//       db.InstagramPic.create({
//           ig_id: ig.id,
//           created_time: ig.created_time,
//           img: ig.images.standard_resolution.url,
//           url: ig.link,
//           content: ig.caption.text,
//       });
//     });
//   }
// });
//================================================================



db.InstagramPic.findAll({
  where: {
  }
}).then((result) => {
  // console.log(result);
  var getId = [];
  result.forEach(function(result) {

    getId.push(result.dataValues.ig_id);
    // console.log(getId.dataValues.ig_id);
  });
  console.log(getId);
  request("https://api.instagram.com/v1/users/self/media/recent/?access_token=3139185.369b559.7e7dacf5e1c94a409b8939609f337255", function(error, response, body) {
    if(!error && response.statusCode === 200) {
      var parsedData = JSON.parse(body);

      parsedData.data.forEach(function(ig) {
        var exist = false;

        for(var i = 0; i < getId.length; i++) {
          if(getId[i] == ig.id) {
            console.log('GETID' + ' ' + getId[i] + 'nummer : '+ i);
            console.log('CREATEAPI' + ' ' + ig.id);
            console.log('----------------------------');
            console.log('deze bestaat al!');
            console.log();
            exist = true;
            break;
          }
        }
        if(!exist)
        {
          console.log("toevoegd");
          db.InstagramPic.create({
              ig_id: ig.id,
              created_time: ig.created_time,
              img: ig.images.standard_resolution.url,
              url: ig.link,
              content: ig.caption.text,
          });
        }
      });
    }
  });
});




router.get('/new', (req, res) => {
  res.render('addpic');
});

router.post('/new', (req, res) => {
  db.InstagramPic.create(req.body).then(() => {
    res.redirect('/new');
  }).catch((error) => {
  });
});






module.exports = router;
