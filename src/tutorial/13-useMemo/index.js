import { useState, useMemo } from "react";

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 10; i++) {
    num += 1;
    // console.log('i', i);
    // console.log('num', num);
    }
  return num;
};

const useMemoExample = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);
  // here count is giving the initial value to num
  // count=num=0
  // then loop will go like:
  // for i=0, num = 0+1= 0
  // for i=9, num = 9+1= 10

  // when count will increase by 1 and become count = c+1 = 0 + 1 = 1
  // then count=num=1
  // then loop will go like:
  // for i=0, num = 1+1= 2
  // for i=9, num = 10+1= 11

  const increment = () => {
    setCount((c) => c + 1);
  };
  
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

export default useMemoExample;

