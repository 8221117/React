import React from "react";
const Footer = () => {
  const year = new Date();
  return (
    <>
      <footer>CopyRight &copy; {year.getFullYear()}</footer>
      {/* <h1>i am from Footer component</h1> */}
    </>
  );
};

export default Footer;
