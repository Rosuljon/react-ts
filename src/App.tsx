import "./App.css";
import { Todos } from "./components/Todos";
import Todo from "./modals/todo";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];
  return (
    <div>
      <Todos items={todos}>
        <p>This is additional content inside Todos.</p>
      </Todos>
    </div>
  );
}

export default App;
