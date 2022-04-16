import './App.css';
import React from 'react';
import {useState} from 'react';

function App() {
  const[number, setNumber] = useState(0);
  return (
    <div className="App">
        <div className="container__counter-father">
      <div className="container__counter-child">
        
      <h1 className={number > 0 ? "positive" : number < 0 ? "negative" : null}>{number}</h1>
      <div className="container__counter-buttons">        
      <button type="button" className="container__counter-button increase" onClick={() => setNumber(number+1)}>+</button>
      <button type="button" className="container__counter-button reset" onClick={() => setNumber(0)}>Restablecer</button>
      <button type="button" className="container__counter-button decrease" onClick={() => setNumber(number-1)}>-</button>
      </div>
      </div>
    </div>
   </div>
  );
}



export default App;
