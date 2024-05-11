import React from 'react';
import './Question.css';

type QuestionProps = {
  header: string;
  propositionLabels: string[];
  multipleChoices: boolean;
  submitAnswers: (answers: number[]) => void;
};

type QuestionState = {
  propositions: {
    key: string;
    label: string;
    selected: boolean;
  }[];
}

class Question extends React.Component<QuestionProps, QuestionState> {
  constructor(props: QuestionProps) {
    super(props);

    const propositions = props.propositionLabels.map(propositionLabel => {
      const key: string = propositionLabel.replace(/\W/, "-").toLowerCase();
      return {
        key,
        label: propositionLabel,
        selected: false,
      };
    });

    this.state = { propositions };
  }

  onPropositionClick(propositionIndex: number) {
    if (this.props.multipleChoices) {
      let propositions = this.state.propositions;
      propositions[propositionIndex].selected = !propositions[propositionIndex].selected;
      this.setState({ ...this.state, propositions });
    } else {
      this.props.submitAnswers([propositionIndex])
    }
  }

  onNextButtonClick = () => {
    const propositionsWithIndices = this.state.propositions.map((proposition, index) => ({ ...proposition, index }));
    const selectedPropositions: number[] = propositionsWithIndices
      .filter(proposition => proposition.selected)
      .map(proposition => proposition.index);
    this.props.submitAnswers(selectedPropositions);
  }

  render() {
    const isNextButtonDisabled: boolean = this.state.propositions.filter(proposition => proposition.selected).length === 0;

    return (
      <div className="tpb-quizz-question">
        <h1 className="tpb-quizz-question-header">{this.props.header}</h1>
        <div className="tpb-quizz-question-propositions">
          {this.state.propositions.map((proposition, propositionIndex) => 
            <button className={`tpb-quizz-question-proposition ${proposition.selected ? "selected" : ""}`} key={proposition.key} onClick={() => this.onPropositionClick(propositionIndex)}>
              <div className="tpb-quizz-question-proposition-checkbox">
                <svg viewBox="0 0 58 58" width="30" height="100%" style={proposition.selected ? { opacity: "100%" } : { opacity: "0%" }}><g><path fill="#cb907c" d="M44.7,21.7c0,0.5-0.2,1-0.6,1.4L29.5,37.7l-2.7,2.7c-0.4,0.4-0.8,0.6-1.4,0.6c-0.5,0-1-0.2-1.4-0.6l-2.7-2.7l-7.3-7.3c-0.4-0.4-0.6-0.8-0.6-1.4s0.2-1,0.6-1.4l2.7-2.7c0.4-0.4,0.8-0.6,1.4-0.6c0.5,0,1,0.2,1.4,0.6l5.9,6l13.2-13.3C39,17.2,39.4,17,40,17c0.5,0,1,0.2,1.4,0.6l2.7,2.7C44.5,20.7,44.7,21.1,44.7,21.7z"></path></g></svg>
              </div>
              <p className="tpb-quizz-question-proposition-description">{proposition.label}</p>
            </button>
          )}
        </div>
        {this.props.multipleChoices && (
          <button className={`tpb-quizz-question-next-button ${isNextButtonDisabled ? "disabled" : ""}`} onClick={this.onNextButtonClick} disabled={isNextButtonDisabled}>Next</button>
        )}
      </div>
    );
  }
}

export default Question;
