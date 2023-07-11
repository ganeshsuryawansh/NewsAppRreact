import React from 'react'
import FetchNews from './FetchNews';

class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error or perform any additional actions here
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI or an error message
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

const FetchNewsWithErrorBoundary = (props) => (
  <ErrorBoundary>
    <FetchNews color={props.isDarkMode} />
  </ErrorBoundary>
);

export default FetchNewsWithErrorBoundary;