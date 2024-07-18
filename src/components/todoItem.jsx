import { useContext } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../context/todoContext";

const TodoItem = ({ id, element }) => {
  const { deleteTodo } = useContext(TodoContext);

  return (
    <div className="todo-item">
      <button className="del-btn" onClick={() => deleteTodo(id)}>
        -
      </button>
      <Link to={`/todo/${id}`} style={{ display: "inline" }}>
        {" "}
        {element}{" "}
      </Link>
    </div>
  );
};

export default TodoItem;

// ` string ${variable} `
