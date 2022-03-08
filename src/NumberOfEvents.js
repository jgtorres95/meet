import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    errorText: '',
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 32) {
      this.setState({
        numberOfEvents: '',
        errorText: 'Please enter a number between 1 and 32',
      });
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: '',
      });
    }
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
          <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;