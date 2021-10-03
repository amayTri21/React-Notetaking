import React, { useState, createContext } from "react";

export const AddRequest = createContext();

export const AddNoteProvider = (props) => {
  
    const [AddNoteRequest, SetAddNoteRequest] = useState([])
  return ( 
    <AddRequest.Provider value={[AddNoteRequest, SetAddNoteRequest]}>
      {props.children}
    </AddRequest.Provider>
  );
};