const express=require ("express");
const app=express().Router();
const cors = require("cors");
const mongoose =require ("mongoose");
mongoose.connect('mongodb://localhost:27017/gfg');
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})
app.use (cors());
app.use (express.json());
app.route("/log_in").post((req,res)=>{
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

        if (res1.length==1) //record found
        {  module.exports=res1;
           
          res.sendFile('C:/Prisha/Web tech/unit 4/new_app/public/homepage.html',function(err){
            if (err)
            console.log(err);
            else
            {console.log("No issues");
            
           }
           });
           
          /*
           res.sendFile('C:/Prisha/Web tech/unit 4/new_app',"Pages",'index.js');
           var name1=res1[0].name;
           console.log(name1);
           */
           
          
           
        }
        if (res1.length==0)
        {     
            
            res.redirect("invalid_sign.html");
        }
    });
       

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

        if (res1.length==1) //record found
        {  module.exports=res1;
           
          res.sendFile('C:/Prisha/Web tech/unit 4/new_app/public/homepage.html',function(err){
            if (err)
            console.log(err);
            else
            {console.log("No issues");
            
           }
           });
           
          /*
           res.sendFile('C:/Prisha/Web tech/unit 4/new_app',"Pages",'index.js');
           var name1=res1[0].name;
           console.log(name1);
           */
           
          
           
        }
        if (res1.length==0)
        {     
            
            res.redirect("invalid_sign.html");
        }
    });
       

        //db.close();
  });


  ///////////////////////////////////////////////////////////////////

  app.get('/sign',function(req,res){
    res.sendFile('C:/Prisha/Web tech/PROJECT!!/public/signup.html',function(err){
        if (err)
        console.log(err);
        else
        {console.log("No issues");
        
       }
       });

  })
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

  })

app.listen(3000,function(){
    console.log("Express server is up");
})