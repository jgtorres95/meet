import React, { Component } from "react";

class Event extends Component {
  state = {
    collapsed: true,
  };

  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed, 
    });
  };

  render() {
    const { collapsed } = this.state;
    const { event } = this.props; 

    return <div className="event">
      <h1 className="event-summary">{event.summary}</h1> 
      <p className="start-date">{event.start.dateTime}</p>
      <p className="location">{event.location}</p>
      <button className="details-btn" onClick={this.handleClick}>Show Details</button>
      <div className={`details ${collapsed ? `hidden` : `visible`}`}>
        <h3>About the event: </h3>
        <a>See Details on Google Calendar</a>
        <p className="event-description">{event.description}</p>
      </div>
    </div>;
  }
}
export default Event;