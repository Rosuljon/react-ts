import classes from "./TodoItem.module.css";
const TodoItem = (props: { text: string; removeTodo: () => void }) => {
  return (
    <li onClick={props.removeTodo} className={classes.item}>
      {props.text}
    </li>
  );
};

export default TodoItem;
