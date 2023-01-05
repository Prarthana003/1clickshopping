import React, { Component , createContext ,useRef} from 'react';
import { useContext } from 'react';
import { createRef } from 'react';
import AddToCart from './addToCart';
import {ShoeContext} from "./shoePage";
//module.exports =cart;
var cart1= require("./cartlist");

var i=0;

export default function Container(){
    var [{id,name,image,price,quantity},cart]=useContext(ShoeContext); 
    //var {cart}=useContext(CartContext)
     //console.log(name);
     const inputref= useRef(null);
     

     //cart.push({"id":1,"name":'abc'})
     //console.log(this.props.quantity)
     return (<div style={{backgroundColor:'#F6F7DC ' ,width:'450px',
     border: '14px solid #BBBBA8',alignItems:'center'}} >
         <img style={{position:'relative',width:'70%',margin:'10%'}} src={image} alt="Image unavailable"></img>
         
         <h3 style={{padding:'5px',textAlign:'center'}}>{name}</h3>
         <h3 style={{padding:'5px',textAlign:'center'}}>{price}</h3>
         <h3 ref={inputref} style={{padding:'5px',textAlign:'center'}} className={id}>{quantity}</h3>
         
         <button onClick={ (event)=>{
             console.log(inputref.current.className);
            quantity=quantity+1;
            inputref.current.innerHTML=quantity;
            let a=0;
            for (var i=0;i<cart.length;i++)
            {console.log("for");
                if (cart[i]["id"]==inputref.current.className && cart[i]["quantity"]>0)
                {   console.log("if");
                    cart[i]["quantity"]+=1;
                    a+=1;
                    break;
                }
                
                
            }
            console.log("new");
            if (a==0)
            {   console.log("aijf");
                cart.push({"id":id,"quantity":quantity,"name":name,"image":image,"price":price});
            }
            
            console.log(cart.length)
         }
             //this.setref.innerHTML=2
             
             
         }
         className="badge bg-warning text-dark" style={{paddingRight:'20px',paddingLeft:'20px',
         borderColor:'#ffc107' ,position:'relative',marginLeft:'36%',marginRight:'36%',marginBottom:'5%',fontSize:19}}>
             Add to cart</button>


         
     </div>);
 

}

 
 
 
 





