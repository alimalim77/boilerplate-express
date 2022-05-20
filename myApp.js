let express = require('express');
let app = express();
console.log('Hello World');

app.use('/public',express.static(__dirname + '/public'));

app.get('/json',function (req,res){
  const data = {
    'message': 'Hello json'
  };
  res.json(data);
})

app.get('/',function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
})

























 module.exports = app;
