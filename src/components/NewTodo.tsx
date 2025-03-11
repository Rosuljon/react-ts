import { useRef } from "react";
import classes from "./NewTodo.module.css";
const NewTodo = (props: { onAddTodo: (text: string) => void }) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const todoText = todoTextInputRef.current!.value;
    if (todoText.trim().length === 0) {
      return;
    }
    props.onAddTodo(todoText);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
