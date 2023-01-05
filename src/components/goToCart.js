import { render } from '@testing-library/react';
import React, { Component } from 'react';

import { Route,useNavigate } from 'react-router-dom';




export default function GoToCart(){
  const navigate = useNavigate()
  return(
    
    
    <button onClick={
      ()=>navigate('/billing')
      
      }
      className="badge bg-primary text-dark" style={{height:'50px', width:'100px',marginLeft:'45%'}}>
      Go to cart
    </button>
    
  )
}