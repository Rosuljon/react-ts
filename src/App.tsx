import "./App.css";
import { Todos } from "./components/Todos";

function App() {
  return (
    <div>
      <Todos items={["learn react", "learn typescript"]}>
        <p>This is additional content inside Todos.</p>
      </Todos>
    </div>
  );
}

export default App;
