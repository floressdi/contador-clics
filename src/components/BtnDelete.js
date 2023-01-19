import React from 'react'
import '../App.css';

export default function BtnDelete(prop) {

  const {counter, resetCounter, text} = prop

  return (
    <div>
        <button className='btnDelete btn'
            onClick={resetCounter}
            value={counter}
        >
            <p>{text}</p>
        </button>
    </div>
  )
}