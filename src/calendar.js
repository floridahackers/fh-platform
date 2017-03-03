require('./components/shared');
import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import UpcomingEvents from './components/UpcomingEvents';
import PastEvents from './components/PastEvents';

import all_events from './all_events';

let event_sort_fn = (a, b) => {
	return b.date.from - a.date.from
}
let event_sort_fn_new = (a, b) => {
	return a.date.from - b.date.from
}

let old_events = all_events.filter(event => event.date.to - Date.now() < 0 && event.approved);
let new_events = all_events.filter(event => event.date.to - Date.now() > 0 && event.approved);

new_events.sort(event_sort_fn_new);
old_events.sort(event_sort_fn);


class CalendarApp extends React.Component {
  render() {
    return (
    	<div>
      		<UpcomingEvents events={new_events} />
      		<h2 style={{marginTop: "36px"}}>Past Events</h2>
      		<PastEvents events={old_events} />
		</div>
    );
  }
}

render(<CalendarApp />, 
  document.querySelector('.app-container'));
