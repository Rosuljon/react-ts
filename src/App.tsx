import { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import { Todos } from "./components/Todos";
import Todo from "./modals/todo";

function App() {
  const onAddTodo = (text: string) => {
    setTodos([...todos, new Todo(text)]);
  };
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div>
      <NewTodo onAddTodo={onAddTodo} />
      <Todos items={todos}>
        <p>This is additional content inside Todos.</p>
      </Todos>
    </div>
  );
}

export default App;
