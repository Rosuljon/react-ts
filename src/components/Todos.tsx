import Todo from "../modals/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
type todosProps = {
  items: Todo[];
};

export const Todos = (props: todosProps) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};
