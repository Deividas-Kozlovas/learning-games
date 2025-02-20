import GameSelection from "../../../components/gameComponents/gameSelectionComponent/GameSelectionComponent";
import bathroomButton from "../../../assets/images/buttons/bathroom-button.jpg";
import confettiImage from "../../../assets/images/background/confetti-doodles.svg";

const games = [
  {
    path: "/reasti-vonios-reikmenys",
    image: bathroomButton,
    altText: "Vonia",
    text: "Rask vonios daiktus",
    styleClass: "select-game__text--numbers-games",
  },
];

const FindImageByWordPage = () => {
  return <GameSelection games={games} backgroundImage={confettiImage} />;
};

export default FindImageByWordPage;
