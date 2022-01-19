import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Damon the Vampire',
    age: 121,
    message: 'Wake up Sleepyhead',
  });

  const changeMessage = () => {
    setPerson({ ...person, message: 'No I will not'});
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;