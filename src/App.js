import "./App.css";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const name = "nandhu";

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
    <div className="App">
      <div className="App-header">
        {/* <p>{name}</p> */}
        {/* <p>normal text</p> */}
        {/* <p>{"kutty"}</p>
        <p>{[1, 2, 3, 4]}</p>
        <p>{1 === 1}</p> */}
        {/* <Header title="TO DO LIST BY NANDHU"/> */}
        <Header />
        <Content
          items={items}
          setItems={setItems}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
