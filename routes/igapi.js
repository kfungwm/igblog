var express = require('express'),
    db = require('../models'),
    bodyParser = require('body-parser'),
    request = require('request'),
    router = express.Router();



// var token = '3139185.369b559.7e7dacf5e1c94a409b8939609f337255',
// userid = 3139185;
// request("https://api.instagram.com/v1/users/self/media/recent/?access_token=3139185.369b559.7e7dacf5e1c94a409b8939609f337255", function(error, response, body) {
//   if(!error && response.statusCode === 200) {
//     var parsedData = JSON.parse(body);
//
//     parsedData.data.forEach(function(ig) {
//       db.igApi.create({
//           img: ig.images.standard_resolution.url,
//           url: ig.link,
//           content: ig.caption.text,
//       });
//     });
//   }
// });




// function getPictures() {
//   var token = '3139185.369b559.7e7dacf5e1c94a409b8939609f337255',
//   userid = 3139185;
//   request("https://api.instagram.com/v1/users/self/media/recent/?access_token=3139185.369b559.7e7dacf5e1c94a409b8939609f337255", function(error, response, body) {
//     if(!error && response.statusCode === 200) {
//       var parsedData = JSON.parse(body);
//
//       for(var i = 0; i < )
//       if(tableimg !== ig.images.standard_resolution.url)
//       parsedData.data.forEach(function(ig) {
//         db.igApi.create({
//             img: ig.images.standard_resolution.url,
//             url: ig.link,
//             content: ig.caption.text,
//         });
//
//         // ig_pictures.push(ig.images.standard_resolution.url);
//
//         // console.log(ig.images.standard_resolution.url);
//         // console.log(ig.link);
//         // console.log(ig.caption.text);
//
//         });
//       // console.log(parsedData);
//
//     }
//   });
//
// }
// getPictures();


// url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=3139185.369b559.7e7dacf5e1c94a409b8939609f337255";
//
// request({
//   url: url,
//   method: "POST",
//   json: requestData
//
// });


// var options = {
//   url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=3139185.369b559.7e7dacf5e1c94a409b8939609f337255',
//   method: 'POST',
//   form: {
//     img: req.body.images.standard_resolution.url,
//     url: req.body.link,
//     content: req.body.caption.text
//   }
// };
//
// request(options, function(error, response, body) {
//   if(!error && response.statusCode === 200) {
//     var insta = JSON.parse(body);
//     console.log(insta);
//   }
// });



//
// function getPictures() {
//   var token = '3139185.369b559.7e7dacf5e1c94a409b8939609f337255',
//   userid = 3139185;
//   request("https://api.instagram.com/v1/users/self/media/recent/?access_token=3139185.369b559.7e7dacf5e1c94a409b8939609f337255", function(error, response, body) {
//     if(!error && response.statusCode === 200) {
//       var parsedData = JSON.parse(body);
//
//         parsedData = {
//           method: 'POST',
//           form: {
//             img: images.standard_resolution.url,
//             url: link,
//             content: caption.text
//           }
//           // ig_pictures.push(ig.images.standard_resolution.url);
//           // console.log(ig.images.standard_resolution.url);
//           // console.log(ig.link);
//           // console.log(ig.caption.text);
//         // });
//         // console.log(parsedData);
//
//       };
//     }
//   });
// }



// var token = '3139185.369b559.7e7dacf5e1c94a409b8939609f337255',
// userid = 3139185;
//
//
// $.ajax({
//   url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent/?access_token=' + token,
//   dataType: 'jsonp',
//   type: 'POST',
//   success: function(naam) {
//     for(var x in naam.data) {
//       console.log(naam.data);
//       $('.instagram').append('<div class="outer"><a target="_blank" href="' + naam.data[x].link + '"><div class="inner" style="background-image: url('+naam.data[x].images.standard_resolution.url+')"></div></div>');
//       // $('#instagram').append(naam.data[x].likes.count);
//     }
//   },
//   error: function(data) {
//     console.log(data);
//   }
// });


// $.ajax({
//         url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=3139185.369b559.7e7dacf5e1c94a409b8939609f337255",
//         type: "POST",
//         data: JSON.stringify(obj),
//         contentType: "application/json",
//         success: function(data) {
//           console.log('success --> data :', data);
//
//         },
//         error:   function(xhr, text, err) {
//           console.log('error: ',err);
//           console.log('text: ', text);
//           console.log('xhr: ',xhr);
//           console.log("there is a problem whit your request, please check ajax request");
//         }
//       });
//
//
//
// router.post('/', function(req, res){
//     var newig = res.body;
//     console.log(newig);
// });

// router.post('/', function(req, res){
//     var newmovie = res.body;
//     console.log(newmovie);
// });

// var parsedJSON = require('https://api.instagram.com/v1/users/self/media/recent/?access_token=3139185.369b559.7e7dacf5e1c94a409b8939609f337255');
// for(i = 0; i < parsedJSON.length; i++) {
//   db.saveDoc("igApi", parsedJSON.img, function(err, res) {
//
//   });
// }



// 
// router.get('/new', (req, res) => {
//   res.render('addpic');
// });
//
// router.post('/new', (req, res) => {
//   db.igApi.create(req.body).then(() => {
//     res.redirect('/new');
//   }).catch((error) => {
//
//   });
//     console.log(req.body);
// });

// router.post('/', (req, res) => {
//
// });


// var token = '3139185.369b559.7e7dacf5e1c94a409b8939609f337255',
// userid = 3139185;
//
//
// $.ajax({
//   url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent/?access_token=' + token,
//   dataType: 'jsonp',
//   type: 'POST',
//   success: function(naam) {
//     console.log(naam);
//     for(var x in naam.data) {
//       db.igApi.create({
//           img: naam.data[x].images.standard_resolution.url,
//           url: naam.data[x].link,
//           content: naam.data[x].caption.text,
//       });
//       // console.log(naam.data[x]);
//       // console.log(naam.data[x].images.standard_resolution.url);
//       // console.log(naam.data[x].link);
//       // $('.instagram').append('<div class="outer"><a target="_blank" href="' + naam.data[x].link + '"><div class="inner" style="background-image: url('+naam.data[x].images.standard_resolution.url+')"></div></div>');
//       // $('#instagram').append(naam.data[x].likes.count);
//     }
//   },
//   error: function(data) {
//     console.log(data);
//     console.log("error");
//   }
// });






module.exports = router;
