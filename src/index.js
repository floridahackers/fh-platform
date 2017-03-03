require('./components/shared');
import React from 'react';
import { render } from 'react-dom';
import EventCard from './components/EventCard';
import all_events from './all_events';

let event_sort_fn_new = (a, b) => {
  return a.date.from - b.date.from
}
let new_events = all_events.filter(event => event.date.to - Date.now() > 0 && event.approved);
new_events.sort(event_sort_fn_new);

class HomeApp extends React.Component {
  render() {
    return (
      <div>
        <EventCard info={new_events[0]} />
        <EventCard info={new_events[1]} />
      </div>
    );
  }
}

render(<HomeApp />, 
  document.querySelector('.events-app'));
