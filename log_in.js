var express=require("express");
var bodyParser=require("body-parser");
//const path=require('path');
var user =require("./src/components/total");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/gfg');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})

var app=express();  
app.set('views','./Pages');
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type,Accept");
    res.header("Access-Control-Allow-Methods",'PUT,POST,GET,DELETE,OPTIONS');
    next();
})
  
app.post('/log_in', function(req,res,next){
    var pass = req.body.password;
    var phone =req.body.phone;
  
    var data = {
        "password":pass,
        "phone":phone
    }
 /////////////
    db.collection("details").find({phone:data.phone}).toArray(function(err,res1){
        console.log(res1);
        if (err)throw err;
           
        if (res1.length==0)
        {     
            
            res.redirect("invalid_sign.html");
        }
        if (res1.length==1) //record found
        {  console.log(res1);
            console.log("uwghw");
            user[0]=res1;
            console.log(user[0]["name"]);
          res.redirect('/homepage'); 
          
        //   res.sendFile('C:/Prisha/Web tech/unit 4/new_app/public/homepage.html',function(err){
        //     if (err)
        //     console.log(err);
        //     else
        //     {console.log("No issues");
        //     next();
            
        //    }
        //    })
        
        }
    }
);
})

        //db.close();
 // });


  ///////////////////////////////////////////////////////////////////

  app.get('/sign',function(req,res,next){
    res.sendFile('C:/Prisha/Web tech/PROJECT!!/public/signup.html',function(err){
        if (err)
        console.log(err);
        else
        {console.log("No issues");
        next();
       }
       });

  })
  app.post('/sign_up', function(req,res,next){
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
                 next();     
            });
                  
            return res.redirect('signup_success.html');
           

        }
        else{
       
       return res.redirect('invalid_sign.html');
        
        }
    });
       

        //db.close();
  });
///////////////////////////////////////////////////////////////////
app.get('/',function(req,res){
    console.log("IN GET");
    res.sendFile('C:/Prisha/Web tech/PROJECT!!/public/signup.html',function(err){
        if (err)
        console.log(err);
        else
        {console.log("No issues");
        
       }
       });

  }).listen(5000);

