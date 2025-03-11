import { useRef } from "react";
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
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
