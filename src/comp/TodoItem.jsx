export default function TodoItem({ todo,onDelete }) {
  return (
    <div className="todoitem">
      <h4>{todo.sno}.</h4>
      <h5>{todo.title}</h5>
      <button className="btn btn-sm btn-danger" onClick={()=>onDelete(todo)}>Delete</button>
    </div>
  );
}
