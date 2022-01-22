import React, { useState, useEffect, Fragment } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); 

  return (
    <Fragment>
      <p>Count: {count}</p>
      <p><button onClick={() => setCount((c) => c + 1)}>+</button></p>
      <p>Calculation: {calculation}</p>
    </Fragment>
  );
}

export default Counter;
