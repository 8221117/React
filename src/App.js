import "./App.css";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const name = "nandhu";
  return (
    <div className="App">
      <div className="App-header">
        {/* <p>{name}</p> */}
        {/* <p>normal text</p> */}
        {/* <p>{"kutty"}</p>
        <p>{[1, 2, 3, 4]}</p>
        <p>{1 === 1}</p> */}
        <Header title="TO DO LIST BY NANDHU" />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
