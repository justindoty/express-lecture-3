var express = require('express');
var path = require('path');

var catRouter = require('./cat');

var app = express();
var port = 3000;

// app.get('/', function(request, response){
//   console.log(request);
//   //response.redirect('http://google.com');
//   response.sendFile(path.join(__dirname, 'index.html'));
// });

app.post('/', function(request, response){
  response.sendStatus(200);
});

app.use('/cat', catRouter);

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'public', 'html', 'something.html'));
});

app.use(express.static('public'));

// app.get('/*', function(request, response) {
//   response.send('hello');
// });

app.listen(port, function onServerListen(){
  console.log('Started express server on port', port);
  console.log('Press Ctrl-C to stop');
});
