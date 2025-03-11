import Todo from "../modals/todo";
type todosProps = {
  items: Todo[];
  children?: React.ReactNode;
};

export const Todos = (props: todosProps) => {
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      {props.children}
    </div>
  );
};
