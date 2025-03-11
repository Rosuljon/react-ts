import "./App.css";
import NewTodo from "./components/NewTodo";
import { Todos } from "./components/Todos";
import Todo from "./modals/todo";

function App() {
  const onAddTodo = (text: string) => {};
  const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];
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
