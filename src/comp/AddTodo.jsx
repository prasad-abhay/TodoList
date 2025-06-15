import React, { useState } from "react";

export default function AddTodo({ addTodo }) {
  const [title, setTitle] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title) {
      alert(" Title cannot be blank !");
    } else {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <div >
      <h1 className="todo-form">Todo List</h1>        
        <div>
           <form onSubmit= {submit}className="todo-form">

           <input type="text" className="form-control" name="title"  value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            placeholder="Add your Todo..." />

           <button type="submit" className="btn btn-primary">Add</button>
           </form>
        </div>
    </div>
  );
}
