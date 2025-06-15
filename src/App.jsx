import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./comp/Navbar";
import Footer from "./comp/Footer";
import Todos from "./comp/Todos";
import AddTodo from "./comp/AddTodo";
import About from "./comp/About";

function App() {
  const initTodo = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(initTodo);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e.id !== todo.id));
  };

  const addTodo = (title) => {
    const myTodo = {
       id: Date.now(),
      title: title,
    };
    setTodos([...todos, myTodo]);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route
          path="/"
          element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={filteredTodos} onDelete={onDelete} />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
