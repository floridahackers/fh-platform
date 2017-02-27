require('./components/shared');
import React from 'react';
import { render } from 'react-dom';
import EventCard from './components/EventCard';

const upcoming_events = [
  {
    "name":"PolyHacks",
    "color":"#e7358b",
    "website_url":null,"logo_url":null,
    "date":{"from":1490461063000,"to":1488131863000},
    "event_url":"http://polyhacks.com/",
    "host":"Florida Polytechnic University",
    "location":"Lakeland",
    "event_type":"hackathon",
    "venue_needed":false,
    "venue_confirmed":false
  },
  {"name":"sudo HackStetson","color":"#2e7d32","website_url":null,"logo_url":null,"date":{"from":1491062610000,"to":1491149010000},"event_url":"http://hackstetson.com/","host":"Stetson University","location":"DeLand","event_type":null,"venue_needed":true,"venue_confirmed":true}
];
class HomeApp extends React.Component {
  render() {
    return (
      <div>
        <EventCard info={upcoming_events[0]} />
        <EventCard info={upcoming_events[1]} />
      </div>
    );
  }
}

render(<HomeApp />, 
  document.querySelector('.events-app'));
