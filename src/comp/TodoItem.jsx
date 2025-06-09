export default function TodoItem({ todo,onDelete }) {
  return (
    <div className="todoitem">
      <h5>{todo.sno}.</h5>
      <h5>{todo.title}</h5>
      <p>Description: {todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>onDelete(todo)}>Delete</button>
    </div>
  );
}
