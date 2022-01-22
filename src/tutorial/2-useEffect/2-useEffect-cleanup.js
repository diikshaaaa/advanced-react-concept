import React, { useState, useEffect } from 'react';

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  // Window.innerWidth returns the interior width of the window in pixels

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  // to add eventListerners we used useEffect hook 
  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', checkSize);
    // it means everytime resize event takes place, checkSize function is invoked 
    // addEventListener() is an inbuilt function in JavaScript which takes the event to listen for
    // resize event fires when the document view (window) has been resized
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
      // we get output even if we don't use return () but if we don't use it then resize event runs multiple time but it should have run for the single time. and if this resize event runs for multiple time then it will eventually lead to memory leak
      // why resize event runs multiple times?
      // because setSize is updating the value
      // useState was triggering the values and it was triggering re-render 
      // the moment we rerender useEffect is called and so resize event gets tiggered everytime
      // what is memory leak in javascript
      // memory leak occurs when a computer program incorrectly manages memory allocations so that piece of memory is not returned back to the OS.
      // useEffect will run everytime even after adding return() but return function will cleanup this for us
      // removeEventListener() is an inbuilt function in JavaScript which removes an event handler 
    };
  });
  // we could add an empty array it would have stopped the useEffect to rerender but I needed to learn about cleanup also. so this program is run in this way
  console.log('render');
  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;