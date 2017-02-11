require('./components/shared');
import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';

import UpcomingEvents from './components/UpcomingEvents';
import PastEvents from './components/PastEvents';

import past_events from './components/ArchivedEvents'

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
	},
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
	{
		"name":"KnightHacks",
		"color":"#f9c42e",
		"website_url":null,
		"logo_url":null,
		"date":{"from":1492189063000,"to":1492275463000},
		"event_url":"http://knighthacks.org/",
		"host":"University of Central Florida",
		"location":"Orlando",
		"event_type":"hackathon",
		"venue_needed":false,
		"venue_confirmed":false
	}
];

class CalendarApp extends React.Component {
  render() {
    return (
    	<div>
      		<UpcomingEvents events={upcoming_events} />
      		<h2 style={{marginTop: "36px"}}>Past Events</h2>
      		<PastEvents events={past_events} />
		</div>
    );
  }
}

render(<CalendarApp />, 
  document.querySelector('.app-container'));
