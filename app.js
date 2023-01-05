var express=require("express");
var bodyParser=require("body-parser");
  
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/gfg');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})
  
var app=express()
//set PORT:3000;
  
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
 
app.post('/sign_up', function(req,res){
    var name = req.body.name;
    var email =req.body.email;
    var pass = req.body.password;
    var phone =req.body.phone;
    var address=req.body.address;
  
    var data = {
        "name": name,
        "email":email,
        "password":pass,
        "phone":phone,
        "address":address
    }
 /////////////
    db.collection("details").find({phone:data.phone}).toArray(function(err,res1){

        if (err)throw err;

        if (res1.length==0) //new user signing
        {console.log(typeof(res1));
            db.collection('details').insertOne(data,function(err, collection){
                if (err) throw err;
                console.log("Record inserted Successfully");
                      
            });
                  
            return res.redirect('signup_success.html');


        }
        else{
       
       return res.redirect('invalid_sign.html');
        
        }
    });
       

        //db.close();
  });


///////////////

    /*  
    db.collection('details').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log("Record inserted Successfully");
              
    });
          
    return res.redirect('signup_success.html');

    });
    */

/*
app.get('/',function(req,res){
    res.set({
        'Access-control-Allow-Origin': '*'
        });
    return res.redirect('signup.html');
    }).listen(3000) 
  */
//console.log("server listening at port 3000");
app.get('/',function(req,res){
    res.set({
        'Access-control-Allow-Origin': '*'
        });
    return res.redirect('signup.html');
    }).listen(3000)



    ///////////////////////LOG IN Below//////////////////////////

    