import React, { Component , createContext } from 'react';
import Container_clothes from './Container_clothes';
import {Col,Row} from "react-bootstrap";
import AppBar from './appBar';
import GoToCart from './goToCart';
var topslist = require("./topslist");
var cart1= require("./cartlist");
export const ClothesContext = createContext(null);
//export const CartContext = createContext(null)
//var storeItems = require("./bagList");
//import storeItems from './data/bagList'



class TopsPage extends Component {
    
    render() { 
        
           
        return(
            <>
            <AppBar/>               
                <Row md={1} sx={1} lg={3} className="g-3" >
                    {topslist.map(item =>( 
                         <ClothesContext.Provider value= {[item ,cart1]}>
                            
                        <Col ><Container_clothes{...item}/></Col>
                        
                        </ClothesContext.Provider>

                        
                    ))}
                    
                </Row>
               <GoToCart/>
                
                
            </>
        )
        
    }
    
} 
export default TopsPage;