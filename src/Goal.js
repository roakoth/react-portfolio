import React from "react";
import "./App.css";

function Goal({ todo, index, removeGoal }) {
  return (
    <div className="todo">
      {todo.text}

      <div>
        <button onClick={() => removeGoal(index)}>x</button>
      </div>
    </div>
  );
}

export default Goal;
