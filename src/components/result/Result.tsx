import React from "react";
import "./Result.css";

type ResultProps = {
  correct: boolean;
  description: string;
  answer: string;
  correctAnswer?: string;
  acknowledge: () => void;
};

function Result({
  correct,
  description,
  answer,
  correctAnswer,
  acknowledge,
}: ResultProps) {
  const correctClass = correct ? "correct" : "incorrect";
  const header = correct ? "Correct" : "Incorrect";
  const icon = correct ? (
    <svg
      viewBox="0 0 58 58"
      width="58"
      height="58"
      className="tpb-quizz-result-icon"
    >
      <g>
        <path
          fill="#ffffff"
          d="M44.7,21.7c0,0.5-0.2,1-0.6,1.4L29.5,37.7l-2.7,2.7c-0.4,0.4-0.8,0.6-1.4,0.6c-0.5,0-1-0.2-1.4-0.6l-2.7-2.7l-7.3-7.3c-0.4-0.4-0.6-0.8-0.6-1.4s0.2-1,0.6-1.4l2.7-2.7c0.4-0.4,0.8-0.6,1.4-0.6c0.5,0,1,0.2,1.4,0.6l5.9,6l13.2-13.3C39,17.2,39.4,17,40,17c0.5,0,1,0.2,1.4,0.6l2.7,2.7C44.5,20.7,44.7,21.1,44.7,21.7z"
        ></path>
      </g>
    </svg>
  ) : (
    <svg
      viewBox="0 0 58 58"
      width="58"
      height="58"
      className="tpb-quizz-result-icon"
    >
      <g>
        <path
          fill="#ffffff"
          d="M43.3,37.7c0,0.6-0.2,1.2-0.7,1.6l-3.3,3.3c-0.4,0.4-1,0.7-1.6,0.7c-0.6,0-1.2-0.2-1.6-0.7L29,35.5l-7.1,7.1c-0.4,0.4-1,0.7-1.6,0.7s-1.2-0.2-1.6-0.7l-3.3-3.3c-0.5-0.4-0.7-1-0.7-1.6c0-0.6,0.2-1.2,0.7-1.6l7.1-7.1l-7.1-7.1c-0.5-0.4-0.7-1-0.7-1.6s0.2-1.2,0.7-1.6l3.3-3.3c0.4-0.4,1-0.7,1.6-0.7s1.2,0.2,1.6,0.7l7.1,7.1l7.1-7.1c0.4-0.4,1-0.7,1.6-0.7c0.6,0,1.2,0.2,1.6,0.7l3.3,3.3c0.4,0.5,0.7,1,0.7,1.6s-0.2,1.2-0.7,1.6L35.5,29l7.1,7.1C43.1,36.5,43.3,37.1,43.3,37.7z"
        ></path>
      </g>
    </svg>
  );

  return (
    <div className={`tpb-quizz-result ${correctClass}`} data-testid="result">
      {icon}
      <h1 className="tpb-quizz-result-header" data-testid="header">
        {header}
      </h1>
      <p className="tpb-quizz-result-description" data-testid="description">
        {description}
      </p>
      <p className="tpb-quizz-result-hint" data-testid="user-answer">
        <span className="emphasized">TA RÉPONSE:</span> {answer}
      </p>
      {correctAnswer && (
        <p className="tpb-quizz-result-hint" data-testid="correct-answer">
          <span className="emphasized">LA BONNE RÉPONSE:</span> {correctAnswer}
        </p>
      )}
      <button
        className="tpb-quizz-result-next-button"
        onClick={acknowledge}
        data-testid="acknowledge-button"
      >
        Suivant
      </button>
    </div>
  );
}

export default Result;
