var express = require('express');

var router = express.Router();

router.get('/', function(request, response){
    response.send('Meow');
});

router.get('/dog', function(request, response){
  response.send('Meow/Woof!');
});

module.exports = router;
