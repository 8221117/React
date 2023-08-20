import React from "react";

import { FaTrashAlt, FaEdit } from "react-icons/fa";

const Itemslist = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <li className="item" key={item.id}>
          <input
            type="checkbox"
            onChange={() => handleCheck(item.id)}
            checked={item.checked}
          ></input>
          <label
            style={item.checked ? { textDecoration: "line-through" } : null}
            onDoubleClick={() => handleCheck(item.id)}
          >
            {item.item}
          </label>
          <FaTrashAlt
            role="button"
            tabIndex="0"
            onClick={() => handleDelete(item.id)}
          ></FaTrashAlt>
          <FaEdit role="button" tabIndex="0" />
        </li>
      ))}
    </ul>
  );
};

export default Itemslist;
