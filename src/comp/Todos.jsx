import TodoItem from "./TodoItem";

export default function Todos(props) {
  return (
    <div className="todo">
      <h3>Todo Items</h3>
      {
      props.todos.length===0? "No Todos to display" :
      props.todos.map((todo) => {
        return (<>
        <hr />
        <TodoItem todo={todo} key={todo.sno} onDelete = {props.onDelete}></TodoItem>
        </>
        )
      })}
    </div>
  );
}