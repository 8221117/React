import React from "react";
const Header = ({ title }) => {
  const headerStyle = { backgroundColor: "violet", color: "white" };
  return (
    <header style={headerStyle}>
      {/* <header style={{ backgroundColor: "violet", color: "white" }}> */}
      {/* <h1>i am from header component</h1> */}
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = { title: "TO DO LIST" };

export default Header;
