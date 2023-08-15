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

  return (
    <header>
      <h1>i am from content component</h1>
      <p> Let's {HandleNamechange()} Love</p>

      <button onClick={HandleClick}>Please click here</button>
    </header>
  );
};

export default Content;
