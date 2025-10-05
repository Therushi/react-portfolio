import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Header />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

const TestComponent = () => {
  return (
    <>
      <h1>Welcome to Rushi's Portfolio</h1>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
