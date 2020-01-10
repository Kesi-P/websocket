var express = require('express');
var socket = require('socket.io');

//App setup
var app = express();
var server = app.listen(4000,function(){
  console.log('Listening to requests on port 4000');

}) //locolhost run server on cmd 'nodemon index'
//Static files
app.use(express.static('public'));
//socket setup
var io = socket(server); //running on server
//connect to the server when connection on chat.js
io.on('connection',function(socket){
  console.log('made socket connection')
})
