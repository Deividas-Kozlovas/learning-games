import GameSelection from "../../components/gameComponents/gameSelectionComponent/GameSelectionComponent";
import numbersButton from "../../assets/images/buttons/numbers-button.jpeg";
import lettersButton from "../../assets/images/buttons/letters-button.jpeg";
import colorsButton from "../../assets/images/buttons/colors-button.jpeg";
import wordsButton from "../../assets/images/buttons/words-button.jpeg";
import confettiImage from "../../assets/images/background/confetti-doodles.svg";

const games = [
  {
    path: "/reasti-sakaiciu",
    image: numbersButton,
    altText: "Žaidimai su skaičiais, lavinantys matematinius įgūdžius",
    text: "Žaidimai su skaičiais",
    styleClass: "select-game__text--numbers-games",
  },
  {
    path: "/reasti-raide",
    image: lettersButton,
    altText: "Žaidimai su raidėm, lavinantys kalbos įgūdžius",
    text: "Žaidimai su raidėm",
    styleClass: "select-game__text--letters-games",
  },
  {
    path: "/reasti-spalvas",
    image: colorsButton,
    altText: "Žaidimai su spalvom",
    text: "Žaidimai su spalvom",
    styleClass: "select-game__text--colors-games",
  },
  {
    path: "/reasti-daigta-pagal-nuotrauka",
    image: wordsButton,
    altText: "Žaidimai su žodžiais",
    text: "Žaidimai su žodžiais",
    styleClass: "select-game__text--word-games",
  },
];

const HomePage = () => {
  return <GameSelection games={games} backgroundImage={confettiImage} />;
};

export default HomePage;
