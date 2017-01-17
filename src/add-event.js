require('./components/shared');
import React from 'react';
import { render } from 'react-dom';
import AddEvent from './components/AddEvent';

class AddEventApp extends React.Component {
  render() {
    return (
      <div>
        <AddEvent /> 
      </div>
    );
  }
}

render(<AddEventApp />, 
  document.querySelector('.app-container'));
