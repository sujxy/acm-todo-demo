import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const url =
  "https://worker-silent-rice-13ca.devsujay.workers.dev/api/todos?id=";

function TodoPage() {
  const params = useParams();
  const todoId = params.id;
  // const [todoData, setTodoData] = useState(null);

  // useEffect(() => {
  //   const fetchTodo = async () => {
  //     const { data } = await axios.get(
  //       `https://worker-silent-rice-13ca.devsujay.workers.dev/api/todos?id=${todoId - 1}`,
  //     );
  //     console.log(data);
  //     if (data.data) {
  //       setTodoData(data.data);
  //     }
  //   };

  //   fetchTodo();
  // }, [todoId]);

  return <div>todo {todoId}</div>;
}

export default TodoPage;
