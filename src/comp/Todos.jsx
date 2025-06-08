import React from "react";
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

// Named Export  => this also works, use import {Todos} from ...

// export const Todos = (props) => {
//   return (
//     <div className="todo">
//       <h3>Todo List</h3>
//       <TodoItem todo={props.todos[1]} />
//     </div>
//   );
// };
