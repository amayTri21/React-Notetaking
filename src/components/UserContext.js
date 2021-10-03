import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  
    const [users, setUsers] = useState([
      
    { id: 1, name: "Amay", email: "amaytripathi@gmail.com" },
    { id: 2, name: "jignesh", email: "jig@gmail.com" },
    { id: 3, name: "yash", email: "yash12@gmail.com"},
  ]); 

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};
