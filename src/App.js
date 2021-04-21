import React from 'react';
import UseStateArray from './useState/UseStateArray';
import UseStateBasic from './useState/UseStateBasic';
import UseStateCounter from './useState/UseStateCounter';
import UseStateObject from './useState/UseStateObject';

function App() {
  
  return (
    <div className="container">
      <h1>My Course</h1>
      <hr/>
      <h2>1. UseState Basic</h2>
      <UseStateBasic />
      <hr/>
      <h2>2. useState Array</h2>
      <UseStateArray />
      <hr/>
      <h2>3. useState Object</h2>
      <UseStateObject />
      <hr/>
      <h2>4. useState Counter</h2>
      <UseStateCounter />
    </div>
  );
}

export default App;
