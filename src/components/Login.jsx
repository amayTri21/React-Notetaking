import React ,{useContext}from 'react'
import { Redirect,Route,Link,useHistory,withRouter } from 'react-router-dom'
import { UserContext } from './UserContext';

// import disableBrowserBackButton from 'disable-browser-back-navigation';


const Login = () => {

   

    const [user,Setuser] =useContext(UserContext)
    const history = useHistory();

      const validate = () =>{

       
        var email1 = document.getElementById("email").value;
        var name1 = document.getElementById("name").value;
       const amay = user.filter((item) => item.name==name1 && item.email==email1)
        console.log(amay)
        if(amay.length==1){
            history.push('/notes')
        }
       else{
           alert("failure")
       }
    }

    
    return (
        <div>
            <h1 className="login">Login Form</h1>

<div className="loginBox">
            <form >

            <label>Name</label><br></br>
          <input type="text" name="name" placeholder=" Enter Name" id ="name"></input><br></br>
          <label>Email</label><br></br>
          <input type="text" name="name" placeholder=" Enter Email" id="email"></input><br/>
           
          <button className="btns" onClick={validate}>Login</button><br/><br/>
          <Link to="/signup">Not Registered?</Link>
            
        </form>
        </div>
        </div>

    )
}

export default withRouter(Login);

