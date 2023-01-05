import { render } from '@testing-library/react';
import React, { Component } from 'react';

import { Route,useNavigate } from 'react-router-dom';
import {Col,Row} from "react-bootstrap";



export default function GoToCart(){
  const navigate = useNavigate()
  return(
    <div>
          <button onClick={
      ()=>navigate('/billing')
      
      
      }
      className="badge bg-primary text-dark" style={{height:'50px', width:'100px'}}>
      Go to cart
    </button>
   
    </div>
  )
}