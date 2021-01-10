import React, {Component} from 'react';

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  //react lifecycle hook
  componentDidCatch(error, info) {
    this.setState({hasError: true})
  }

  render () {
    if (this.state.error) {
      return <h1>Oops, something's wrong</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundry
