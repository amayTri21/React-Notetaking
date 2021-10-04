import React ,{useContext,useState}from'react'
import { AddRequest } from './AddRequest'
import { AssignRequest } from './AssignRequest'
import { EditRequest } from './EditRequest'
import { Redirect,Route,Link,useHistory,withRouter } from 'react-router-dom'

const AssignNotes = () => {
    
    var jsonString = localStorage.getItem("amay");
    var login = JSON.parse(jsonString);

    const[notedisplay,setNoteDisplay] = useState('')
    const [displayNote,setDisplayNote]=useState(false)
    const[AddNoteRequest,SetAddNoteRequest]=useContext(AddRequest)
    const[EditViewRequest,SetEditViewRequest] = useContext(EditRequest)
    const[AssignNoteRequest,SetAssignNoteRequest] = useContext(AssignRequest)
    const history = useHistory()

    const display = {
        display: 'block'
      };
      const hide = {
        display: 'none'
      };
     
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

      SetEditViewRequest(ViewEditRequest)
      history.push("./Note")

    }
      
   

     const  openModal =(e,mainNote) =>{
      
      setDisplayNote(true)
      setNoteDisplay(mainNote)
        
    }

      const modalClose= (e)=>{
      setDisplayNote(false)
      
    }
    return (
        <div>
            <h1>Assign</h1>
            
            <div>
<div className="modal" role="dialog" style={displayNote?display:hide}>
<div className="modal-dialog animate">
<div className="modal-content">
<div className="modal-header">
<a className="close" style={{color: "blue","margin-right":"3px"}}
 onClick={(e)=>modalClose(e)}
 >X</a>
</div>
<div className="modal-body">
<div className="form-horizontal">
<div className="form-group">
<h4 className="control-label col-sm-4">Your Note :</h4>
<div className="col-sm-8">
<textarea class="form-control" id="mainNote" autoComplete="off" value={notedisplay} disabled></textarea>
</div>
  </div>
 
</div>


</div>
</div>

</div>
</div>
                <section id="main-content">
                <section className="wrapper">
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                <div className="mt">
        
       
        <div className="tbl-holder">
        <table className="table table-striped table-advance table-hover table-bordered tbl-ticker tbl-hhide">
         <thead>
        
            <tr>
              <th>Title</th>
              <th>Note</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
    
          <table className="table table-striped table-advance table-hover table-bordered tbl-ticker mob-tbl">
        <tbody>
        
        
              {AddNoteRequest.map(function (item, key) {
          
          return (
        
                  <tr key={key}>
        
        
        {item.uploadedUser1 == login.name ? <td> {item.title}</td>  :''}         
        {item.uploadedUser1 == login.name ?  <td>{item.note}</td> :''}
                    
        {item.uploadedUser1==login.name ?
                    <td data-th="Action">
                {item.roleId=="101" ?      <a className="edit-icon"
                        onClick={(e)=>updateNote(key,item.title,item.note,item.roleId,item.uploadedUser1,item.ownerName)}
                        > <i className="fa fa-pencil "></i> </a>:
                        <a className="black-text" onClick={(e)=>openModal(e,item.note)}>View</a>}
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
         </div>
    
    )
}

export default AssignNotes
