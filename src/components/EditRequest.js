import React, { useState, createContext } from "react";

export const EditRequest = createContext();

export const EditNoteProvider = (props) => {
  
    const [EditViewRequest, SetEditViewRequest] = useState([])
  return ( 
    <EditRequest.Provider value={[EditViewRequest, SetEditViewRequest]}>
      {props.children}
    </EditRequest.Provider>
  
  );

};