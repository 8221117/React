import "./App.css";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import ItemAdd from "./AddItem";
import ItemSearch from "./SearchItem";

function App() {
  const name = "nandhu";
  const API_URL = "http://localhost:3500/itemss";

  const [items, setItems] = useState(
    /*  JSON.parse(localStorage.getItem("todo_list")) || [] */ []
  );
  /* [
    { id: 1, checked: true, item: "Practice coding" },
    { id: 2, checked: false, item: "Play Cricket" },
    { id: 3, checked: false, item: "Sing a song" },
  ] */

  /* 
  console.log("before effect"); */

  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        console.log(response);
        if (!response.ok) throw Error("Data not received");
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        /*  console.log(err.stack); */
        setFetchError(err.message);
      }
    };
    (async () => await fetchItems())();
  }, []);

  /*   console.log("after effect"); */

  /*   const numbers = [-2, -1, 0, 1, 2];
  const itemss = numbers.filter((n) => n >= 0).map((n) => ({ number: n }));
  console.log(itemss); */

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const listItems = [...items, addNewItem];
    setItems(listItems);
    /* localStorage.setItem("todo_list", JSON.stringify(listItems)); */
  };

  const handleCheck = (id) => {
    /*  console.log(`id: ${id}`); */
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    /* localStorage.setItem("todo_list", JSON.stringify(listItems)); */
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    /* localStorage.setItem("todo_list", JSON.stringify(listItems)); */
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;

    console.log(newItem);
    addItem(newItem);
    setNewItem("");
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
        <ItemAdd
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <ItemSearch search={search} setSearch={setSearch} />
        <Content
          items={items.filter((item) =>
            item.item.toLowerCase().includes(search.toLowerCase())
          )}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        <Footer length={items.length} />
      </div>
    </div>
  );
}

export default App;
