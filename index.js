var express = require ('express'),
    morgan = require ('morgan'),
    request = require('request'),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
    hbs = require ('hbs');

var db = require('./models');

var app = express();

var igRouter = require('./routes/igapi');
var igRouter = require('./routes/instagrampic');

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'hbs');

app.use('/', igRouter);

// app.get('/', (req, res) => {
//   res.render('index');
// });

// app.get('/', (req, res) => {
//   db.igApi.findAll().then((igApi) => {
//     res.render('index', { igApi: igApi });
//   });
// });


app.get('/', (req, res) => {
  db.InstagramPic.findAll({order:[ ['created_time', 'DESC'] ]}).then((InstagramPic) => {
    res.render('index', { InstagramPic: InstagramPic });
  });
});






db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Web server started on port 3000');
  });
});
