import React from 'react';
import './ProgressBar.css';

function ProgressBar({ current, max }: { current: number, max: number }) {
  return (
    <div className="tpb-quizz-progress-bar" style={{ width: `${current / max * 100}%` }} data-testid="progress-bar"/>
  );
}

export default ProgressBar;
