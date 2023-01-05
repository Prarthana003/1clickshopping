import React, { Component , createContext ,useRef} from 'react';
import { useContext } from 'react';
import { createRef } from 'react';
import AddToCart from './addToCart';
import {GadgetContext} from "./GadgetPage";
import {CartContext} from "./"
class Cart extends Component {
   
    render() { 
        return (
            <div>
                <h1>Trial</h1>
            </div>
        );
    }
}
 
export default Cart;