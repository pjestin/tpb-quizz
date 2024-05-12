import React from "react";
import "./Progress.css";

function Progress({ current, max }: { current: number; max: number }) {
  return (
    <div className="tpb-quizz-progress">
      <p data-testid="progress">
        {current} / {max}
      </p>
    </div>
  );
}

export default Progress;
