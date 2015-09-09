var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 80;

var server = app.listen(port, function () {
  console.log('Listening at port ' + port);
});
