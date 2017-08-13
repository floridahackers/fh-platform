import React from "react";
import moment from "moment";

class EventCard extends React.Component {
  render() {
    const {
      date,
      name,
      color,
      location,
      host,
      event_url,
      event_type
    } = this.props.info;

    return (
      <div className="EventCard">
        <EventHeader
          date={date}
          name={name}
          color={color}
          host={host}
          location={location}
          event_url={event_url}
        />
        <EventBody
          name={name}
          date={date}
          color={color}
          host={host}
          location={location}
          event_url={event_url}
          event_type={event_type}
        />
      </div>
    );
  }
}

export default EventCard;

class EventHeader extends React.Component {
  render() {
    const { date, name, color, host, location, event_url } = this.props;
    const search_link = `https://www.facebook.com/groups/1023750727698510/search/?query=${name}`;
    const from_date = moment(date.from);

    return (
      <div className="header" style={{ backgroundColor: color }}>
        <div className="date">
          <span className="month">
            {from_date.format("MMMM")}
          </span>
          <span className="day">
            {from_date.format("D")}
          </span>
        </div>
        <div className="action-items">
          <a className="home" target="_blank" href={event_url || "#"}>
            <HomeIcon /> Find Out More
          </a>
          <a className="posts" target="_blank" href={search_link}>
            <CommentIcon /> Search for Posts
          </a>
        </div>
      </div>
    );
  }
}

class EventBody extends React.Component {
  formatTime(date) {
    let formattedDate = moment.utc(date).format("YYYYMMDDTHHmmssZ");
    return formattedDate.replace("+00:00", "Z");
  }

  getCalendarUrl() {
    const { date, name, color, host, location } = this.props;
    const description = `${name} at ${host}`;
    const location_fragment = `${location}, FL`;

    let calendarUrl = "https://www.google.com/calendar/event";
    calendarUrl += "?action=TEMPLATE";
    calendarUrl += "&text=" + name;
    calendarUrl += "&dates=" + this.formatTime(date.from);
    calendarUrl += "/" + this.formatTime(date.to);
    calendarUrl += "&details=" + description;
    calendarUrl += "&location=" + encodeURIComponent(location_fragment);
    calendarUrl += "&sprop=&sprop=name:Alpha";

    return calendarUrl;
  }

  getEventType(event_key) {
    const event_types = {
      hackathon: "Hackathon",
      workshop: "Workshop",
      conference: "Conference",
      meetup: "Meetup",
      open_event: "Open Event"
    };

    return event_types[event_key];
  }

  render() {
    let { name, host, location, event_url, event_type, color } = this.props;
    return (
      <div className="body">
        <div className="info">
          <h1>
            {name}
          </h1>
          <span className="host">
            {host}
          </span>
          <span className="location">
            {location}, FL
          </span>
          <span className="type">
            {this.getEventType(event_type)}
          </span>
          <a className="cal" target="_blank" href={this.getCalendarUrl()}>
            Save GCal Event
          </a>
        </div>
      </div>
    );
  }
}

const HomeIcon = () => {
  return (
    <svg className="plus-icon" width="14" height="14" viewBox="0 0 92.07 85.8">
      <defs>
        <path
          id="plus"
          d="M79.48,43.84L49.61,19.38a5.43,5.43,0,0,0-7.15,0L12.6,43.83a6.59,6.59,0,0,0-2.26,5V83a2.85,2.85,0,0,0,2.84,2.84h65.7A2.85,2.85,0,0,0,81.73,83V48.78A6.55,6.55,0,0,0,79.48,43.84ZM38.68,59.46H52.93a3.31,3.31,0,0,1,3.31,3.31v23H35.37v-23A3.31,3.31,0,0,1,38.68,59.46Z"
        />
        <path d="M90.62,35.68L48.55,0.86a4.1,4.1,0,0,0-5,0l-16,13.26a0.75,0.75,0,0,1-1.23-.58V6.43a2.85,2.85,0,0,0-2.84-2.84H15.85A2.85,2.85,0,0,0,13,6.43V24.88a2.62,2.62,0,0,1-1,2L1.45,35.68a3.87,3.87,0,0,0-1,4.74,3.8,3.8,0,0,0,5.78,1.18L42.93,11.18a4.86,4.86,0,0,1,6.2,0L85.88,41.59a3.8,3.8,0,0,0,5.78-1.18A3.87,3.87,0,0,0,90.62,35.68Z" />
      </defs>
      <use href="#plus" />
    </svg>
  );
};

const CommentIcon = () => {
  return (
    <svg className="plus-icon" viewBox="0 0 42 32">
      <defs>
        <path
          d="M36.12,0H5.88A5.91,5.91,0,0,0,0,5.92V19.69a5.91,5.91,0,0,0,5.88,5.92H20.71l10,6.24A1,1,0,0,0,32.24,31V25.61h3.88A5.9,5.9,0,0,0,42,19.69V5.92A5.9,5.9,0,0,0,36.12,0ZM10.76,16.3a3.46,3.46,0,1,1,3.44-3.46A3.45,3.45,0,0,1,10.76,16.3ZM21,16.3a3.46,3.46,0,1,1,3.44-3.46A3.45,3.45,0,0,1,21,16.3Zm10.24,0a3.46,3.46,0,1,1,3.44-3.46A3.45,3.45,0,0,1,31.24,16.3Z"
          id="list-rich"
        />
      </defs>
      <use href="#list-rich" />
    </svg>
  );
};
