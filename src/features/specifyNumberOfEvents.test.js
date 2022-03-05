import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { mockData } from '../mock-data';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';


const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    let AppWrapper;
    given('user has not specified a number of events', async () => {
      AppWrapper = await mount(<App />);
    });

    when('the events list is rendered', () => {
      AppWrapper.update();
    });

    then('thirty two events will be rendered by default',() => {
      expect(AppWrapper.find('.event')).toHaveLength(2);
    });
});

test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper; 
    given('user has opened the app', async () => {
      AppWrapper = await mount(<App />);
    });

    when('a user specifies a number of events to display', () => {
      AppWrapper.update();
      AppWrapper.find('.events-input').simulate('change', { target: { value: '2' } });    
    });

    then('that number of events will be rendered', () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(2);
    });
});

})