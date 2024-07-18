import TodoItem from "./todoItem";

const TodoList = ({ todoData, deleteTodo }) => {
  return (
    <div>
      {todoData?.map((todo, index) => {
        return (
          <TodoItem
            key={index}
            element={todo.title}
            id={index}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
