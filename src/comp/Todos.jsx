import TodoItem from "./TodoItem";

export default function Todos(props) {
  return (
    <div className="todo">
      <h3>My Todo Items</h3>
      {
        props.todos.length === 0 ? "No Todos to display!" :
        props.todos.map((todo, index) => {
          return (
            <div key={todo.id}>
              <hr />
              <TodoItem
                todo={{ ...todo, sno: index + 1 }}
                onDelete={props.onDelete}
              />
            </div>
          );
        })
      }
    </div>
  );
}
