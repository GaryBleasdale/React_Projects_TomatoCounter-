import React from 'react';
import './App.css';
import Tomato from './Tomatos';

function App() {
  const [count, setCount] = React.useState(0)
 

 function increaser() {
  if (count>0){
  return setCount(count - 1);
  }
}



  return (
    <div className="App">
      <div className="counter-container" >
        <h3>Tomato counter</h3>
        <div className="display">
          {count}
        </div>
        <div className="button-container">
          <button onClick={increaser}>-</button>
          <button onClick={()=>{setCount(count + 1)}}>+</button>
        </div>
        < Tomato count={count}/>
      </div>
    </div>
  );
}

export default App;
