import React from "react";
import { render } from "react-dom";
import moment from "moment";
import { SketchPicker } from "react-color";
import { StickyContainer, Sticky } from "react-sticky";
import DatePicker from "react-datepicker";
var classNames = require("classnames");

import { getEventType, event_types } from "../utils";

import EventCard from "./EventCard";

class AddEvent extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      event_info: {
        name: "",
        color: "#585858",
        date: {
          from: moment().hour(12).toDate().getTime(),
          to: moment().hour(12).toDate().getTime()
        },
        event_url: null,
        host: null,
        location: null,
        event_type: event_types[0]
      }
    };
  }

  handleChange(event) {
    let value = event.value;

    this.setState(event.value);
  }

  render() {
    const {
      name,
      event_url,
      host,
      location,
      event_type
    } = this.state.event_info;

    let is_valid = name !== "" && event_url && host && location && event_type;

    return (
      <StickyContainer>
        <div className="AddEvent">
          <div className="form-wrap">
            <h3>Event Details</h3>
            <EventForm
              event_info={this.state.event_info}
              onChange={this.handleChange}
            />
          </div>
          <div className="card-wrap">
            <div>
              <Sticky topOffset={-80}>
                <h3>Event Preview</h3>
                <EventCard info={this.state.event_info} />
                {is_valid &&
                <div className="source-preview">
                  <h3>Event Preview</h3>
                  <div className="preview-wrap">
                    <pre>
                      {JSON.stringify(this.state.event_info, null, 2)}
                    </pre>
                  </div>
                </div>}
              </Sticky>
            </div>
          </div>
        </div>
      </StickyContainer>
    );
  }
}

export default AddEvent;

class EventForm extends React.Component {
  constructor(props) {
    super(props);

    this.onTextInputChange = this.onTextInputChange.bind(this);
  }

  onTextInputChange(event, propkey, valkey) {
    const { onChange } = this.props;
    const prev_prop = this.props[propkey];

    let state_frag = {
      value: {
        [propkey]: {
          ...prev_prop,
          [valkey]: event.value
        }
      }
    };

    onChange(state_frag);
  }

  onDateInputChange(event, propkey, date_type) {
    const { onChange } = this.props;
    const prev_prop = this.props[propkey];

    let date_val = {
      ...prev_prop.date,
      [date_type]: event.value.toDate().getTime()
    };

    let state_frag = {
      value: {
        [propkey]: {
          ...prev_prop,
          ["date"]: date_val
        }
      }
    };

    onChange(state_frag);
  }

  render() {
    return (
      <form action="#" className="EventForm">
        <div className="InputGroup">
          <label>Event Name</label>
          <TextInput
            name="event_name"
            placeholder="Floatie"
            value={this.props.event_info.name}
            onChange={event =>
              this.onTextInputChange(event, "event_info", "name")}
            required={true}
          />
        </div>
        <div className="InputGroup color">
          <label>Color</label>
          <ColorInput
            color={this.props.event_info.color}
            onChange={event =>
              this.onTextInputChange(event, "event_info", "color")}
          />
        </div>
        <div className="InputGroup">
          <label>Event URL</label>
          <TextInput
            name="event_url"
            placeholder="http://floate.io"
            value={this.props.event_info.event_url}
            onChange={event =>
              this.onTextInputChange(event, "event_info", "event_url")}
            required={true}
          />
        </div>
        <div className="InputGroup">
          <label>Date</label>
          <DateInput
            date={this.props.event_info.date.from}
            onChange={event =>
              this.onDateInputChange(event, "event_info", "from")}
          />
          <DateInput
            date={this.props.event_info.date.to}
            onChange={event =>
              this.onDateInputChange(event, "event_info", "to")}
          />
        </div>
        <div className="InputGroup">
          <label>School or Host</label>
          <TextInput
            name="host"
            placeholder="Institute of Tech"
            value={this.props.event_info.host}
            onChange={event =>
              this.onTextInputChange(event, "event_info", "host")}
            required={true}
          />
        </div>
        <div className="InputGroup">
          <label>Location</label>
          <TextInput
            name="location"
            placeholder="Orlando"
            value={this.props.event_info.location}
            onChange={event =>
              this.onTextInputChange(event, "event_info", "location")}
            required={true}
          />, FL
        </div>
        <div className="InputGroup">
          <label>Event Type</label>
          <select
            value={this.props.event_info.event_type}
            onChange={event =>
              this.onTextInputChange(
                {
                  value: event.target.value
                },
                "event_info",
                "event_type"
              )}
          >
            {event_types.map(event_type =>
              <option key={event_type} value={event_type}>
                {getEventType(event_type)}
              </option>
            )}
          </select>
        </div>
      </form>
    );
  }
}

class CheckboxInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      checked: props.value || false,
      is_valid: true
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value != nextProps.value) {
      this.setState({
        checked: nextProps.value
      });
    }
  }

  handleChange(event) {
    let is_valid = true;
    let value = !this.state.checked;

    this.setState({
      checked: value
    });

    this.props.onChange({
      is_valid: is_valid,
      value: value
    });
  }

  render() {
    const { label } = this.props;
    const value = this.state.checked;

    var classes = classNames({
      CheckboxInput: true,
      checked: value
    });

    return (
      <div className={classes}>
        <span className="box" onClick={event => this.handleChange(event)}>
          {value && <span className="inner-box" />}
        </span>
        <span onClick={event => this.handleChange(event)} className="label">
          {label}
        </span>
      </div>
    );
  }
}

class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: props.value || "",
      is_required: props.required,
      is_valid: true
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value != nextProps.value) {
      this.setState({
        value: nextProps.value
      });
    }
  }

  handleChange(event) {
    let value = event.target.value;
    let is_valid = !!value.trim();

    if (this.state.is_required) {
      this.setState({
        is_valid: is_valid
      });
    }
    this.setState({ value: value });

    this.props.onChange({
      is_valid: is_valid,
      value: value
    });
  }

  render() {
    return (
      <input
        type={this.props.type || "text"}
        name={this.props.name}
        onChange={this.handleChange}
        placeholder={this.props.placeholder || ""}
        value={this.state.value}
        required={this.props.required || false}
      />
    );
  }
}

class DateInput extends React.Component {
  constructor(props) {
    super(props);

    let date = props.date ? moment(props.date) : moment();
    this.state = {
      date: date,
      displayCalendar: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.setState({ displayCalendar: !this.state.displayCalendar });
  }

  handleClose() {
    this.setState({ displayCalendar: false });
  }

  handleChange(date) {
    date.hour(12);
    this.setState({
      date: date
    });

    this.props.onChange({
      is_valid: true,
      value: date
    });
  }

  render() {
    const styles = {
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      },
      popover: {
        position: "absolute",
        zIndex: "2"
      }
    };
    return (
      <div>
        <input
          type="text"
          name={this.props.name}
          onClick={event => this.handleClick()}
          value={this.state.date.format("MMM. D")}
          readOnly
        />
        {this.state.displayCalendar
          ? <div style={styles.popover}>
              <div style={styles.cover} onClick={this.handleClose} />
              <DatePicker
                inline
                selected={this.state.date}
                onChange={this.handleChange}
              />
            </div>
          : null}
      </div>
    );
  }
}

class ColorInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayPicker: false,
      color: props.color
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.setState({ displayPicker: !this.state.displayPicker });
  }

  handleClose() {
    this.setState({ displayPicker: false });
  }

  handleChange(color) {
    this.setState({ color: color.hex });
    this.props.onChange({
      is_valid: true,
      value: color.hex
    });
  }

  render() {
    const styles = {
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      },
      popover: {
        position: "absolute",
        zIndex: "2"
      }
    };
    return (
      <div>
        <span>#</span>
        <input
          type="text"
          name={this.props.name}
          onClick={event => this.handleClick()}
          value={this.state.color.slice(1)}
          readOnly
        />
        {this.state.displayPicker
          ? <div style={styles.popover}>
              <div style={styles.cover} onClick={this.handleClose} />
              <SketchPicker
                color={this.state.color}
                onChange={this.handleChange}
              />
            </div>
          : null}
      </div>
    );
  }
}
