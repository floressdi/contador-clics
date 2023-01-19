import './App.css';
import React, { useState } from 'react';
import BtnClic from './components/BtnClic';
import BtnDelete from './components/BtnDelete';
import DisplayCounter from './components/DisplayCounter';

function App() {
  
  const [counter, setCounter] = useState(0)

  function handleChange(e){
    setCounter(counter +1);
  }

  function resetCounter(e){
    setCounter(0)
  }

  return (
    <div className="App">
        <h2 className='flexbox'> Click counter </h2> 

        <section className='sectionbtn flexbox'>
            <div>
                <DisplayCounter
                  counter ={counter}
                 />
            </div>

            <div className='containerBtns'>
                 <BtnClic
                    counter = {counter}
                    handleChange={handleChange}
                    text= 'CLICK'
                 />
                 <BtnDelete
                    counter={counter}
                    resetCounter = {resetCounter}
                    text ='RESET'
                 />
            </div>
        </section>
    </div>
  );
}export default App;