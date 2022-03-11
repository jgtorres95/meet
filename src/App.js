import React, { Component}  from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import EventGenre from './EventGenre';
import NumberOfEvents from './NumberOfEvents';
import { InfoAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: 'all',
    numberOfEvents: 32,
    offlineText: '',
    showWelcomeScreen: undefined, 
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, this.state.numberOfEvents),
        currentLocation: location, 
      });
    });
  }

  updateEventCount = (eventCount) => {
    this.setState({
      numberOfEvents: eventCount
    })
    this.updateEvents(this.state.currentLocation);
  }

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  }

  /*setOfflineText = () => {
  if (!navigator.onLine) {
    this.setState({
      offlineText: 'You are currently offline'
    })
  } else {
    this.setState({
      offlineText: '',
    })
  }
  }*/

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
    if (!navigator.onLine) {
      this.setState({
        offlineText: 'You are currently offline'
      })
    } else {
      this.setState({
        offlineText: '',
      })
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { locations, numberOfEvents, events } = this.state;
    return (
      <div className="App">
        <h1>Meet App</h1>
        <h4>Search for events in your nearest city</h4>
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateEventCount={this.updateEventCount} numberOfEvents={numberOfEvents}/>
        <div className="data-vis-wrapper">
          <EventGenre events={events} />
          <ResponsiveContainer height={400} >
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis
                allowDecimals={false}
                type="number"
                dataKey="number"
                name="number of events"
              />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <EventList events={events}/>
      </div>
    );
  }
}

export default App;