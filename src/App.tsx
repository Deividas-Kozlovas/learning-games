import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import FindNumberByWord from "./pages/games/numberGames/findNumberByWord/FindNumberByWord";
import FindAlphabetLetters from "./pages/games/lettersGames/findAlphabetLetters/FindAlphabetLetters";
import FindColorByWord from "./pages/games/colorGames/findColorByWord/FindColorByWord";
import { CardGameProvider } from "./context/CardGameContext";
import "bootstrap/dist/css/bootstrap.min.css";
import FindBathroomItemsByWord from "./pages/games/findImageByWord/FindBathroomItemsByWord/FindBathroomItemsByWord";

function App() {
  return (
    <CardGameProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/find-number-by-word" element={<FindNumberByWord />} />
          <Route
            path="/find-alphabet-letters"
            element={<FindAlphabetLetters />}
          />
          <Route path="/reasti-spalvas" element={<FindColorByWord />} />
          <Route
            path="/rask-vonios-reikmenys"
            element={<FindBathroomItemsByWord />}
          />
        </Routes>
      </Router>
    </CardGameProvider>
  );
}

export default App;
