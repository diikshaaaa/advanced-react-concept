import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect');
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  console.log('clearTimeout');
  // clearTimeout() method clears a timer set with the setTimeout() method
  // clearTimeout() method is used so that if user changes the page before it renders then the state does not change(means the count does not get updated)
  }, []);

  console.log('render');
  return <h1>I've rendered {count} times!</h1>;
}

export default Timer;
