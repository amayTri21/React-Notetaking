import React, { useState, useRef, useContext,useEffect } from 'react'

import { Redirect, Route, Link, useHistory, withRouter } from 'react-router-dom'
import Login from './Login';
import { NoteContext } from './NoteContext';
import { UserContext } from './UserContext';
import { AddRequest } from './AddRequest';
import { EditRequest } from './EditRequest';
import { showSuccess } from './CommonAlert';
const Notes = () => {
  var jsonString = localStorage.getItem("amay");
  var login = JSON.parse(jsonString);

  const Amay = [
    {
      Name: "Amay",
      Password: "1234",
    }
  ]
  const history = useHistory()
  const [note, Setnote] = useState("")
  const [title, Settitle] = useState("")
 

  const [notebook, Setnotebook] = useContext(NoteContext)

  

  const [useravailable,Setuseravailable] = useState([])
  const [userlist, Setuserlist] = useState([{ "roleId": "101", "roleName": "Contributor" }, { "roleId": "102", "roleName": "Reader" }])
  const [mainNote, setMainNote] = useState('')
  const [ViewEditRequest, SetViewEditRequest] = useState(EditRequest)
  const [AddNoteRequest, SetAddNoteRequest] = useContext(AddRequest)
  const [RegisteredUser, SetUserRegistered] = useContext(UserContext)
  const [request, setrequest] = useState([])
  const [writeNote, setWriteNote] = useState(false)
  const [flag1, setFlag1] = useState()
  const [valuefor, setValueFor] = useState('')
  const [uploadedUser, setUploadedUser] = useState('')
  const [owner, Setowner] = useState()
  const [RoleId, setRoleId] = useState()




  useEffect(() => {
    if (ViewEditRequest!='') {
     

      Settitle(ViewEditRequest.title)
      Setnote(ViewEditRequest.note)
      setFlag1(ViewEditRequest.flag)
      setValueFor(ViewEditRequest.index)
      setRoleId(ViewEditRequest.roleId)
      setUploadedUser(ViewEditRequest.uploadedUser)
      if(owner==ViewEditRequest.editOwnerName){
        Setowner(ViewEditRequest.editOwnerName)
      }
      else{
        Setowner(ViewEditRequest.editOwnerName)
      }
    }
    else {
      
      Settitle('')
      Setnote('')
      setFlag1('')
      setValueFor('')
      setRoleId([])
      setUploadedUser('')
    }


 



  }, []);


  const logout = () =>{
    localStorage.clear();
    history.replace('/');

    }

  const addnote = () => {
  
    const newNote = { id: Math.random(), title: title, note: note };
    const newNoteData = notebook.concat(newNote)
    Setnotebook(newNoteData);
    if (note) {
      if (flag1 == 1) {
        setWriteNote(false)
        var Request = {
          "noteTitle":title,
          "note": note,
          "userList": useravailable,
          "roleId": RoleId,
          "uploadedUser":uploadedUser,
          "ownerName":owner,
           }
        console.log(Request)
        if(AddNoteRequest!=''){
          for(let k=0;k<AddNoteRequest.length;k++){
            if(k===valuefor){
              AddNoteRequest.splice(valuefor,1)
              AddNoteRequest.push(Request)
            }
          }
        }
       
      SetAddNoteRequest(AddNoteRequest)   
        alert("Note updated successfully.")
         Settitle('')
         Setnote('')
         setFlag1('')
     history.push('./mynotes')
     }
      else {
        setWriteNote(true)
      }
    }
    else {

      
      alert("Empty note cannot be uploaded.")
    }
  }
  const submitUserList = () => {

    var selecteduser = document.getElementById("selectuser").value;
    console.log(selecteduser)
    // const am = RegisteredUser.filter((item) => item.name == selecteduser)
    // Setuseravailable(am)
    setUploadedUser(selecteduser)
  

    if (title!='' && note!='')
      if (document.getElementById("SelQType1").value == "Select Role") {
        alert("Please select user type ")
      }
      else {                                                                                                             
 if(uploadedUser==""){
                 alert("no user selected")
 } 
   else{   
        var Request = {
          "title": title,
          "note": note,
          "userList":useravailable,
          "roleId": RoleId,
          "uploadedUser":uploadedUser,
          "ownerName":login.name
        }
          console.log(AddNoteRequest)
if(AddNoteRequest!=''){

  AddNoteRequest.push(Request)
  
}
else{
        
        
        request.push(Request)
        SetAddNoteRequest(request)
    
             }   
         console.log("Note added successfully.")
        showSuccess("Note created sucessfully")
         
         Setowner(login.name)
         Setnote('')
         Settitle('')
         setWriteNote(false)
         history.push('/mynotes')
      }
    }
 
    else {
      console.log("Please enter the required fields.")
    }
}


  const userSelection = (e) => {
    let flag1 = []

    for (var i = 0; i < userlist.length; i++) {

      userlist[i].roleName === e.target.value ?
        flag1.push(userlist[i].roleId) : setRoleId('')
    }
    setRoleId(flag1)
  }

  return (
    <div>

      <div class="topnav">
        {/* <Link to = "/notes" className="title">Create Notes</Link> */}
        <Link to="/mynotes" >Mynotes</Link>
        <Link to="/assign">Assigned Notes </Link>
        <div id="navlogout">
        <p>Hello {login.name}</p>
        <button onClick={logout}>Logout</button>
        </div>
      </div>
      <h1>Notes</h1>

      <label>write note here</label><br /><br />

      <textarea onChange={e => Setnote(e.target.value)} cols="50" id="note" rows="5" value={note} /><br /><br />
      <label>Enter title</label><br />
      <input type="text" className="title" placeholder="enter title" onChange={e => Settitle(e.target.value)} value={title} /><br />
      <br />

      <button className="btns" onClick={addnote}>Add</button>
      <div>
        <br />

        <label>Select User</label><br />
        <select id="selectuser"><br />
          <option>Select user</option>
          {

       
        RegisteredUser.filter(function(user){ return user.name != login.name;}).map(function(user){

          return(<option>{user.name}</option>)
        })   
         }
       
        </select><br /><br />
       
   </div>
      <div>
        <label>Select Role </label><br/>
        <select id="SelQType1"
          onChange={(e) => userSelection(e)}
        >
          <option>Select Role</option>
          {
            userlist.map(function (item, key) {
              return (<option>{item.roleName}</option>)
            })
          }
        </select><br/>

        <button className="btns" onClick={submitUserList}>Submit</button>
      </div>
    </div>
  )
}

export default Notes
