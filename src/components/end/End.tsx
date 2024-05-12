import React from "react";
import "./End.css";

type EndProps = {};

type EndState = {
  ready: boolean;
};

class End extends React.Component<EndProps, EndState> {
  constructor(props: EndProps) {
    super(props);
    this.state = {
      ready: false,
    };
  }

  onIFrameLoad = () => {
    this.setState({ ...this.state, ready: true });
  };

  render() {
    return (
      <>
        <iframe
          className="tpb-quizz-end"
          src="https://borderattitude.fr/final-quiz-tpb"
          title="final-quizz-tpb"
          height="100%"
          width="100%"
          onLoad={this.onIFrameLoad}
        />
        {!this.state.ready && (
          <div className="tpb-quizz-end-loader-container">
            <div className="tpb-quizz-end-loader" />
          </div>
        )}
      </>
    );
  }
}

export default End;
