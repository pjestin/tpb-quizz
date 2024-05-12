import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Result from './Result';

test('renders correct result', () => {
  render(
    <Result
      correct={true}
      description="result-description"
      answer="user-answer"
      acknowledge={() => {}}
    />
  );

  const resultElement = screen.getByTestId("result");
  expect(resultElement).toHaveClass("tpb-quizz-result correct");
  const headerElement = screen.getByTestId("header");
  expect(headerElement).toHaveTextContent("Correct");
  const descriptionElement = screen.getByTestId("description");
  expect(descriptionElement).toHaveTextContent("result-description");
  const userAnswerElement = screen.getByTestId("user-answer");
  expect(userAnswerElement).toHaveTextContent("TA RÉPONSE: user-answer");
  const correctAnswerElement = screen.queryByTestId("correct-answer");
  expect(correctAnswerElement).not.toBeInTheDocument();
  const acknowledgeButtonElement = screen.getByTestId("acknowledge-button");
  expect(acknowledgeButtonElement).toHaveTextContent("Suivant");
});

test('renders incorrect result', () => {
  render(
    <Result
      correct={false}
      description="result-description"
      answer="user-answer"
      correctAnswer="correct-answer"
      acknowledge={() => {}}
    />
  );

  const resultElement = screen.getByTestId("result");
  expect(resultElement).toHaveClass("tpb-quizz-result incorrect");
  const headerElement = screen.getByTestId("header");
  expect(headerElement).toHaveTextContent("Incorrect");
  const descriptionElement = screen.getByTestId("description");
  expect(descriptionElement).toHaveTextContent("result-description");
  const userAnswerElement = screen.getByTestId("user-answer");
  expect(userAnswerElement).toHaveTextContent("TA RÉPONSE: user-answer");
  const correctAnswerElement = screen.getByTestId("correct-answer");
  expect(correctAnswerElement).toHaveTextContent("LA BONNE RÉPONSE: correct-answer");
  const acknowledgeButtonElement = screen.getByTestId("acknowledge-button");
  expect(acknowledgeButtonElement).toHaveTextContent("Suivant");
});

test('executes acknowledge function when acknowledge button is clicked', () => {
  const acknowledgeMock = jest.fn();

  render(
    <Result
      correct={false}
      description="result-description"
      answer="user-answer"
      correctAnswer="correct-answer"
      acknowledge={acknowledgeMock}
    />
  );

  const acknowledgeButtonElement = screen.getByTestId("acknowledge-button");
  fireEvent.click(acknowledgeButtonElement);
  expect(acknowledgeMock).toHaveBeenCalled();
});
