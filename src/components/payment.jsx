import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AppBar from './appBar';
import total from './total'
var cart1= require("./cartlist");

export default function Payment(){
    let c=0;
    let c1=0
    let c2=0
    let check='none';
    console.log(total);
    
    const navigate = useNavigate()
    return(
        <Container>
            <AppBar/>

            <div>
                <h1>Your Total is: </h1><h1>{total}</h1>
            </div>

            <div style={{align:'center',backgroundColor:'#E2A7F4 ',border:'10px solid',margin:'10%',borderRadius:'20px',alignItems:'center'}}>
                <h1 style={{align:'center',color:'black ',marginLeft:'33%',padding:'20px'}}>Mode Of Payment</h1>
                <div style={{display:'flex',flexDirection:'column'}}>
                <button id='color' style={{padding:'2%',backgroundColor:'#D9E1E5 '}}
                onClick={
                    ()=>{
                        c++;
                        if(c2==0 && c1==0)
                        if(c%2)
                        document.getElementById('color').style.backgroundColor='#86F2CD '

                        else
                        document.getElementById('color').style.backgroundColor='#D9E1E5 '
                        
                    }
                }
                ><h2>Cash on delivery</h2></button>
                <button  style={{padding:'2%',backgroundColor:'#D9E1E5 '}}
                onClick={
                    ()=>{
                        check='true'
                    }
                }
                ><h2>Credit/Debit card</h2></button>
                <input type="text" size='50px' placeholder='Enter your card number' />
                <div>
                <button id='color3' style={{width:'50%'}}
                 onClick={
                    ()=>{
                        c1++;
                        if(c==0 && c2==0)
                        if(c1%2)
                        document.getElementById('color3').style.backgroundColor='#86F2CD '

                        else
                        document.getElementById('color3').style.backgroundColor='#D9E1E5 '
                        
                    }
                }
                >
                    <img src="https://www.exchange4media.com/news-photo/111562-googlepay.jpg" 
                    style={{height:'100px',width:'100px'}}></img>
                    
                </button>
                <button id='color2' style={{width:'50%'}}
                 onClick={
                    ()=>{
                        c2++;
                        if(c==0 && c1==0)
                        if(c2%2)
                        document.getElementById('color2').style.backgroundColor='#86F2CD '

                        else
                        document.getElementById('color2').style.backgroundColor='#D9E1E5 '
                        
                    }
                }


                >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2CqdvD4-gitUGqEXjnznRB_sT8HmGWXzGYQ&usqp=CAU" 
                    style={{height:'100px',width:'100px'}}></img>
                    
                </button>
                </div>
                </div>

                
                
            </div>

            <div>
                    <button className="badge bg-warning text-dark" style={{padding:'10px',height:'50px',width:'100px',marginLeft:'47%'}} 
                    onClick={
                        ()=>navigate('/thanks')
                    }
                    
                    >Pay</button>
                </div>
        </Container>
    )
    
}