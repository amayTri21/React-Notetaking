import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Link, Route, useHistory, withRouter} from 'react-router-dom';
import Notes from './components/Notes';
import ExcelToJson from './components/ExcelToJson';
import Login from './components/Login';
import { UserProvider } from './components/UserContext';
import MyNotes from './components/MyNotes';
import AssignNotes from './components/AssignNotes';
import { NotesProvider } from './components/NoteContext';
import Signup from './components/Signup';
import { AddNoteProvider } from './components/AddRequest';
import { AssignNoteProvider } from './components/AssignRequest';
import { ViewNoteProvider } from './components/ViewRequest';
import { EditNoteProvider } from './components/EditRequest';
function App() {
  return (
    <UserProvider>
      <NotesProvider>
      <AddNoteProvider>
        <AssignNoteProvider>
          <ViewNoteProvider>
            <EditNoteProvider>
     
    <div className="App">
      {/* <Route exact path="/" component={Navbar}/> */}
      <Route exact path="/notes" component={Notes}></Route>
      <Route exact path="/excel" component={ExcelToJson}></Route>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/mynotes" component={MyNotes}></Route>
      <Route exact path="/assign" component={AssignNotes}></Route>
      <Route exact path="/signup" component={Signup}></Route>
      
     
    </div>
    </EditNoteProvider>
    </ViewNoteProvider>
   </AssignNoteProvider>
    </AddNoteProvider>
    </NotesProvider>
    </UserProvider>
  );
}

export default App;
