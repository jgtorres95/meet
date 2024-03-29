import React, { Component}  from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import EventGenre from './EventGenre';
import NumberOfEvents from './NumberOfEvents';
import { InfoAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';
import { Navbar, Container } from 'react-bootstrap';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import logo from './meet-logo.png';

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
    const {showWelcomeScreen} = this.state

    const refreshPage = () => {
      window.location.reload();
    }
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />
    return (
      <div className="App">
        <Navbar className={`details ${showWelcomeScreen ? `hidden` : `visible`}`} sticky='top' bg='dark' variant='dark' expand='md'>
          <Container>
            <Navbar.Brand onClick={refreshPage} style={{ cursor: 'pointer' }}>
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=""
              />
              {'  '} meet
              </Navbar.Brand>
            <Navbar.Text>
              Search for events in your nearest city
            </Navbar.Text>
          </Container>
        </Navbar>
        <InfoAlert text={this.state.offlineText} />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <p>Number of events:</p>
        <NumberOfEvents updateEventCount={this.updateEventCount} numberOfEvents={this.state.numberOfEvents}/>
        <div className="data-vis-wrapper">
          <EventGenre events={this.state.events} />
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
        <EventList events={this.state.events}/>
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;