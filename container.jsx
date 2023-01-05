import React, { Component } from 'react';
import AddToCart from './addToCart';



 



class Container extends Component {
    //state = {  } 
    render() { 
        return (<div style={{backgroundColor:'#F6F7DC ' ,width:'700px',
        border: '20px solid #BBBBA8',alignItems:'center'}} >
            <img style={{position:'relative',width:'70%',margin:'15%'}} src={this.props.image} alt="Image unavailable"></img>
            <h3 style={{padding:'5px',textAlign:'center'}}>{this.props.itemName}</h3>
            <h3 style={{padding:'5px',textAlign:'center'}}>{this.props.price}</h3>
            <AddToCart ></AddToCart>

            
        </div>);
    }
}
 
export default Container;