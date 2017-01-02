require('./components/shared');
import React from 'react';
import { render } from 'react-dom';

class CalendarApp extends React.Component {
  render() {
    return (
      <h1>Hello CalendarApp again</h1>
    );
  }
}

render(<CalendarApp />, 
  document.querySelector('.app-container'));
