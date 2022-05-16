import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ text, complete, onClick }) => {
  return (

    <div className="item">
    <li
      onClick={onClick}
      style={{ textDecoration: complete ? "line-through" : "none" }}
    >
      {text}
    </li>
    <span>
    <FontAwesomeIcon icon={faTrash} />
    </span>
    </div>
  );
};

export default Todo;
