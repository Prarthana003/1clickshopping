import React, { Component , createContext } from 'react';
import Container_gadget from './Container_gadget';
import {Col,Row} from "react-bootstrap";
import AppBar from './appBar';
import GoToCart from './goToCart';
var gadgetItems = require("./gadgetItems");
var cart1= require("./cartlist");
export const GadgetContext = createContext(null);
//var storeItems = require("./bagList");
//import storeItems from './data/bagList'

class GadgetPage extends Component {
    
    render() { 
        //let cart=[]
               
        return(
            <>
            
            <AppBar/>
               
               
                <Row md={1} sx={1} lg={3} className="g-3" >
                    {gadgetItems.map(item =>( 
                         <GadgetContext.Provider value= {[item,cart1]}>
                            
                        <Col ><Container_gadget{...item}/></Col>
                        
                        </GadgetContext.Provider>

                        
                    ))}
                    
                </Row>

               
                <GoToCart />
                
            </>
            
        )
        


    }
    
}

export default GadgetPage;