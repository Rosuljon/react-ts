import React, { useState } from "react";
import Todo from "../modals/todo";
type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};
export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider = (props: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const onAddTodo = (text: string) => {
    setTodos([...todos, new Todo(text)]);
  };
  const removeHandler = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: onAddTodo,
    removeTodo: removeHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
