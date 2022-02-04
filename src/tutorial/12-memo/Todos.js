import { memo } from "react";

const Todos = ({ todos }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default memo(Todos);
// we have wraped the Todos component export in memo
// memo will prevent the Todos component from needlessly re-rendering.
// we will get the result even if we don't wrap Todos with memo but our performance will not be good
// Todos component will only re-render when the todos prop changes
