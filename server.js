var express = require('express');
var path = require('path');

var app = express();
var port = 3000;

app.get('/', function(request, response){
  console.log(request);
  //response.redirect('http://google.com');
  response.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/cat', function(request, response){
  response.send('Meow');
});

app.get('/cat/dog', function(request, response){
  response.send('Meow/Woof!');
});

app.post('/', function(request, response){
  response.sendStatus(200);
});

app.listen(port, function onServerListen(){
  console.log('Started express server on port', port);
  console.log('Press Ctrl-C to stop');
});
