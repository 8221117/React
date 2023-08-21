import React from "react";

import Itemslist from "./List";

const Content = ({ items, handleCheck, handleDelete }) => {
  /* const [items, setItems] = useState([
    { id: 1, checked: true, item: "Practice coding" },
    { id: 2, checked: false, item: "Play Cricket" },
    { id: 3, checked: false, item: "Sing a song" },
  ]);

  /*   const numbers = [-2, -1, 0, 1, 2];
  const itemss = numbers.filter((n) => n >= 0).map((n) => ({ number: n }));
  console.log(itemss); */

  /* const handleCheck = (id) => {
    /*  console.log(`id: ${id}`); */
  /* const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  }; */

  return (
    <>
      {items.length ? (
        <Itemslist
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "8rem" }}>Your LIST is EMPTY</p>
      )}
    </>
  );
};
export default Content;
