import wrong from "../../../assets/images/wrong.svg";
import correct from "../../../assets/images/correct.svg";
import "./FeedbackMessageComponentStyles.scss";

interface FeedbackMessageComponentProps {
  isCorrect: boolean | null;
}

const FeedbackMessageComponent = ({
  isCorrect,
}: FeedbackMessageComponentProps) => {
  return (
    <div className="feedback-message">
      {isCorrect === true && <img src={correct} alt="correct" />}
      {isCorrect === false && (
        <img className="feedback-message__wrong" src={wrong} alt="wrong" />
      )}
    </div>
  );
};

export default FeedbackMessageComponent;
