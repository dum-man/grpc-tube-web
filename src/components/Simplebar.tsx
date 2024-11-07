// App.js
import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import "../App.css"; // подключим кастомные стили

const App = () => {
  return (
    <div className="App">
      <h1>Custom Scrollbar Example</h1>
      <SimpleBar style={{ maxHeight: 300 }} autoHide={false}>
        <div>
          {/* Контент, который будет скроллиться */}
          {Array.from({ length: 30 }, (_, i) => (
            <p key={i}>This is item #{i + 1}</p>
          ))}
        </div>
      </SimpleBar>
    </div>
  );
};

export default App;
