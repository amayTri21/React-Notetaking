import React, { useState, createContext } from "react";

export const ViewRequest = createContext();

export const ViewNoteProvider = (props) => {
  
    const [ViewNoteRequest, SetViewNoteRequest] = useState([])
  return ( 
    <ViewRequest.Provider value={[ViewNoteRequest, SetViewNoteRequest]}>
      {props.children}
    </ViewRequest.Provider>
  );
};