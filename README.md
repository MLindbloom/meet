## User Stories

**Filter Events By City:**  
As a user,
I should be able to filter events by city and interact with suggestions,  
So that I can easily find and view events happening in a specific location.

**Show/Hide Event Details:**  
As a user,
I should be able to interact with event details,  
So that I can expand events to see details and collapse them to focus on other events.

**Specify Number of Events:**  
As a user,
I should be able to specify the number of events to display,  
So that I can control the amount of information shown and tailor my event browsing experience.

**Use the App When Offline:**  
As a user,
I should be able to use the app even when offline,  
So that I can access cached data and continue interacting with the application seamlessly without an internet connection.

**Add an App Shortcut to the Home Screen:**  
As a user,
I should be able to install the meet app as a shortcut on my device home screen,  
So that I can quickly access the app without navigating through the browser, enhancing convenience and accessibility.

**Display Charts Visualizing Event Details:**  
As a user,
I should be able to view a chart illustrating the number of upcoming events in each city,  
So that I can gain insights into event distribution across different locations and make informed decisions on event attendance and planning.

## Scenarios

**Feature: Filter Events By City**

Scenario: When user hasn’t searched for a city, show upcoming events from all cities.

- Given the user hasn't entered any city in the search input field
- When the user views the events page
- Then upcoming events from all cities are displayed

Scenario: User should see a list of suggestions when they search for a city.

- Given the user has entered partial city name in the search input field
- When the user starts typing to search for a city
- Then a list of suggestions related to the entered text is displayed

Scenario: User can select a city from the suggested list.

- Given the user has entered partial city name in the search input field And a list of suggestions related to the entered text is displayed
- When the user selects a city from the suggestion list
- Then the events related to the selected city are displayed

**Feature: Show/Hide Event Details**

Scenario: User can expand an event to see details.

- Given the user is viewing a list of events that is collapsed by default
- When the user clicks on an event
- Then the event details are expanded and displayed

Scenario: User can collapse an event to hide details.

- Given the user has expanded event details
- When the user clicks on the event again
- Then the event details are collapsed and hidden

**Feature: Specify Number of Events**

Scenario: When user hasn’t specified a number, 32 events are shown by default.

- Given the user hasn't selected how many events they want to be shown
- When the user views the events page
- Then 32 events are displayed by default

Scenario: User can change the number of events displayed.

- Given the user is viewing a list of events
- When the user selects a specific number of events to be shown
- Then only the specified number of events are displayed

**Feature: Use the App When Offline**

Scenario: Show cached data when there’s no internet connection.

- Given the user has visited the app before and cached resources And the user is offline
- When the user opens the app
- Then the app loads from cache and displays cached content

Scenario: Show error when user changes search settings (city, number of events).

- Given the user is offline
- When the user tries to change search settings (city, number of events)
- Then an error message is displayed indicating no internet connection

**Feature: Add an App Shortcut to the Home Screen**

Scenario: User can install the Meet app as a shortcut on their device home screen.

- Given the user is using a mobile device
- When the user opens the app in the browser And the user clicks on "Add to Home Screen"
- Then the app shortcut is added to the device's home screen

**Feature: Display Charts Visualizing Event Details**

Scenario: Show a chart with the number of upcoming events in each city.

- Given the user is viewing a list of events
- When the user views the chart section
- Then a chart displaying the number of upcoming events in each city is shown

**Using Serverless Functions**
Serverless functions will be used to ensure app security by using OAuth2 authentication, authorization and session management between the app and the Protected Google Calendar API. Additional benefits include speed and efficiency of the app, scalability, and the ability to implement other APIs to include additional features in the future, for example social media collaboration and sharing.
