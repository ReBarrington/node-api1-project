import React from 'react';
import './App.css';
import NewUserForm from './components/NewUserForm';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <NewUserForm />
      <Users />
    </div>
  )
}

export default App
