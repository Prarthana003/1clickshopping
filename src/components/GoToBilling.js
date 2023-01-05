import { render } from '@testing-library/react';
import React, { Component } from 'react';

import { Route,useNavigate } from 'react-router-dom';




export default function GoToBilling(){
  const navigate = useNavigate()
  return(
    
    
    <button onClick={
      ()=>navigate('/payment')
      
      }
      className="badge bg-warning text-dark" style={{padding:'10px',height:'50px',width:'200px',marginLeft:'47%'}} >
     PROCEED TO CHECKOUT
    </button>
    
  )
}