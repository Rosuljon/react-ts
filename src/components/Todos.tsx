type todosProps = {
  items: string[];
  children?: React.ReactNode;
};

export const Todos = (props: todosProps) => {
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {props.children}
    </div>
  );
};
