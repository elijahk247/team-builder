import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// setting up imports for form
import { v4 as uuid } from 'uuid'
import Form from './Form'
import TeamMember from './TeamMember'

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

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialTeamList })
}
const fakeAxiosPost = (url, { name, email, role }) => {
  const newMember = { id: uuid(), name, email, role }
  return Promise.resolve({ status: 200, success: true, data: newMember })
}

function App() {
  // state to hold list of team members and update list, 
  // and state to hold form values and setting form values
  const [teamList, setTeamList] = useState(initialTeamList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    // used inside input onChange handler
    // using arguments passed inside updateForm to add to form
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    // submit function to be used inside onSubmit 

    // creating a member object
    const member = {
      // id: uuid(), but will be handled backend 
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.roles,
    }

    if (!member.username || ! member.email ) return 

    fakeAxiosPost('fake.com', member)
        .then(res => {
          //and on success update the list of friends in state with the new friend from API
          const newMemberFromAPI = res.data
          setTeamList([...teamList, newMemberFromAPI]);
        })
        .catch(err => {
          console.log("Error: ", err)
        })
        .finally(() => {
          //  d) also on success clear the form
          setFormValues(initialFormValues); 
        })
  }

  useEffect(() => {
    fakeAxiosGet('fakeapi.com').then(res => setTeamList(res.data))
    submitForm()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { /*<p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */ }
        { /*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */ }
        <h1>Meet the Team</h1>
      </header>
      <Form 
        values={formValues} update={updateForm} submit={submitForm}
      />

        {
          teamList.map(member => {
            return (
            <TeamMember key={member.id} details={member}/>
            )
          })
        }
    </div>
  );
}

export default App;
