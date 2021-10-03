import React,{useContext}from 'react'
import { useState } from 'react/cjs/react.development'
import { NoteContext } from './NoteContext'
import Notes from './Notes'

const MyNotes = () => {

    const [notebook,Setnotebook] = useContext(NoteContext)
    const[note,Setnote] = useState()
    const[title,Settitle] = useState()
    const[editid,Seteditid] = useState()

    const submitchanges = () =>{
        Setnotebook(
            notebook.map((elem) =>{

            if(elem.id==editid){
               return {
                   ...elem, title:title,note:note
               }
            }
            return elem;

            })
       )

    }
    
    const onDelete = (id) =>{
        console.log("id is",id)
     const newNotedata = notebook.filter((item) => item.id != id
     );
     Setnotebook(newNotedata)
        
    }

    const onUpdate = (id) =>{

        const  newEdit = notebook.find((elem) => {
        
            return elem.id == id
  
  
      });
      console.log(newEdit)
      Settitle(newEdit.title)
      Setnote(newEdit.note)

      Seteditid(id)
    }  

        
    return (
        <div>
            <h1>My notes
               
             <br/>
             <div ClassName="menu-items container-fluid mt-5" >
                <div ClassName="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">

                            {
                                notebook.map((elem) => {
                                    const { id, title, note } = elem;
                                    <p key={id}></p>
                                  
                                    return (
                                      
                                        

                                        <div class="card w-50" id="card">

                                            <div className="card-body" >
                                                <h5 class="card-title">{title}</h5>
                                                <p class="card-text">{note}</p>
                                               
                                                {/* <button className= "btn btn-warning" className="buttons" onClick={()=> onDelete(elem.id)}>Delete</button>
                                                <button className= "btn btn-warning" onClick={sharenotes} className="buttons">Share</button> */}
                                               <i class="fa fa-edit" id ="faedit" onClick={()=> onUpdate(elem.id)}></i>
            
                                               <i class="fa fa-remove" id ="faedit"onClick={()=> onDelete(elem.id)}></i><br/>
                                               <input type="text" onChange={e => Setnote(e.target.value)} value={note}/>
                                                <br/>
                                                <button className="submit" onClick={submitchanges}>Submit</button>
                                            </div>
                                        </div>
                                       



                                    )
                                })
                            }
                                       
                                     
                        </div>
                    </div>
                </div>
            </div>



            </h1>
        </div>
    )
}

export default MyNotes
