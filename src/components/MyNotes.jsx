// import React,{useContext}from 'react'
// import { useState } from 'react/cjs/react.development'
// import { NoteContext } from './NoteContext'
// import Notes from './Notes'

// const MyNotes = () => {

//     const [notebook,Setnotebook] = useContext(NoteContext)
//     const[note,Setnote] = useState()
//     const[title,Settitle] = useState()
//     const[editid,Seteditid] = useState()

//     const submitchanges = () =>{
//         Setnotebook(
//             notebook.map((elem) =>{

//             if(elem.id==editid){
//                return {
//                    ...elem, title:title,note:note
//                }
//             }
//             return elem;

//             })
//        )

//     }
    
//     const onDelete = (id) =>{
//         console.log("id is",id)
//      const newNotedata = notebook.filter((item) => item.id != id
//      );
//      Setnotebook(newNotedata)
        
//     }

//     const onUpdate = (id) =>{

//         const  newEdit = notebook.find((elem) => {
        
//             return elem.id == id
  
  
//       });
//       console.log(newEdit)
//       Settitle(newEdit.title)
//       Setnote(newEdit.note)

//       Seteditid(id)
//     }  

        
//     return (
//         <div>
//             <h1>My notes
               
//              <br/>
//              <div ClassName="menu-items container-fluid mt-5" >
//                 <div ClassName="row">
//                     <div className="col-11 mx-auto">
//                         <div className="row my-5">

//                             {
//                                 notebook.map((elem) => {
//                                     const { id, title, note } = elem;
//                                     <p key={id}></p>
                                  
//                                     return (
                                      
                                        

//                                         <div class="card w-50" id="card">

//                                             <div className="card-body" >
//                                                 <h5 class="card-title">{title}</h5>
//                                                 <p class="card-text">{note}</p>
                                               
//                                                 {/* <button className= "btn btn-warning" className="buttons" onClick={()=> onDelete(elem.id)}>Delete</button>
//                                                 <button className= "btn btn-warning" onClick={sharenotes} className="buttons">Share</button> */}
//                                                <i class="fa fa-edit" id ="faedit" onClick={()=> onUpdate(elem.id)}></i>
            
//                                                <i class="fa fa-remove" id ="faedit"onClick={()=> onDelete(elem.id)}></i><br/>
//                                                <input type="text" onChange={e => Setnote(e.target.value)} value={note}/>
//                                                 <br/>
//                                                 <button className="submit" onClick={submitchanges}>Submit</button>
//                                             </div>
//                                         </div>
                                       



//                                     )
//                                 })
//                             }
                                       
                                     
//                         </div>
//                     </div>
//                 </div>
//             </div>



//             </h1>
//         </div>
//     )
// }

// export default MyNotes
import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { showSuccess } from './CommonAlert';


import { AddRequest } from './AddRequest';
import { EditRequest } from './EditRequest';



const MyNote =() =>{
    var jsonString = localStorage.getItem("amay");
    var login = JSON.parse(jsonString);
const[AddNoteRequest,SetAddNoteRequest] = useContext(AddRequest)
const[ViewEditRequest,SetViewEditRequest] = useContext(EditRequest)
const[flag2,SetFlag2] = useState(true)
const history = useHistory()

const deleteNote =(e,key) =>{
  AddNoteRequest.splice(key, 1);
  console.log("Note deleted successfully.")
  history.push('/mynotes')
}

const updateNote =(key,title,note,roleId,uploadedUser,ownerName)=>{
  let ViewEditRequest={
      "title":title,
      "note":note,
    "roleId":roleId,
    "uploadedUser1":uploadedUser,
    "flag":1,
    "index":key,
    "editOwnerName":ownerName
  }
  SetViewEditRequest(ViewEditRequest)
  history.push("./notes")
}

const onAddNotePage=()=>{
  let ViewEditRequest={
    "title":"",
    "note":"",
    
    "roleId":[],
    "uploadedUser1":"",
    "editOwnerName":"",
    "ownerName":"",
  
  }
SetViewEditRequest(ViewEditRequest)

  history.push('/notes')
}

useEffect(()=>{
 console.log(`View`,AddNoteRequest)
 
})

    return(
        <div>
      
        <section id="main-content">

        <section className="wrapper"><br/><br/>
        <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12">
        <a className="btn btn-success" style={{"margin-left": "850px","width": "130px"}} onClick={(e)=>onAddNotePage(e)}><span style={{color:"white"}}>+ Add Note</span></a>
       
       

<div className="mt">
<div className="tbl-holder"><br/><br/><br/>
<table className="table table-striped table-advance table-hover table-bordered tbl-ticker tbl-hhide">
 <thead>

    <tr>
      <th>Title</th>
      <th>Note</th>
      <th>Rights</th>
    </tr>
  </thead>
</table>


  <table className="table table-striped table-advance table-hover table-bordered tbl-ticker mob-tbl">
    <tbody>


      {AddNoteRequest.map(function (item, key) {
 
        return (
         
          <tr key={key}>
          {item.ownerName==login.name ?  <td  > {item.title}</td>    :''}       
             {item.ownerName==login.name ?  <td >{item.note}</td> :''}
            
             {item.ownerName==login.name ?
            <td data-th="Action">
      <a className="edit-icon" onClick={(e)=>updateNote(key,item.title,item.note,item.roleId,item.uploadedUser1,item.ownerName)} > <i className="fa fa-pencil "></i> </a>
        <a className="delete-icon" onClick={(e)=>deleteNote(e,key)}> <i className="fa fa-trash-o "></i> </a>

            </td>:''}
            

          </tr>
        )
      })}</tbody>

  </table>

  
</div>
</div>
</div>
</section>
</section>
</div>
    )
}

export default MyNote