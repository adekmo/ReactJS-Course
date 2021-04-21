import React from 'react';
import UseStateArray from './useState/UseStateArray';
import UseStateBasic from './useState/UseStateBasic';
import UseStateObject from './useState/UseStateObject';

function App() {
  
  return (
    <div className="container">
      <h1>My Course</h1>
      <hr/>
      <h2>1. UseState Basic</h2>
      <UseStateBasic />
      <h2>2. useState Array</h2>
      <UseStateArray />
      <h2>3. useState Object</h2>
      <UseStateObject />
    </div>
  );
}

export default App;
