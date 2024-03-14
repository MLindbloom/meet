# Meet App

## Description

Welcome to Meet, a progressive web application (PWA) developed with React and following a Test-Driven Development (TDD) approach. Meet offers a seamless experience for users to discover and explore events in various cities, with features such as filtering by city, toggling event details, specifying the number of events, offline functionality, home screen installation, and visualizations through charts.

## Features

- **Filter Events By City**: Easily find and view events happening in specific locations by filtering events based on city.
- **Show/Hide Event Details**: Expand and collapse event details to focus on selected events conveniently.
- **Specify Number of Events**: Control the number of events displayed to tailor the browsing experience according to preferences.
- **Use the App When Offline**: Access cached data and continue interacting with the application seamlessly without an internet connection.
- **Add an App Shortcut to the Home Screen**: Install Meet as a shortcut on the device home screen for quick access.
- **Display Charts Visualizing Event Details**: Gain insights into event distribution across different cities through visually appealing charts.

## Scenarios

### Feature: Filter Events By City

- **Scenario 1**: Display all upcoming events when no city is specified.
- **Scenario 2**: Show suggestions for cities as the user types.
- **Scenario 3**: Allow users to select a city from the suggested list.

### Feature: Show/Hide Event Details

- **Scenario 1**: Enable users to expand event details.
- **Scenario 2**: Allow users to collapse event details.

### Feature: Specify Number of Events

- **Scenario 1**: Display 32 events by default if no number is specified.
- **Scenario 2**: Enable users to change the number of displayed events.

### Feature: Use the App When Offline

- **Scenario 1**: Load cached data when offline.
- **Scenario 2**: Display error message when attempting to change settings offline.

### Feature: Add an App Shortcut to the Home Screen

- **Scenario**: Allow users to install the Meet app as a shortcut on their device's home screen.

### Feature: Display Charts Visualizing Event Details

- **Scenario**: Show a chart illustrating the number of upcoming events in each city.

## Using Serverless Functions

Meet utilizes serverless functions to ensure app security, leveraging OAuth2 authentication, authorization, and session management with the Protected Google Calendar API. This approach also offers speed, efficiency, scalability, and the flexibility to integrate additional APIs in the future, such as social media collaboration and sharing functionalities.

## Authors

- [Matthew Lindbloom](mllindbloom@gmail.com)

Thank you for exploring Meet! I hope you enjoy using my application and find it helpful in discovering exciting events around you. If you have any questions or feedback, feel free to reach out. Happy event browsing! 🎉
