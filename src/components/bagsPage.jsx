import React, { Component , createContext } from 'react';
import Container from './container';
import {Col,Row} from "react-bootstrap";
import AppBar from './appBar';
import GoToCart from './goToCart';
var storeItems = require("./bagList");
var cart1= require("./cartlist");
export const AppContext = createContext(null);
//var storeItems = require("./bagList");
//import storeItems from './data/bagList'

class BagsPage extends Component {
    
    render() { 
       
               
        return(
            <>
            
            <AppBar/>
               
               
                <Row md={1} sx={1} lg={3} className="g-3" >
                    {storeItems.map(item =>( 
                         <AppContext.Provider value= {[item,cart1]}>
                            
                        <Col ><Container{...item}/></Col>
                        
                        </AppContext.Provider>

                        
                    ))}
                    
                </Row>

               
                <GoToCart />
                
            </>
            
        )
        


    }
    
}

 
export default BagsPage;