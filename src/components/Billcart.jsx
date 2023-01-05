import React, { Component , createContext ,useRef} from 'react';
import { useContext } from 'react';
import { createRef } from 'react';
import AddToCart from './addToCart';
import {CartContext} from "./billing";
//module.exports =cart;
import { Route,useNavigate } from 'react-router-dom';
import { FaHandMiddleFinger } from 'react-icons/fa';
var total = require('./total')
var cart1= require("./cartlist");
var i=0;

    export default function BillCart(){
        var [{id,name,image,price,quantity},cart]=useContext(CartContext); 
        const navigate = useNavigate()
       console.log(total[0]);
            
        
         const inputref= useRef(null);
         const priceref = useRef(null)
       //  const totalref = useRef(null)
        
        console.log(price*quantity)
         var total_each=price*quantity;
         total[0] =total[0] + total_each
         
     

    console.log("item= "+{id}+{name});
     return (<div style={{backgroundColor:'#F6F7DC ' ,width:'100%',height:'300px',
     border: '20px solid #BBBBA8', display:'flex' ,justifyContent:true, align:FaHandMiddleFinger}} >
        <div>
         <img style={{position:'relative',width:'160px',height:"200px",margin:'20%'}} src={image} alt="Image unavailable"></img>
         </div>
         <div style={{align:'right',marginLeft:'40%',marginTop:'2%'}}>
         <h3 style={{padding:'5px'}}>{name}</h3>
         <h3 ref={priceref} style={{padding:'5px'}}>Item Price :{total_each}</h3>
         

        <div style={{display:'flex', border:'5px solid'}}>
        
            <button style={{padding:'10px',margin:'10px',backgroundColor:'#BBBBA8',fontSize:26}}
            onClick = {
                ()=>{
                    quantity+=1
                    for (var i=0;i<cart1.length;i++)
                    {
                        if (cart1[i]["id"]==id)
                        {
                            cart1[i]["quantity"]+=1;
                            console.log(total[0]);
                    total[0]=total[0]+ price
                  //  totalref.current.innerHTML=total[0]
                    
                    total_each=price*quantity
                    priceref.current.innerHTML=total_each
                    inputref.current.innerHTML = quantity
                            break;
                        }
                    }
                    
                    //console.log('total'+total)
                   
                }
            } >+</button>
            <h2 ref={inputref} style={{padding:'10px',margin:'10px'}}> {quantity}</h2>
            <button
            style={{padding:'10px',margin:'10px',backgroundColor:'#BBBBA8' ,fontSize:26}}
            onClick={
                ()=>{

                    if (quantity==1)
                    {console.log("oiag");
                    console.log(cart[0]["id"]);
                    cart.splice(cart.findIndex(a => a.id ===id) ,1)
                    console.log(cart[0]["id"]);
                    //inputref.current.innerHTML=0;
                    //priceref.current.innerHTML=0;
                    //removeAttribute(cart,'id',id); 
                       
                    }
                    if(quantity>1)
                    {
                        quantity-=1
                        for (var i=0;i<cart1.length;i++)
                    {
                        if (cart1[i]["id"]==id)
                        {
                            cart1[i]["quantity"]-=1;
                            total[0]=total[0] - price
                            //  totalref.current.innerHTML=total[0];
                              
                          inputref.current.innerHTML = quantity
                        
                          total_each=price*quantity
                          priceref.current.innerHTML=total_each
                            break;
                        }
                    }
                        
                       
                    }
                    
                }
            }>
                -</button>
        </div>


         </div>
         


         
     </div>);
 




 
 }
