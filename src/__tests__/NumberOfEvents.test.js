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
})
