import Todo from "../modals/todo";
import TodoItem from "./TodoItem";
type todosProps = {
  items: Todo[];
  children?: React.ReactNode;
};

export const Todos = (props: todosProps) => {
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <TodoItem key={item.id} text={item.text} />
        ))}
      </ul>
      {props.children}
    </div>
  );
};
