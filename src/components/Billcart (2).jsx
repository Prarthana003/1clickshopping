import React, { Component , createContext ,useRef} from 'react';
import { useContext } from 'react';
import { createRef } from 'react';
import AddToCart from './addToCart';
import {CartContext} from "./billing";
//module.exports =cart;
var total= require('./total')
var i=0;

    export default function BillCart(){
        var [{id,name,image,price,quantity}]=useContext(CartContext); 
        
        
         const inputref= useRef(null);
         const priceref = useRef(null)
         const totalref = useRef(null)
        
        console.log(price*quantity)
         var total_each=price*quantity;
        // total[0] =total[0] + total_each
         
     

    console.log("item= "+{id}+{name});
     return (<div style={{backgroundColor:'#F6F7DC ' ,width:'100%',height:'500px',
     border: '20px solid #BBBBA8', display:'flex'}} >
        <div>
         <img style={{position:'relative',width:'400px',height:"400px",margin:'15%'}} src={image} alt="Image unavailable"></img>
         </div>
         <div style={{align:'right',marginLeft:'40%',marginTop:'5%'}}>
         <h3 style={{padding:'5px'}}>{name}</h3>
         <h3 ref={priceref} style={{padding:'5px'}}>{total_each}</h3>
         

        <div style={{display:'flex', border:'5px solid'}}>
        
            <button style={{padding:'10px',margin:'10px',backgroundColor:'#BBBBA8'}}
            onClick = {
                ()=>{
                    quantity+=1
                    console.log(quantity);
                    total[0]=total[0]+ price
                   // totalref.current.innerHTML=total
                    
                    total_each=price*quantity
                    priceref.current.innerHTML=total_each
                    inputref.current.innerHTML = quantity
                    //console.log('total'+total)
                }
            } >+</button>
            <h2 ref={inputref} style={{padding:'10px',margin:'10px'}}> {quantity}</h2>
            <button
            style={{padding:'10px',margin:'10px',backgroundColor:'#BBBBA8'}}
            onClick={
                ()=>{
                    if (quantity===0)
                    {
                        
                    }
                    if(quantity>0)
                        quantity-=1
                        
                        total[0]=total[0] - price
                      //  totalref.current.innerHTML=total
                        
                    inputref.current.innerHTML = quantity
                  
                    total_each=price*quantity
                    priceref.current.innerHTML=total_each
                    
                }
            }>
                -</button>
        </div>


         </div>
         


         
     </div>);
 




 
 }
