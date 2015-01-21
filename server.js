var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Nice!');
});

app.get('/nickname', function(request, response){
    response.send('cooperative lemur');
});

app.listen(process.env.PORT || 4000);