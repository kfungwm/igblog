var express = require ('express'),
    morgan = require ('morgan'),
    request = require('request'),
    hbs = require ('hbs');

var app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index');
});











app.listen(3000, () => {
  console.log('Web server started on port 3000');
});
