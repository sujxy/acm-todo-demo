import { useContext, useState } from "react";
import { TodoContext } from "../context/todoContext";

const CreateWidget = () => {
  const [newTodo, setNewTodo] = useState("");
  const { addTodo, todos } = useContext(TodoContext);

  const handleClick = () => {
    const todo = {
      id: todos[todos.length - 1].id + 1,
      title: newTodo,
      description: "some long description",
    };
    addTodo(todo);
    setNewTodo("");
  };

  return (
    <>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />

      <button onClick={handleClick}>Add</button>
    </>
  );
};

export default CreateWidget;
