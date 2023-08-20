import React from "react";
import { FaPlus } from "react-icons/fa";

const ItemAdd = () => {
  return (
    <form className="addForm">
      <label htmlFor="addItem">Add Item</label>
      <input
        type="text"
        id="addItem"
        placeholder="Please Add an Item"
        autoFocus
        required
      ></input>
      <button type="submit" aria-label="Add Item">
        <FaPlus />
      </button>
    </form>
  );
};

export default ItemAdd;
