Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number
Given user has not specified a number of events
When the events list is rendered
Then thirty two events will be rendered by default

Scenario: User can change the number of events they want to see
Given user has opened the app
When a user specifies a number of events to display
Then that number of events will be rendered