# *** Meet App 

Meet is a serverless, progressive web application that allows users to search for upcoming events in their city. 

* Feature 1: Filter events by city
User story: 

  As a user

  I should be able to filter events by city
  
  So that I can see the list of events that take place in that city
    
    *Scenario 1: When a user hasn’t searched for a city, show upcoming events from all cities

      Given user hasn’t searched for any city

      When the user opens the app

      Then the user should see a list of all upcoming events

    *Scenario 2: User should see a lit of suggestions when they search for a city

      Given the main page is open

      When user starts typing in the city textbox

      Then the user should see a list of cities (suggestions) that match what they’ve typed

    *Scenario 3: User can select a city from the suggested list

      Given the user was typing “Berlin” in the city textbox And the list of suggested cities is showing

      When the user selects a city (e.g., “Berlin, Germany”) from the list

      Then their city should be changed to that city (i.e., “Berlin, Germany”) And the user should receive a list of upcoming events in that city

* Feature 2: Show/hide an event’s details

  As a user

  I should be able to show/hide an event’s details

  So that I can see additional details about an event, and then hide then when I am done

    *Scenario 1: An event element is collapsed by default

      Given the main page is opened

      When user begins browsing events

      Then each event element on the page should be collapsed by default

    *Scenario 2: User can expand an event to see its details

      Given the user is presented with a list of events

      When the user expands the details of an event

      Then the user should see details on the event

    * Scenario 3: User can collapse an event to hide its details

      Given the user has expanded the event details

      When a user collapses the event

      Then the event details should be hidden

* Feature 3: Specify Number of events

  As a user

  I should be able to specify the number of events

  So that I can see more or fewer events on my screen at a time

    *Scenario 1: When user hasn’t specified a number, 32 is the default number

      Given the user is has not specified a number of events to be displayed

      When a user begins browsing events

      Then the user should see 32 events displayed

    *Scenario 2: User can change the number of events they want to see

      Given the user is has not specified a number of events to be displayed

      When a user specifies a number

      Then the user should see the number of events specified

* Feature 4: Use the app when offline

  As a user

  I should be able to use the app offline

  So that I can continue to use the app while not connected to the internet

    *Scenario 1: Show cached data when there’s no internet connection

      Given the user is not connected to the internet

      When the user accesses the app offline

      Then the user should see cached data

    *Scenario 2: Show error when user changes the settings (city, time range)

      Given the user is not connected to the internet

      When a user changes the settings

      Then the user should encounter an error

* Feature 5: Data visualization

  As a user

  I should be able to visualize data

  So that I can get a better visualize events in different cities

    *Scenario 1: Show a chart with the number of upcoming events in each city

      Given the user navigated to the data visualization charts

      When the user searches for a city

      Then the user should be presented with a chart containing the number of upcoming events in each city

### **Dependencies**

* React

### **API**

* Google Calendar API