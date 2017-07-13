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
        { new_events.length > 0 ?
            new_events.slice(0,2).map((event, key) => <EventCard key={key} info={event}/>)
            : <h3>No upcoming events right now.</h3>
        }
      </div>
    );
  }
}


render(<HomeApp />, 
  document.querySelector('.events-app'));
