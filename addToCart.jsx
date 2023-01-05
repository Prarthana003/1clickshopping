import React, { Component } from 'react';

class AddToCart extends Component {
    
    constructor(){
        super()
        this.state={val:0}
    }

    render() { 
        return (
            <div>
            <button onClick={this.addItem}
            className="badge bg-warning text-dark" style={{paddingRight:'20px',paddingLeft:'20px',
            borderColor:'#ffc107' ,position:'relative',marginLeft:'42%',marginRight:'40%',marginBottom:'5%'}}>
                Add to cart</button>
            
            </div>
        );
    }

    addItem=()=>{
        
        this.setState({val:this.state.val+1})
    }
}
 
export default AddToCart