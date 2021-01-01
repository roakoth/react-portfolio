import React, { useState } from "react";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import "./App.css";
import Contact from "./Contact";
import Goal from "./Goal";
import GoalForm from "./GoalForm";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
    },
    {
      text: "Write a technical project with React",
    },
    {
      text: "Build really cool todo app with React",
    },
  ]);

  const addGoal = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const removeGoal = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1> My Portfolio </h1>
      <Portfolio />
      <Blog />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Goal key={index} index={index} todo={todo} removeGoal={removeGoal} />
        ))}
        <GoalForm addGoal={addGoal} />
      </div>
      <Contact />
    </div>
  );
}

export default App;
