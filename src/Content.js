import React from "react";
import { useState } from "react";

const Content = () => {
  function HandleNamechange() {
    const names = ["earn", "grow", "give"];
    const matchNames = Math.floor(Math.random() * 3);
    return names[matchNames];
  }

  const HandleClick = () => {
    console.log("have a happy day");
  };

  const HandleClickParam = (name) => {
    console.log(`have a happy day ${name}`);
  };

  const toCheckevent = (e) => {
    console.log(e.target);
    console.log(e.target.innerText);
  };

  const [count, setCount] = useState(1);

  const [name, setName] = useState(() => Name());

  function incrementFunction() {
    setCount((prevCount) => {
      return prevCount + 1;
    });
    setCount((count) => {
      return count + 1;
    });
    setCount((count) => {
      return count + 1;
    }); /* corrected version of function to increment by three Times */
  }

  function decrementFunction() {
    setCount(count - 1);
  }

  function Name() {
    return console.log(
      "this is right way . This functions is called only once when the page reloads"
    );
  }

  return (
    <header>
      <h1>i am from content component</h1>
      <p> Let's {HandleNamechange()} Love</p>
      <button onClick={HandleClick}>Please click here</button>
      <button onClick={() => HandleClickParam("kutty")}>
        Please click here too
      </button>

      {/* here we are using anonymous function to give the parameter so that
      function executes only when we click */}

      <button onClick={(e) => toCheckevent(e)}>subscribe</button>
      {/*  here we use event.target to check which element was clicked  */}

      <button onDoubleClick={() => HandleClickParam("nandhu")}>
        Double Click this Button
      </button>
      <br />
      <button onClick={decrementFunction}>-</button>
      <span>{count}</span>
      <button onClick={incrementFunction}>+</button>
    </header>
  );
};

export default Content;
