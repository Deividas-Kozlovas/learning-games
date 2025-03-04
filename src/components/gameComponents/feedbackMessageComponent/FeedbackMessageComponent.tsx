import wrong from "../../../assets/images/icons/wrong.svg";
import correct from "../../../assets/images/icons/correct.svg";
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
