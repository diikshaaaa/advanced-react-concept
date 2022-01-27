import React from "react";

export default function App() {
  return (
    <div className="App">
      <FirstComponent content1="Who needs me?" />
    </div>
  );
}
// content1 prop is passed to FirstComponent and content1 is also used as parameter in FirstComponent in the root component (App)

function FirstComponent({ content1 }) {
  return (
    <div>
      <h3>I am the first component</h3>
      <SecondComponent content2={content1} />
    </div>
  );
}

function SecondComponent({ content2 }) {
  return (
    <div>
      <h3>I am the second component</h3>
      <ThirdComponent content3={content2} />
    </div>
  );
}

function ThirdComponent({ content3 }) {
  return (
    <div>
      <h3>I am the third component</h3>
      <ComponentNeedingProps content4={content3} />
    </div>
  );
}

function ComponentNeedingProps({ content4 }) {
  return <h3>{content4}</h3>;
}