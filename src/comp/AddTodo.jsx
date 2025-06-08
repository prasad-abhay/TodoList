import React, { useState } from "react";

export default function AddTodo({ addTodo }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert(" Title or desciption cannot be blank");
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div >
      <h1 className="todo-form">Todo List</h1>        
        <div>
           <form onSubmit= {submit}className="todo-form">

           <input type="text" name="title"  value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            placeholder="Add Title" />

           <input type="text"
            className="form-control"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            id="desc"
            placeholder="Add Description" />

           <button type="submit" className="btn btn-primary">Add Todo</button>
           </form>
        </div>
    </div>
  );
}
