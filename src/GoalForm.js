import React, { useState } from "react";
import "./App.css";

function GoalForm({ addGoal }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addGoal(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add a goal"
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

export default GoalForm;
