import React from "react";

class Screen extends React.Component {
  render() {
    return (
      <div className="result">
        <h1>{this.props.result}</h1>
      </div>
    );
  }
}
export default Screen;
