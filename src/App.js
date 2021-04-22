import React from 'react';
import MultipleReturn from './conditional-rendering/MultipleReturn';
import UseEffectBasic from './useEffect/UseEffectBasic';
import UseEffectCleanUp from './useEffect/UseEffectCleanUp';
import UseEffectFetch from './useEffect/UseEffectFetch';
import UseStateArray from './useState/UseStateArray';
import UseStateBasic from './useState/UseStateBasic';
import UseStateCounter from './useState/UseStateCounter';
import UseStateObject from './useState/UseStateObject';

function App() {
  
  return (
    <div className="container">
      <h1>My Course</h1>
      <hr/>
      <div className='usestate'>
        <div>
          <h2>1. UseState Basic</h2>
          <UseStateBasic />
        </div>
        <div>
          <h2>2. useState Array</h2>
          <UseStateArray />
        </div>
        <div>
          <h2>3. useState Object</h2>
          <UseStateObject />
        </div>
        <div>
          <h2>4. useState Counter</h2>
          <UseStateCounter />
        </div>
      </div>

      <div className="useeffect">
        <div>
          <h2>1. useEffect Basic</h2>
          <UseEffectBasic />
        </div>
        <div>
          <h2>2. useEffect Cleanup</h2>
          <UseEffectCleanUp />
        </div>
        <div>
          <h2>3. useEffect Fetch</h2>
          <UseEffectFetch />
        </div>
        <div>
          <h2>4. Conditional Rendering</h2>
          <MultipleReturn />
        </div>
      </div>
    </div>
  );
}

export default App;
