import React from "react";

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
    console.log(e);
  };

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
    </header>
  );
};

export default Content;
