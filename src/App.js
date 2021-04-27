import React from 'react';
import MultipleReturn from './conditional-rendering/MultipleReturn';
import ShortCircuit from './conditional-rendering/ShortCircuit';
import ShowHide from './conditional-rendering/ShowHide';
import ControlInput from './forms/ControlInput';
import MultipleInput from './forms/MultipleInput';
import UseEffectBasic from './useEffect/UseEffectBasic';
import UseEffectCleanUp from './useEffect/UseEffectCleanUp';
import UseEffectFetch from './useEffect/UseEffectFetch';
import UseReducerSetUp from './useReducer/UseReducerSetUp';
import Refactor from "./useReducer/Refactor";
import UseRefBasic from './useRef/UseRefBasic';
import UseStateArray from './useState/UseStateArray';
import UseStateBasic from './useState/UseStateBasic';
import UseStateCounter from './useState/UseStateCounter';
import UseStateObject from './useState/UseStateObject';
import PopDrilling from './popDrilling/PopDrilling';
import ContextApi from './useContext/ContextApi';

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
          <h2>4. Cond. Rendering | Multiple Return</h2>
          <MultipleReturn />
        </div>
        <div>
          <h2>5. Cond. Rendering | Short Circuit</h2>
          <ShortCircuit />
        </div>
        <div>
          <h2>6. Cond. Rendering | Show-Hide</h2>
          <ShowHide />
        </div>
        <div>
          <h2>7. Forms | Controlled Input</h2>
          <ControlInput />
        </div>
        <div>
          <h2>8. Forms | Multiple Input</h2>
          <MultipleInput />
        </div>
        <div>
          <h2>9. UseRef | UseRef Basic</h2>
          <UseRefBasic />
        </div>
        <div>
          <h2>10. UseReducer</h2>
          <UseReducerSetUp />
        </div>
        <div>
          <h2>10. UseReducer | Refactor</h2>
          <Refactor />
        </div>
        <div>
          <h2>11. Pop Drilling</h2>
          <PopDrilling />
        </div>
        <div>
          <h2>12. UseContext | Context API</h2>
          <ContextApi />
        </div>
      </div>
    </div>
  );
}

export default App;
