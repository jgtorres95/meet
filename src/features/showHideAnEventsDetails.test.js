import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { mockData } from '../mock-data';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    let AppWrapper;
    given('user has opened the app', async () => {
      AppWrapper = await mount(<App />);
    });

    when('an event is rendered', () => {    
      AppWrapper.update(); 
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });

    then('the event details should be collapsed by default', () => {
      expect(AppWrapper.find(".event__moreDetails")).toHaveLength(0);
    });
});


test('User can expand an event to see its details', ({ given, when, then }) => {
    let AppWrapper;
    given('the events list has been rendered', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });

    when('a user clicks the details button', () => {
      AppWrapper.find(".details-btn").at(0).simulate("click");
    });

    then('the event details are expanded', () => {
      expect(AppWrapper.find(".visible")).toHaveLength(1);
    });
});

test('User can collapse an event to hide its details', ({ given, when, then }) => {
    let AppWrapper;
    given('an event\'s details are expanded', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find(".details-btn").at(0).simulate("click");
    });

    when('a user clicks the details button', () => {
      AppWrapper.find(".details-btn").at(0).simulate("click");
    });

    then('the event details are collapsed', () => {
      expect(AppWrapper.find("hidden")).toHaveLength(0);
    });
});

})