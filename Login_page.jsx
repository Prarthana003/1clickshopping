const axios =require("axios");
export default function Login_page()
{
    return(

        <div>
            <link rel="stylesheet" href="style.css"></link>
        <img className="one" src="https://templates-for-printing.com/wp-content/uploads/2020/11/1-Yellow-with-black-contours.jpg" height="100" width="100"></img>
        <img className="click_pic" src="https://media.istockphoto.com/vectors/click-bar-and-finger-vector-web-button-icon-template-vector-id1133992590?k=20&m=1133992590&s=170667a&w=0&h=0R9ZkjYcBeKjHZE_zwo2UXNAtFZ1bLkX_ftdZgtKDA0=" height="200" width="200"></img>
        <div className="container" >
        <div className="row">
        </div>
        <div className="main">
           <form action="/log_in" method="post" > 
           <h1>Welcome to 1.ClickShopping.com</h1>
           <h3>Log In</h3>
        
           <input className="box" type="text" name="phone" id="phone" placeholder="Enter registered phone Number " required/><br></br>
           <input className="box" type="password" name="password" id="password" placeholder="Password " required/><br></br>
           <br></br>
           <a href="http://localhost:3001/signup.html"> Sign up</a>  
           <input type="submit" id="submitDetails" name="submitDetails" className="registerbtn" value="Log In" onSubmit={axios.post("http://localhost:3000/log_in")}/>   <br></br>
           </form>
           <div className="test"></div>
        </div>
        <div className="">
        </div>
        </div>
        </div>
        

    )
}