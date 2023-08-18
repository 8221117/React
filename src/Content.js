import React from "react";
import { useState } from "react";

const Content = () => {
  function HandleNamechange2() {
    const names = ["earn", "grow", "give"];
    const matchNames = Math.floor(Math.random() * 3);
    setRandomName(names[matchNames]);
  }

  const [randomName, setRandomName] = useState("Earn");

  return (
    <header>
      <p> Let's {randomName} Money</p>
      <button onClick={HandleNamechange2}>Click Here</button>
    </header>
  );
};
export default Content;
