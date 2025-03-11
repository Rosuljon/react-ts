import Todo from "../modals/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
type todosProps = {
  items: Todo[];
  removeTodo: (id: string) => void;
};

export const Todos = (props: todosProps) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          removeTodo={props.removeTodo.bind(null, item.id)}
          key={item.id}
          text={item.text}
        />
      ))}
    </ul>
  );
};
