import React, { useEffect } from "react";
import wrong from "../../images/wrong.svg";
import correct from "../../images/correct.svg";
import "./FeedbackMessageComponentStyles.scss";

interface FeedbackMessageComponentProps {
  isCorrect: boolean | null;
  setIsCorrect: (value: boolean | null) => void;
}

const FeedbackMessageComponent = ({
  isCorrect,
  setIsCorrect,
}: FeedbackMessageComponentProps) => {
  useEffect(() => {
    if (isCorrect !== null) {
      const timer = setTimeout(() => {
        setIsCorrect(null);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isCorrect, setIsCorrect]);

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
