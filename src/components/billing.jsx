import React, { Component,createContext ,useRef,useState,useEffect} from 'react';
import {Row,Col} from 'react-bootstrap'
import AppBar from './appBar';
import TotalAmount from './totalAmount';
import BillCart from './Billcart';
import '../App.css';
import Rating from './Rating';
//import total from './total';
import GoToBilling from './GoToBilling';
import { Route,useNavigate } from 'react-router-dom';
var bagItems = require('./bagList.js')
export const CartContext = createContext(null);
var cart1= require("./cartlist");
var total =require("./total");
export default  function Billing(){
   
    for (var i=0;i<cart1.length;i++)
    {
        console.log(cart1[i].id);
        console.log(cart1[i].quantity);
        console.log(cart1[i].name);

    }
  // console.log(typeof(cart1));
   //console.log(typeof(cart1[0]));

   const grandtotal = useRef(null)
    return(
        
        <div>
            <AppBar/>
            <Col>
                
                {cart1.map(item =>( 
                         <CartContext.Provider value={[item,cart1]}>
                            
                        <Col ><BillCart {...item}/></Col>
                        </CartContext.Provider>
                        
                    ))
                    
                    }
                
                
            </Col>
            <div style={{display:'flex'}}>
            <h1 style={{marginRight:'50%'}} onMouseEnter={function(){
                console.log("yoyo");var t=0;
                for (var i=0;i<cart1.length;i++)
                {t+=cart1[i]["price"] *cart1[i]["quantity"];

                }
                total[0]=t;
                grandtotal.current.innerHTML=t
            }} onMouseLeave ={function(){grandtotal.current.innerHTML=""}}>VIEW GRANDTOTAL :</h1>
             <h1 ref={grandtotal}></h1>
            </div>
           <GoToBilling/>
        </div>
    )
}