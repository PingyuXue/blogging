
// require the express module inside the app.js and create an app
var express = require("express");
var path = require("path");
var app = express();
app.use(express.static(path.join(__dirname,"/html")));




// http://localhost:7777/index.html 



// 声明的变量应该在前面
// 不然  app.post 读取
// require the body-parse module in app.js
var bodyParser = require( "body-parser");

app.use( bodyParser.json);


//  不知道post 要干嘛！
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






 //assign a port number for the application on a port
app.listen(7777, function(){
    console.log("started listening on port.",7777);
})