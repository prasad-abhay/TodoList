export default function TodoItem({ todo,onDelete }) {
  return (
    <div className="todoitem">
      {/* <h6>S No: {todo.sno}</h6> */}
      <h5>Title: {todo.title}</h5>
      <p>Description: {todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>onDelete(todo)}>Delete</button>
    </div>
  );
}


// Named Export  =>this also works, use import {TofoItem} from ...

// export const TodoItem = ({ todo }) => {
//   return (
//     <div>
//       <h4>serial no: {todo.sno}</h4>
//       <p>Title: {todo.title}</p>
//       <button className="btn btn-sm btn-danger">Delete</button>
//     </div>
//   );
// };
