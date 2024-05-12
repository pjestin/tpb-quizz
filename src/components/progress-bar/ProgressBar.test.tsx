import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressBar from './ProgressBar';

test('renders', () => {
  render(<ProgressBar current={3} max={12}/>);
  const progressBarElement = screen.getByTestId("progress-bar");
  expect(progressBarElement).toBeInTheDocument();
  expect(progressBarElement).toHaveStyle("width: 25%");
});
