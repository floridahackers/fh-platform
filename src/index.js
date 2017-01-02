require('./components/shared');
import React from 'react';
import { render } from 'react-dom';
import EventCard from './components/EventCard';

const event_info = {
    name: 'SwampHacks',
    color: '#3399d6',
    logo_url: 'http://floridahackers.com/images/swamphacks.png',
    date: {
          from: new Date("2017-01-20 12:00:00").getTime(),
          to: new Date("2017-01-22 12:00:00").getTime(),
        },
    event_url: 'http://swamphacks.com',
    host: 'University of Florida',
    location: 'Tallahassee',
    event_type: 'hackathon'
};

class HomeApp extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello HomePage</h1>
        <EventCard info={event_info} />
      </div>
    );
  }
}

render(<HomeApp />, 
  document.querySelector('.app-container'));
