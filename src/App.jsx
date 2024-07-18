import { useState } from "react";
import "./App.css";
import CreateWidget from "./components/createWidget";
import TodoList from "./components/todoList";

import { Route, Routes } from "react-router-dom";
import TodoPage from "./components/todoPage";

function App() {
  return (
    <div id="wrapper">
      <h1 className="text-ele">Todos</h1>
      <CreateWidget />

      <Routes>
        <Route path={"/"} element={<TodoList />} />
        <Route path={"/todo/:id"} element={<TodoPage />} />
      </Routes>
    </div>
  );
}

export default App;
