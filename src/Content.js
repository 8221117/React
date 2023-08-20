import React from "react";
import { useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const Content = () => {
  const [items, setItems] = useState([
    { id: 1, checked: true, item: "Practice coding" },
    { id: 2, checked: false, item: "Play Cricket" },
    { id: 3, checked: false, item: "Sing a song" },
  ]);

  /*   const numbers = [-2, -1, 0, 1, 2];
  const itemss = numbers.filter((n) => n >= 0).map((n) => ({ number: n }));
  console.log(itemss); */

  const handleCheck = (id) => {
    /*  console.log(`id: ${id}`); */
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  };

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
            ></input>
            <label
              style={item.checked ? { textDecoration: "line-through" } : null}
              onDoubleClick={() => handleCheck(item.id)}
            >
              {item.item}
            </label>
            <FaTrashAlt
              role="button"
              tabIndex="0"
              onClick={() => handleDelete(item.id)}
            ></FaTrashAlt>
            <FaEdit role="button" tabIndex="0" />
          </li>
        ))}
      </ul>
    </main>
  );
};
export default Content;
