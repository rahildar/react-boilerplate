import React from "react";
import propTypes from "prop-types";
class ErrorBoundary extends React.Component {
  state = {
    error: false
  };
  static getDerivedStateFromError() {
    return {
      error: true
    };
  }
  static propTypes = {
    children: propTypes.node.isRequired
  };

  render() {
    let { error } = this.state;
    let { children } = this.props;
    return error ? <div>Some error </div> : children;
  }
}

export default ErrorBoundary;
