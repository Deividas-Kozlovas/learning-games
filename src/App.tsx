import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import FindNumberByWord from "./pages/games/numberGames/findNumberByWord/FindNumberByWord";
import FindAlphabetLetters from "./pages/games/lettersGames/findAlphabetLetters/FindAlphabetLetters";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/find-number-by-word" element={<FindNumberByWord />} />
        <Route
          path="/find-alphabet-letters"
          element={<FindAlphabetLetters />}
        />
      </Routes>
    </Router>
  );
}

export default App;
