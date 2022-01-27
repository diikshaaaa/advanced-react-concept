import React, { useEffect, useRef } from 'react';

const UseRefBasics = () => {
  const refContainer = useRef(null);
  // useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue )
  // useRef(initialValue) is a built-in React hook that accepts one argument as the initial value 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
    // JavaScript focus method is used to give focus to a html element. It sets the element as the active element in the current document
  });

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer} />
          {/* we added a ref attribute to an element to access it directly in the DOM */}
        </div>
        <button type='submit'>submit</button>
      </form>
    </>
  );
};

export default UseRefBasics;