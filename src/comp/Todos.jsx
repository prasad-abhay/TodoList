import React from "react";
import TodoItem from "./TodoItem";

export default function Todos(props) {
  return (
    <div className="todo">
      <h2>Todo List</h2>

      {
      props.todos.length===0? "No Todos to display" :
      props.todos.map((todo) => {
        return (<>
        <TodoItem todo={todo} key={todo.sno} onDelete = {props.onDelete}></TodoItem>
        <hr />
        </>
        )
        
      })}
    </div>
  );
}

// Named Export  => this also works, use import {Todos} from ...

// export const Todos = (props) => {
//   return (
//     <div className="todo">
//       <h3>Todo List</h3>
//       <TodoItem todo={props.todos[1]} />
//     </div>
//   );
// };
