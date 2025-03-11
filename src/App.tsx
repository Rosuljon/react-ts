import { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import { Todos } from "./components/Todos";
import Todo from "./modals/todo";

function App() {
  const onAddTodo = (text: string) => {
    setTodos([...todos, new Todo(text)]);
  };
  const removeHandler = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div>
      <NewTodo onAddTodo={onAddTodo} />
      <Todos removeTodo={removeHandler} items={todos} />
    </div>
  );
}

export default App;
