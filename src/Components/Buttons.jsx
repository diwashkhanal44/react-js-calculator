import React from "react";

class Buttons extends React.Component {
  handleChange = (e) => {
    this.props.buttonClicked(e.target.name);
  };
  render() {
    return (
      <div className="button">
        <button name="7" onClick={this.handleChange}>
          7
        </button>
        <button name="8" onClick={this.handleChange}>
          8
        </button>
        <button name="9" onClick={this.handleChange}>
          9
        </button>
        <button name="/" onClick={this.handleChange}>
          /
        </button>

        <button name="4" onClick={this.handleChange}>
          4
        </button>
        <button name="5" onClick={this.handleChange}>
          5
        </button>
        <button name="6" onClick={this.handleChange}>
          6
        </button>
        <button name="*" onClick={this.handleChange}>
          *
        </button>

        <button name="1" onClick={this.handleChange}>
          1
        </button>
        <button name="2" onClick={this.handleChange}>
          2
        </button>
        <button name="3" onClick={this.handleChange}>
          3
        </button>
        <button name="+" onClick={this.handleChange}>
          +
        </button>

        <button name="c" onClick={this.handleChange}>
          c
        </button>
        <button name="0" onClick={this.handleChange}>
          0
        </button>
        <button name="=" onClick={this.handleChange}>
          =
        </button>
        <button name="-" onClick={this.handleChange}>
          -
        </button>
      </div>
    );
  }
}

export default Buttons;
