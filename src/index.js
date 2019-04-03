import React from "react";
import ReactDOM from "react-dom";

import Button from "./Button";
import ButtonList from "./ButtonList";
import "./styles.css";

function App() {
  return (
    <div>
      <ul>
        <li>When you click the button below, it should add a button.</li>
        <li>When you click a button, it should update it's click count</li>
        <li>
          The button should change colors, from green to red as it's click count
          increases
        </li>
        <br />
      </ul>
      <div className="App">
        <ButtonList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
