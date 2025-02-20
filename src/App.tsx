import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import FindNumberByWord from "./pages/games/numberGames/findNumberByWord/FindNumberByWord";
import FindAlphabetLetters from "./pages/games/lettersGames/findAlphabetLetters/FindAlphabetLetters";
import FindColorByWord from "./pages/games/colorGames/findColorByWord/FindColorByWord";
import { CardGameProvider } from "./context/CardGameContext";
import "bootstrap/dist/css/bootstrap.min.css";
import FindImageByWord from "./pages/games/findImageByWord/FindImageByWord";
import { bathroomItems } from "./pages/games/findImageByWord/FindBathroomItemsByWordData";
import FindImageByWordPage from "./pages/games/findImageByWord/FindImageByWordPage";

function App() {
  return (
    <CardGameProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reasti-sakaiciu" element={<FindNumberByWord />} />
          <Route path="/reasti-raide" element={<FindAlphabetLetters />} />
          <Route path="/reasti-spalvas" element={<FindColorByWord />} />
          <Route
            path="/reasti-vonios-reikmenys"
            element={<FindImageByWord findItemsByWords={bathroomItems} />}
          />
          <Route
            path="reasti-daigta-pagal-nuotrauka"
            element={<FindImageByWordPage />}
          />
        </Routes>
      </Router>
    </CardGameProvider>
  );
}

export default App;
