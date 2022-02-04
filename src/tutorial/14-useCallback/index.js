import { useState, useCallback } from "react";
import Todos from "./Todos";

const useCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);
  // if we will not use useCallback hook, Todos component re-renders even if we wrap export Todos in memo [export default memo(Todos);] and even if todos do not change 
  // this is because for addTodo function rerendering is occurring every time and there is something called "referential equality" in javasccript.
  // Referential equality means that the pointers for two objects are the same. That is to say the objects are contained in the same memory location which leads us to the fact that pointers reference to the same object

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default useCallbackExample;

