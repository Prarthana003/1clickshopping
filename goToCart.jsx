import { render } from '@testing-library/react';
import React, { Component } from 'react';
import {useNavigate,Routes,Route} from 'react-router-dom';
import{Link} from 'react-router-dom';
import Billing from './billing'
//import { useHistory } from 'react-router-dom'


/*
class GoToCart extends Component {
    
    
    render() { 
        //let history = useHistory();
        //const {push} = useHistory()

        

        console.log('in render')
        
        return (<div style={{backgroundColor:'#E7F0F3',padding:'10px'}}>
           
       
            <button className='badge bg-primary text-light' style={{borderColor:'blue',padding:'10px',position:'relative',
            marginLeft:'45%',width:'10%'}}
            
            onClick={this.navigateToCart}
            >
            Go to cart</button>
            <Route path="/billing" element={<Billing />} />
            
            </div>

            
            );

            

            
    }
    
    navigate = useNavigate();
    navigateToCart = () => {
        // 👇️ navigate to /contacts
        const navigate = useNavigate();
        navigate('/billing');
      };

}
 




export default GoToCart;

*/

//import React from 'react';
import { useHistory } from "react-router-dom";
function LoginLayout() {
  
  const history = useHistory();
  
  const routeChange = () =>{ 
    let path = `newPath`; 
    history.push(path);
  }

  return (
      <div className="app flex-row align-items-center">
       
                             
              <button color="primary" className="px-4"
                onClick={routeChange}
                  >
                 Go to cart
                </button>
            
              <button color="link" className="px-0">Forgot password?</button>
           
          
          
      </div>
  );
}
export default LoginLayout;




