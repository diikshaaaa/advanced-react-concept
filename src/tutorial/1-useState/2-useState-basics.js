import React, { useState } from 'react';
// we are destructuring useState from react as it is a named export
// Destructuring means to extract only what is needed


const UseStateBasics = () => {
// component must be uppercase
// useState is invoked inside function/component body
  console.log(useState());
  
  const [text, setText] = useState('random title');
  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world');
    } else {
      setText('random title');
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
    // using React.Fragment we can group off a list of children without adding extra nodes to the DOM
  );
};

export default UseStateBasics;