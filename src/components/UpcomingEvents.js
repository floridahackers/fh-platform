import React from 'react';
import moment from 'moment';

import EventCard from './EventCard';

class UpcomingEvents extends React.Component {
	render() {
		const {events} = this.props;
		return(
			<div className="UpcomingEvents">
				{events.map((event, key) => {
					return <EventCard key={key} info={event} /> 
				})}
			</div>
		);
	}
}

export default UpcomingEvents;