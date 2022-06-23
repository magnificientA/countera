import logo from './logo.svg';
import './App.css';
import React, { useState }from 'react';

function App() {
 const [count, setCount] = useState(0);
  return (
    <div className="counterApp">
      <div id='display'>
        <h1 id='main'>
          {count}
        </h1>
        <div id='button'>
          <div id='increase-button'>
          <button className='increase-button' onClick={()=>setCount(count+1)}>Increase</button>
          </div>
          <div id='reset'>
          <button className='reset' onClick={()=>setCount(0)}>Reset</button>
          </div>
          <div id='decrease-button'>
          <button className='decrease' onClick={()=>setCount(count-1)}>Decrease</button>
          </div>
        </div>
      </div>
    </div>
  );
  
}
 
export default App;
