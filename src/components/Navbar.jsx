import React, { Component } from 'react';

import {Link, Route, useHistory, withRouter} from 'react-router-dom';

const Navbar =()=> {

      var jsonString = localStorage.getItem("amay");
       var login = JSON.parse(jsonString);

       


      return(
      <>


            <div class="topnav">
            {/* <Link to = "/notes" className="title">Create Notes</Link> */}
          
            <Link to ="/excel" >Excel</Link>
            <Link to ="/login">Login </Link>
         
            


            </div>



</>
      )
    }


export default Navbar