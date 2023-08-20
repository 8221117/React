import React from "react";

const ItemSearch = () => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="text"
        role="searchbox"
        placeholder="Search Item"
      ></input>
    </form>
  );
};

export default ItemSearch;
