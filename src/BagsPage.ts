import React, { Component } from 'react';
import Container from './container';
import {Col,Row} from "react-bootstrap";
import storeItems from '/products';
//import storeItems from '../data/bagList'
import AppBar from './appBar';
import GoToCart from './goToCart';

class BagsPage extends Component {
    
    render() { 
        
            
        return(
            <>
                <AppBar/>
                <Row md={1} sx={1} lg={3} className="g-3" >
                    {storeItems.map(item =>(
                        <Col ><Container{...item}/></Col>

                        
                    ))}
                    
                </Row>

                <GoToCart/>
                
            </>
        )
        
/*
        
        return (
            <div style={{backgroundColor:'#BBBBA8 ',padding:'30px'}}>
                <AppBar/>
                <div  style={{display:'flex'}}><Container image={bag1}    itemName='Black handbag' price='Rs 4000'/>
                <Container style={{display:'inline'}} image={bag2}    itemName='Red handbag' price='Rs 3990'/></div>
               <div  style={{display:'flex'}}> <Container image={bag3}    itemName='Sling bag' price='Rs 2500'/>
                <Container image={bag4}    itemName="Aliza Women's handbag" price='Rs 3000'/>
            </div>
            <div  style={{display:'flex'}}> <Container image={bag5}    itemName='Cerice handbag' price='Rs 1500'/>
                <Container image={bag6}    itemName="Blue handbag" price='Rs 4500'/>
            </div>
            <div  style={{display:'flex'}}> <Container image={bag7}    itemName='Emperor backpack' price='Rs 6000'/>
                <Container image={bag8}    itemName="Backpack" price='Rs 6500'/>
            </div>
            <div  style={{display:'flex'}}> <Container image={bag9}    itemName='Brown Leather Bag' price='Rs 3000'/>
                <Container image={bag10}    itemName="Stylish handbag" price='Rs 3500'/>
            </div>
            <GoToCart/>
            </div>
        );

        -*/
    }
    
}

 
export default BagsPage;