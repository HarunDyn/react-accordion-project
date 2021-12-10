import React from "react";
import Questions from "./Components/Questions";
import Data from "./Data";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Questions and Answers About Login</h2>
      {Data.map((item) => (
        <Questions key={item.id} {...item} />
      ))}
    </div>
  );
}

export default App;
