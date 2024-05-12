import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Question from "./Question";

test("renders single-choice question", () => {
  render(
    <Question
      header="question-header"
      propositionLabels={["label1", "label2"]}
      multipleChoices={false}
      submitAnswers={() => {}}
    />
  );

  const questionElement = screen.getByTestId("question");
  expect(questionElement).toBeInTheDocument();
  const headerElement = screen.getByTestId("header");
  expect(headerElement).toHaveTextContent("question-header");
  const imageElement = screen.queryByTestId("image");
  expect(imageElement).not.toBeInTheDocument();
  const propositionElements = screen.getAllByTestId("proposition");
  expect(propositionElements.length).toEqual(2);
  expect(propositionElements[0]).toHaveTextContent("label1");
  expect(propositionElements[1]).toHaveTextContent("label2");
  const nextButtonElements = screen.queryByTestId("next-button");
  expect(nextButtonElements).not.toBeInTheDocument();
});

test("renders multiple-choice question", () => {
  render(
    <Question
      header="question-header"
      propositionLabels={["label1", "label2"]}
      multipleChoices={true}
      submitAnswers={() => {}}
    />
  );

  const nextButtonElement = screen.getByTestId("next-button");
  expect(nextButtonElement).toBeInTheDocument();
  expect(nextButtonElement).toHaveProperty("disabled", true);
});

test("renders image", () => {
  render(
    <Question
      header="question-header"
      imageURL="/image.png"
      propositionLabels={["label1", "label2"]}
      multipleChoices={false}
      submitAnswers={() => {}}
    />
  );

  const imageElement = screen.getByTestId("image");
  expect(imageElement).toBeInTheDocument();
});

test("executes submitAnswers function when proposition is clicked without multiple choices", () => {
  const mockSubmitAnswers = jest.fn();

  render(
    <Question
      header="question-header"
      propositionLabels={["label1", "label2"]}
      multipleChoices={false}
      submitAnswers={mockSubmitAnswers}
    />
  );

  const propositionButtonElements = screen.getAllByTestId("proposition-button");
  fireEvent.click(propositionButtonElements[0]);
  expect(mockSubmitAnswers).toHaveBeenLastCalledWith([0]);
  fireEvent.click(propositionButtonElements[1]);
  expect(mockSubmitAnswers).toHaveBeenLastCalledWith([1]);
});

test("executes submitAnswers function when next button is clicked", () => {
  const mockSubmitAnswers = jest.fn();

  render(
    <Question
      header="question-header"
      propositionLabels={["label1", "label2"]}
      multipleChoices={true}
      submitAnswers={mockSubmitAnswers}
    />
  );

  const propositionButtonElements = screen.getAllByTestId("proposition-button");
  fireEvent.click(propositionButtonElements[0]);
  expect(mockSubmitAnswers).not.toHaveBeenCalled();
  const nextButtonElement = screen.getByTestId("next-button");
  expect(nextButtonElement).toHaveProperty("disabled", false);
  fireEvent.click(nextButtonElement);
  expect(mockSubmitAnswers).toHaveBeenLastCalledWith([0]);
  fireEvent.click(propositionButtonElements[1]);
  fireEvent.click(nextButtonElement);
  expect(mockSubmitAnswers).toHaveBeenLastCalledWith([0, 1]);
  fireEvent.click(propositionButtonElements[0]);
  fireEvent.click(nextButtonElement);
  expect(mockSubmitAnswers).toHaveBeenLastCalledWith([1]);
});
