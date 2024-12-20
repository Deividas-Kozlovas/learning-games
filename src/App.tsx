import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage.tsx";
import FindNumbersUpToTen from "./pages/games/numberGames/FindNumbersUpToTen/FindNumbersUpToTen.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/find-numbers-up-to-ten"
          element={<FindNumbersUpToTen />}
        />
      </Routes>
    </Router>
  );
}

export default App;
