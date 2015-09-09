var express = require('express');
var app = express();

process.env.PWD = process.cwd();

app.use(express.static(process.env.PWD + '/public'));

var port = process.env.PORT || 80;

var server = app.listen(port, function () {
  console.log('Listening at port ' + port);
});
