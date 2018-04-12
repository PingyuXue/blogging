// http://localhost:7777/index.html 


// require the express module inside the app.js and create an app
var express = require("express");
var path = require("path");
var app = express();

// 声明的变量应该在前面
// 不然  app.post 读取
// require the body-parse module in app.js
var bodyParser = require( "body-parser");

// ?? require 的用法？
var user = require( './user');


app.use(express.static(path.join(__dirname,"/html")));

app.use( bodyParser.json);


//  不知道post 要干嘛！  ANSWER： post 是一个handler ，用来处理request
// 同时， 需要使用 body-parser module ， post from React client side.
// ter:   npm install body-parser --save

// create a method called signin:
//  ？？？ 定义func 的方式？
app.post( '/signin', function ( req, res){
    
    var user_name = req.body.email;
    var password = req.body.password;

    if ( user_name == 'admin' && password == 'admin'){
        res.send( 'success');
    }
    else{
        res.send( 'failure');
    }
})


// post 是一个
// post( path , reqExp )
// ? 为什么是 ‘/signup', 是不是可以用 'signup'?
app.post( '/signup', function( req, res){
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;

    if ( name && email && password){
        user.signup( name , email, password);
    }
    else{
        res.send( "Failures");
    }

    // user.signup('','')
    // console.log(res);
})

 //assign a port number for the application on a port
app.listen(7777, function(){
    console.log("started listening on port.",7777);
})