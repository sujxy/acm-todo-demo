import { useContext } from "react";
import TodoItem from "./todoItem";
import { TodoContext } from "../context/todoContext";

const TodoList = ({ deleteTodo }) => {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      {todos?.map((todo, index) => {
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
