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


// Named Export  =>this also works, use import {TodoItem} from ...

// export const TodoItem = ({ todo }) => {
//   return (
//     <div>
//       <h4>serial no: {todo.sno}</h4>
//       <p>Title: {todo.title}</p>
//       <button className="btn btn-sm btn-danger">Delete</button>
//     </div>
//   );
// };
