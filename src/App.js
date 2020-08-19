import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// setting up imports for form
import { v4 as uuid } from 'uuid'

const initialTeamList = [{
  id: uuid(),
  name: 'Elijah',
  email: 'sunghoonkim247@gmail.com',
  role: 'Student',
}]

const initialFormValues = {
  // text inputs
  name: '',
  email: '',
  // drop-down menu
  role: '',
}

function App() {
  // state to hold list of team members and update list, 
  // and state to hold form values and setting form values
  const [teamList, setTeamList] = useState(initialTeamList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    // used inisde input onChange handler
    // using arguments passed inside updateForm to add to form
    setFormValues({...formValues, [inputName]: inputValue})
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
