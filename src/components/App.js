import React, { useReducer } from 'react';
import '../Styles/App.css';
import AppBar from './AppBar';
//import SubsucForm from './SubsucForm';
import SubsucList from './SubsucList';
import reducer from '../reducers'
import AddIcon from './AddIcon'

function App() {
  const [state, dispatch] = useReducer(reducer, [])

  let TotalPrice = 0;
  state.forEach((data) => {
    TotalPrice = TotalPrice + Number(data.price);
  })

  console.log(state, 'App.js state');

  return (
    <div className="App">
      <AppBar />
      {/* <SubsucForm state={state} dispatch={dispatch} /> */}
      <SubsucList state={state} dispatch={dispatch} />
      <div>TOTAL PRICE : ￥ {TotalPrice}</div>
      <div>TOTAL Subsucription : {state.length}</div>
      <AddIcon state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;