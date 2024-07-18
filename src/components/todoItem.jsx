const TodoItem = ({ id, element, deleteTodo }) => {
  return (
    <div className="todo-item">
      <button className="del-btn" onClick={() => deleteTodo(id)}>
        -
      </button>
      <span> {element} </span>
    </div>
  );
};

export default TodoItem;
