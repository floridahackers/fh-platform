import React from 'react';
import moment from 'moment';


class EventCard extends React.Component {
  render() {
    const {
      date, name, color, location, host, 
      event_url, logo_url, event_type
    } = this.props.info;

    return (
      <div className="EventCard">
        <EventHeader 
          date={date} 
          name={name} 
          color={color}
          host={host}
          location={location}
        />
        <EventBody 
          name={name}
          color={color}
          host={host}
          location={location}
          logo_url={logo_url}
          event_url={event_url}
          event_type={event_type}
        />
      </div>
    )
  }
}

export default EventCard;

class EventHeader extends React.Component {

  formatTime(date) {
    let formattedDate = moment.utc(date).format('YYYYMMDDTHHmmssZ');
    return formattedDate.replace('+00:00', 'Z');
  }

  getCalendarUrl() {
    const {date, name, color, host, location} = this.props;
    const description = `${name} at ${host}`;
    const location_fragment = `${location}, FL`;

    let calendarUrl = 'https://www.google.com/calendar/event';
    calendarUrl += '?action=TEMPLATE';
    calendarUrl += '&text=' + name;
    calendarUrl += '&dates=' + this.formatTime(date.from);
    calendarUrl += '/' + this.formatTime(date.to);
    calendarUrl += '&details=' + description;
    calendarUrl += '&location=' + encodeURIComponent(location_fragment);
    calendarUrl += '&sprop=&sprop=name:Alpha';

    return calendarUrl;
  }
  render() {
    const {date, name, color, host, location} = this.props;
    const search_link = `https://www.facebook.com/groups/1023750727698510/search/?query=${name}`;
    const from_date = moment(date.from);
    console.log(this.getCalendarUrl());

    return (
      <div className="header" style={{backgroundColor: color}}>
        <div className="date">
          <span className="month">{from_date.format('MMMM')}</span>
          <span className="day">{from_date.format('D')}</span>
        </div>
        <div className="action-items">
          <a className="posts" target="_blank" href={search_link}>
            <CommentIcon /> Search for Posts
          </a>
          <a className="cal" target="_blank" href={this.getCalendarUrl()}>
            <PlusIcon />  Save GCal Event
          </a>
        </div>
      </div>
    )
  }
}

const EventBody = ({
  name, host, location, event_url, logo_url, event_type, color
}) => {
  return (
    <a target="_blank" href={event_url} className="body">
      <img className="logo" src={logo_url} />
      <div className="info">
        <h1>{name}</h1>
        <span className="host">{host}</span>
        <span className="location">{location}, FL</span>
        <span className="type">{event_type}</span>
      </div>
    </a>
  )
}

const PlusIcon = () => {
  return (
    <svg className="plus-icon" viewBox="0 0 8 8">
      <defs>
        <path d="M3 0v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2z" id="plus"></path>
      </defs>
      <use href="#plus"></use>
    </svg>
  )
}


const CommentIcon = () => {
  return (
    <svg className="plus-icon" viewBox="0 0 8 8">
      <defs>
        <path d="M0 0v3h3v-3h-3zm4 0v1h4v-1h-4zm0 2v1h3v-1h-3zm-4 2v3h3v-3h-3zm4 0v1h4v-1h-4zm0 2v1h3v-1h-3z" id="list-rich"></path>
      </defs>
      <use href="#list-rich"></use>
    </svg>
  )
}
