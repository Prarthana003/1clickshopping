export default function Signup_page()
{
    return(
        <div>
    <link rel="stylesheet" href="style.css"></link>
<img class="one" src="https://templates-for-printing.com/wp-content/uploads/2020/11/1-Yellow-with-black-contours.jpg" height="100" width="100"></img>
<img class="click_pic" src="https://media.istockphoto.com/vectors/click-bar-and-finger-vector-web-button-icon-template-vector-id1133992590?k=20&m=1133992590&s=170667a&w=0&h=0R9ZkjYcBeKjHZE_zwo2UXNAtFZ1bLkX_ftdZgtKDA0=" height="200" width="200"></img>
<div class="container" >
<div class="row">
</div>
<div class="main">
   <form action="/sign_up" method="post">
   <h1>Welcome to 1ClickShopping.com</h1>
   <input class="box" type="text" name="name" id="name" placeholder="Name" required /><br></br>
   <input class="box" type="email" name="email" id="email" placeholder="E-Mail " required /><br></br>
   <input class="box" type="password" name="password" id="password" placeholder="Password " required/><br></br>
   <input class="box" type="text" name="phone" id="phone" placeholder="Phone Number " required/><br></br>
   <input class="box" type="text" name="address" id="address" placeholder="Shipping Address" required/><br></br>
   <br></br>
   <input type="submit" id="submitDetails" name="submitDetails" class="registerbtn" value="Submit" />   <br></br>
   </form>
</div>
<div class="">
</div>
</div>
</div>

)
}
