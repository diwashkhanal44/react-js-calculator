import React from "react";
import Buttons from "./Components/Buttons.jsx";
import Screen from "./Components/Screen.jsx";
import styles from "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      result: "",
    };
  }
  buttonClicked = (buttonName) => {
    if (buttonName === "=") {
      this.calculate();
    } else if (buttonName === "c") {
      this.setState({ result: "" });
    } else {
      this.setState({ result: this.state.result + buttonName });
    }
  };
  calculate = () => {
    this.setState({ result: eval(this.state.result) });
  };
  render() {
    return (
      <div className={styles.container}>
        <Screen result={this.state.result} />
        <Buttons buttonClicked={this.buttonClicked} />
      </div>
    );
  }
}

export default App;
