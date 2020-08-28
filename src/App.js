import React from "react";
import "./styles.css";

const Dropdown = React.forwardRef(({ children }, ref) => {
  const printSomething = () => {
    console.log("mi funcion del dropdown!!!!!!!!");
  };
  React.useImperativeHandle(ref, () => ({
    printSomething: printSomething
  }));

  return children;
});

const Currency = () => {
  const dropdownRef = React.useRef();

  return (
    <div>
      <Dropdown ref={dropdownRef}>
        <button onClick={() => dropdownRef.current.printSomething()}>
          Click
        </button>
      </Dropdown>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Currency />
    </div>
  );
}
