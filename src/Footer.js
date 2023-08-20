import React from "react";
const Footer = ({ length }) => {
  /* const year = new Date(); */
  return (
    <>
      {/* <footer>CopyRight &copy; {year.getFullYear()}</footer> */}
      <footer>
        {length} List {length === 1 ? "item" : "items"}
      </footer>
      {/* <h1>i am from Footer component</h1> */}
    </>
  );
};

export default Footer;
