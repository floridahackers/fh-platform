require('./components/shared');
import React from 'react';
import { render } from 'react-dom';
import EventCard from './components/EventCard';

const upcoming_events = [
  {
    "name":"HackFSU",
    "color":"#5e2f4f",
    "logo_url":null,
    "date": {
      "from":1487354182000,
      "to":1487526982000
    },
    "event_url":"http://hackfsu.com",
    "host":"Florida State University",
    "location":"Tallahassee",
    "event_type":"hackathon",
    "venue_needed":true,
    "venue_confirmed":true
  },
  {
    "name":"MangoHacks",
    "color":"#e5273e",
    "logo_url":null,
    "date":{
      "from":1487958982000,
      "to":1488131782000
    },
    "event_url":"http://mangohacks.com",
    "host":"Florida International University",
    "location":"Miami",
    "event_type":"hackathon",
    "venue_needed":true,
    "venue_confirmed":true
  }
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
