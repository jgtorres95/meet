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

    return <div className="event">
      <h1 className="event-summary">Summary</h1>
      <p className="start-date">Start Date/Time</p>
      <p className="location">Location</p>
      <button className="show-details" onClick={this.handleClick}>Show Details</button>
      <div className={`details ${collapsed ? `hidden` : `visible`}`}>
        <h3>About the event:</h3>
        <a>See Details on Google Calendar</a>
        <p className="event-description">Description</p>
      </div>
    </div>;
  }
}
export default Event;