import React, { Component , createContext } from 'react';
import ShoeContainer from './containerFoot';
import {Col,Row} from "react-bootstrap";
import AppBar from './appBar';
import GoToCart from './goToCart';


var shoes = require("./footwearList");
var cart1= require("./cartlist");
export const ShoeContext = createContext(null);
//var shoes = require("./bagList");
//import shoes from './data/bagList'

class ShoePage extends Component {
    
    render() { 
        //let cart=[]
               
        return(
            <>
            
            <AppBar/>
               
               
                <Row md={1} sx={1} lg={3} className="g-3" >
                    {shoes.map(item =>( 
                         <ShoeContext.Provider value= {[item,cart1]}>
                            
                        <Col ><ShoeContainer{...item}/></Col>
                        
                        </ShoeContext.Provider>

                        
                    ))}
                    
                </Row>

               
                <GoToCart />        
               
                
            </>
            
        )
        
  
        
         /*
                <AppContext.Provider value={cart}>
                <GoToCart/>
                </AppContext.Provider>
                
                */

    }
    
}

 
export default ShoePage;