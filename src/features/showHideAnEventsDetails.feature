Feature: Show/hide an event's details

Scenario: An event element is collapsed by default
Given user has opened the app
When an event is rendered
Then the event details should be collapsed by default

Scenario: User can expand an event to see its details
Given the events list has been rendered
When a user clicks the details button
Then the event details are expanded

Scenario: User can collapse an event to hide its details
Given an event's details are expanded
When a user clicks the details button
Then the event details are collapsed