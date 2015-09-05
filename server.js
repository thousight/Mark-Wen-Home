var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var server = app.listen(80, function () {
  var port = server.address().port;
  console.log('Listening at port ' + port);
});
