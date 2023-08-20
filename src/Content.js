import React from "react";
import { useState } from "react";

const Content = () => {
  const [items, setItems] = useState([
    { id: 1, checked: true, item: "Practice coding" },
    { id: 2, checked: true, item: "Play Cricket" },
    { id: 3, checked: true, item: "Sing a song" },
  ]);

  /*   const numbers = [-2, -1, 0, 1, 2];
  const itemss = numbers.filter((n) => n >= 0).map((n) => ({ number: n }));
  console.log(itemss); */

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li>
            <input type="checkbox" checked={item.checked}></input>
            <label>{item.item}</label>
            <button>Delete</button>
            <button>Edit</button>
          </li>
        ))}
      </ul>
    </main>
  );
};
export default Content;
