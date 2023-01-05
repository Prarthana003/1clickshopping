import React, { Component } from 'react';
import {Container} from 'react-bootstrap'
import AppBar from './appBar';
import Rating from './Rating';
export default function Thanks(){
    return(
        <Container>
            <AppBar/>
            <h1 class="display-1" style={{fontsize:30,color:'blue',marginTop:'2%',marginLeft:'20%'}}>Thanks for using 1Click!! </h1>
            <h1 class="display-1" style={{fontsize:30,color:'yellow',marginTop:'0%',marginLeft:'30%'}}>Rate our website</h1>
            <Rating/>
            
        </Container>
    )
}