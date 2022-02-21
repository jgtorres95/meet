import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });
  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events')).toHaveLength(1);
  });
  test('update state when text input changes', () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: 32
    });
    NumberOfEventsWrapper.find('.events-input').simulate('change', {target: {value: 16}});
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(16);
  })
})