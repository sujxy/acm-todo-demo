import { useState } from "react";

const CreateWidget = (props) => {
  const [newTodo, setNewTodo] = useState("");

  const handleClick = () => {
    props.addTodo(newTodo);
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
