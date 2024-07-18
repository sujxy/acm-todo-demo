import { useState } from "react";
import "./App.css";
import CreateWidget from "./components/createWidget";
import TodoList from "./components/todoList";
import axios from "axios";
import { useEffect } from "react";

const url = "https://worker-silent-rice-13ca.devsujay.workers.dev/api/todos";

function App() {
  //todo data()
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
    <div id="wrapper">
      <h1 className="text-ele">Todos</h1>
      <CreateWidget addTodo={addTodo} />
      <TodoList todoData={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
