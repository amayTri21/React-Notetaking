import React, { useState, createContext } from "react";

export const AssignRequest = createContext();

export const AssignNoteProvider = (props) => {
  
    const [AssignNoteRequest,SetAssignNoteRequest] = useState([])
  return ( 
    <AssignRequest.Provider value={[AssignNoteRequest,SetAssignNoteRequest]}>
      {props.children}
    </AssignRequest.Provider>
  );
};