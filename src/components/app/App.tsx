import React from 'react';
import './App.css';
import Question from '../question/Question';
import Progress from '../progress/Progress';
import Result from '../result/Result';
import ProgressBar from '../progress-bar/ProgressBar';

type QuestionData = {
  header: string;
  propositionLabels: string[];
  multipleChoices: boolean;
  correctChoices: number[];
}

type AppProps = {
  questions: QuestionData[];
}

type AppState = {
  questionIndex: number;
  answers: number[];
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      questionIndex: 0,
      answers: [],
    }
  }

  submitAnswers = (answers: number[]) => {
    this.setState({ ...this.state, answers });
  }

  acknowledgeResult = () => {
    if (this.state.questionIndex < this.props.questions.length - 1) {
      this.setState({
        ...this.state,
        answers: [],
        questionIndex: this.state.questionIndex + 1,
      });
    } else {
      console.log("end");
    }
  }

  renderQuestionOrResult() {
    const questionData: QuestionData = this.props.questions[this.state.questionIndex];

    if (this.state.answers.length > 0) {
      const correct = JSON.stringify(this.state.answers) === JSON.stringify(questionData.correctChoices);
      const correctChoicesString: string = questionData.correctChoices
        .map(choiceIndex => questionData.propositionLabels[choiceIndex])
        .join(", ");
      const userChoicesString: string = this.state.answers
        .map(choiceIndex => questionData.propositionLabels[choiceIndex])
        .join(", ");
      return (
        <Result
          correct={correct}
          description={questionData.header}
          answer={userChoicesString}
          correctAnswer={correctChoicesString}
          acknowledge={this.acknowledgeResult}
        />
      );
    }

    return (
      <Question
        header={questionData.header}
        propositionLabels={questionData.propositionLabels}
        multipleChoices={questionData.multipleChoices}
        submitAnswers={this.submitAnswers}
      />
    );
  }

  render() {
    return (
      <div className="tpb-quizz-app">
        <ProgressBar
          current={this.state.questionIndex + 1}
          max={this.props.questions.length}
        />
        {this.renderQuestionOrResult()}
        <Progress
          current={this.state.questionIndex + 1}
          max={this.props.questions.length}
        />
      </div>
    );
  }
}

export default App;
