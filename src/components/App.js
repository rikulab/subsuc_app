import React from 'react';
import '../Styles/App.css';
import AppBar from './AppBar';
import AddIcon from './AddIcon';
import SubsucForm from './SubsucForm';
import SubsucList from './SubsucList';
import Total from './Total';

function App() {
  return (
    <div className="App">
      <AppBar />
      <AddIcon />
      <SubsucForm />
      <SubsucList />
      <Total />
    </div>
  );
}

export default App;