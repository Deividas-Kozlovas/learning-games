import React from "react";
import wrong from "../../Images/wrong.svg";
import correct from "../../Images/correct.svg";

interface FeedbackMessageComponentProps {
  isCorrect: boolean | null;
}

const FeedbackMessageComponent = ({
  isCorrect,
}: FeedbackMessageComponentProps) => {
  return (
    <div className="feedback-message">
      {isCorrect === true && (
        <img className="feedback-message__corect" src={correct} alt="correct" />
      )}
      {isCorrect === false && (
        <img className="feedback-message__wrong" src={wrong} alt="wrong" />
      )}
    </div>
  );
};

export default FeedbackMessageComponent;
