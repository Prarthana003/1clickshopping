import React, { Component,createContext } from 'react';
import {Row,Col} from 'react-bootstrap'
import AppBar from './appBar';
import TotalAmount from './totalAmount';
import { AppContext } from './bagsPage';
import { useContext } from 'react';
import BillCart from './Billcart';

var bagItems = require('./bagList.js')
export const CartContext = createContext(null);
var cart1= require("./cartlist");

export default  function Billing(){
    console.log(cart1.length);
    
    for (var i=0;i<cart1.length;i++)
    {
        
        console.log(cart1[i]["quantity"]);
        console.log(cart1[i]["name"]);

    }
  // console.log(typeof(cart1));
   //console.log(typeof(cart1[0]));
    return(
        <div>
            <AppBar/>
            <Row>
                <CartContext.Provider value={cart1}>
                {cart1.map(cart1 =>( 
                         
                            
                        <Col ><BillCart{...cart1}/></Col>
                        
                        

                        
                    ))}

                </CartContext.Provider>
                
            </Row>
            <h1>Total cost</h1>
        </div>
    )
}

/*
*/