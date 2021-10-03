import React, { useState, createContext } from "react";

export const NoteContext = createContext();

export const NotesProvider = (props) => {
  
    const [notebook, Setnotebook] = useState([
  
    { id: 1, title: "Demo", notes: "Hi there how was our day?"},
  ]); 
    
  return (
    <NoteContext.Provider value={[notebook, Setnotebook]}>
      {props.children}
    </NoteContext.Provider>
    
  );
};
