import React from "react";

import { FaTrashAlt, FaEdit } from "react-icons/fa";

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item">
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
        aria-label={`Delete ${item.id}`}
      ></FaTrashAlt>
      <FaEdit role="button" tabIndex="0" aria-label={`Edit ${item.id}`} />
    </li>
  );
};

export default LineItem;
