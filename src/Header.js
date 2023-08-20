import React from "react";
const Header = () => {
  const headerStyle = { backgroundColor: "violet", color: "white" };
  return (
    <header style={headerStyle}>
      {/* <header style={{ backgroundColor: "violet", color: "white" }}> */}
      {/* <h1>i am from header component</h1> */}
      <h1>TO DO LIST</h1>
    </header>
  );
};

export default Header;
