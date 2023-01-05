import './App.css';

import { BrowserRouter , Routes,Route,Link } from 'react-router-dom';

import GoToCart from './components/goToCart';
import Billing  from './components/billing';
import TopsPage from './components/TopsPage';
import GadgetPage from './components/GadgetPage';
import ShoePage from './components/shoePage';
import React from "react";
import BagsPage from './components/bagsPage';
import { useNavigate } from 'react-router-dom';
import Login_page from './signup/Login_page';
import Pick from './components/choose';
import Signup_page from './signup/Signup_page';
import Payment from './components/payment';
import Thanks from './components/thanks';
function App() {
  const navigate = useNavigate();

  const navigateToBilling =()=>{
    navigate('/billing');
  }
  return (
    <div>
    <Routes>
        <Route exact path ="/thanks" element ={<Thanks/>}/>
        <Route exact path ="/signup" element ={<Signup_page/>}/>
        <Route exact path ="/" element ={<Login_page/>}/>
        <Route exact path = "/bags" element={<BagsPage/>}/>
        <Route exact path = "/shoes" element={<ShoePage/>}/>
        <Route exact path ="/gadgets" element ={<GadgetPage/>}/>
        <Route exact path = "/billing" element={<Billing/>}/>
        <Route exact path = "/tops" element={<TopsPage/>}/>
        <Route exact path = "/goToCart" element={<GoToCart/>}/>
        <Route exact path="/homepage" element ={<Pick/>}/>
        <Route exact path="/payment" element ={<Payment/>}/>
        
    </Routes>
    </div>


    
  );
}

export default App;
  
