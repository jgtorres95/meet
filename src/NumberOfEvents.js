import React, { Component } from 'react';

class NumberOfEvents extends Component {


  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value
    });
    this.props.updateEventCount(value);
  }

  render() {
    return(
      <div className="number-of-events">
        <input
          type="number"
          className="events-input"
          value={this.props.numberOfEvents}
          onChange={this.handleInputChanged}
          />
      </div>
    );
  }
}

export default NumberOfEvents;