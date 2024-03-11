Feature: Show/Hide Event Details

Scenario: When the user is shown a list of events that are hidden by default
  Given the user opens the app
  When the app displays a list of events
  Then the event details are hidden by default

Scenario: User can expand an event to see details
  Given the user is viewing a list of events that is collapsed by default
  When the user clicks on an event
  Then the event details are expanded and displayed

Scenario: User can collapse an event to hide details
  Given the user has expanded event details
  When the user clicks on the event again
  Then the event details are collapsed and hidden