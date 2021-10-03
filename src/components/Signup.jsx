import React, { useState,useContext} from 'react'
import { Link,useHistory,withRouter} from 'react-router-dom'
import Login from './Login'
import { UserContext } from './UserContext';

const Signup = () => {
var jsonString = localStorage.getItem("amay");
var login = JSON.parse(jsonString);

const[name,Setname]=useState("")
const[email,Setemail]=useState("")
const [RegisteredUser, SetUserRegistered] = useContext(UserContext)
const[id,Setid] = useState(4)

const history = useHistory()
 const  amay ={
   id:id, 
   name:name,
   email:email,
  
}



 const validate = () =>{

      Setid(id+1)
  
     const newuser = {
        id:id,
        name:name,
        email:email,
     }
     RegisteredUser.push(newuser)
    
   
     console.log(RegisteredUser)
     localStorage.setItem("amay", JSON.stringify(amay));

        var name1=document.getElementById("name").value;  
      //   var number=document.getElementById("number").value;  
        var email1=document.getElementById("email").value; 
      //   var password=document.getElementById("password").value; 
        var letters = /^[A-Z a-z]+$/;  
      //   var phoneno = /^[6-9]\d{0,10}$/
      //   var password_valid=/^[A-Z a-z 0-9 !@#$%&*()<>]{6,12}$/; 
        

        if(name1=='' || email1==''){  
         alert("ALL FIELDS ARE COMPULSORY"); 
      
         }  
 
         else if(!letters.test(name1)  )  
             {  
              alert('Names should contain Letters only');  
              return false; 

             }  

         // else if(!phoneno.test(number))  
         //     {  
         //     alert("Enter a number starting from 6 8 7 9");  
       
         //     } 
             
         // else if(!password_valid.test(password)) 
         // {
         // alert("Password Must Be 6 to 12 and allowed !@#$%&*()<> character");
          
         //     password.style.background = '#f08080';
         //     return false;                    
         

         // }
 
             else{
         
          history.push('/')
          return true;
    
             } 

 }


    return (
       <div>
          <div id ="box">
           
               <label>Name</label><br></br>   
            <input class="fname" type="text" placeholder=" Enter First name" id="name" 
               onChange={e => Setname(e.target.value)} / ><br></br>
                <label>Email</label><br></br>
          <input type="text"  placeholder=" Enter Email" id ="email"
             onChange={e => Setemail(e.target.value)}/><br></br>
          {/* <label>Contact</label><br></br>
          <input type="text"  placeholder=" Enter Mobile number" id="number"
             onChange={e => Setmobile(e.target.value)}/><br></br>
          <label>Password</label><br></br>
          <input type="password" placeholder=" Enter Password" id="password"
             onChange={e => Setpassword(e.target.value)}/><br></br> */}
          <button className="btns"onClick={validate}>Register</button><br></br>
          
    
            </div>
            </div>
    )
}

export default withRouter(Signup)

