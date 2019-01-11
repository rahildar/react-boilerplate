import React from "react";
import { hot } from "react-hot-loader";

const Warning = React.lazy(() => import("./Warning"));

class App extends React.Component {
  state = {
    count: 0
  };
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    let { count } = this.state;
    return (
      <div>
        <h1> hello world!!! is on</h1>
        <h4>hello</h4>
        <div>state is! {count}</div>
        {count > 0 && (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        )}
        <button onClick={this.handleClick}>inc</button>
      </div>
    );
  }
}

export default hot(module)(App);
