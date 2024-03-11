Feature: Specify Number of Events

Scenario: When user hasn’t specified a number, 32 events are shown by default.
  Given the user hasn't selected how many events they want to be shown
  When the user views the events page
  Then 32 events are displayed by default

Scenario: User can change the number of events displayed.
  Given the user is viewing a list of events
  When the user selects a specific number of events to be shown
  Then only the specified number of events are displayed