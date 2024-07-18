import axios from "axios";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
  //todo data()
  const url = "https://worker-silent-rice-13ca.devsujay.workers.dev/api/todos";

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(url);

      setTodos(data.data);
    }

    fetchData();
  }, []);

  // add todo
  const addTodo = (newTodo) => {
    console.log("clicked");
    setTodos((prev) => {
      return [...prev, newTodo];
    });
  };

  //del todo
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i != index);
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
