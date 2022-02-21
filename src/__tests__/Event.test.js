import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });
  test('render event title', () => {
    expect(EventWrapper.find('.event-summary')).toHaveLength(1);
  });
  test('render start date/time', () => {
    expect(EventWrapper.find('.start-date')).toHaveLength(1);
  });
  test('render location', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });
  test('render show details button', () => {
    expect(EventWrapper.find('.show-details')).toHaveLength(1);
  });
  test('collapsed state is true by default', () => {
    expect(EventWrapper.state("collapsed")).toBe(true);
  });
  test('update collapsed state to false upon clicking show-details', () => {
    EventWrapper.find('.show-details').simulate('click');
    expect(EventWrapper.state("collapsed")).toBe(false); 
  });
  test('render details when not collapsed', () => {
    EventWrapper.setState({
      collapsed: false,
    });
    const details = EventWrapper.find('.details');
    expect(details.find('.visible')).toHaveLength(1);
  });
  test('hide details when collapsed', () => {
    EventWrapper.setState({
      collapsed: true,
    });
    const details = EventWrapper.find('.details');
    expect(details.find('.hidden')).toHaveLength(1);
  });
});