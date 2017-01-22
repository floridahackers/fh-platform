require('./components/shared');
import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';

import UpcomingEvents from './components/UpcomingEvents';
import PastEvents from './components/PastEvents';

const upcoming_events = [
	{
		"name":"SwampHacks",
		"color":"#5adbed",
		"logo_url":null,
		"date": {
			"from":1485107782441,
			"to":1485107782441
		},
		"event_url":"http://swamphacks.com",
		"host":"University of Florida",
		"location":"Gainesville",
		"event_type":"hackathon",
		"venue_needed":false,
		"venue_confirmed":false
	},
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

class CalendarApp extends React.Component {
  render() {
    return (
    	<div>
      		<UpcomingEvents events={upcoming_events} />
      		<h2 style={{marginTop: "36px"}}>Past Events</h2>
		</div>
    );
  }
}

render(<CalendarApp />, 
  document.querySelector('.app-container'));
