import React from 'react';
import { render } from 'react-dom';

class HomeApp extends React.Component {
  render() {
    return (
      <h1>Hello HomePage</h1>
    );
  }
}

render(<HomeApp />, 
  document.querySelector('.app-container'));
