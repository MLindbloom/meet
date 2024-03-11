// src/features/showHideAnEventsDetails.test.js

import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';
import { getEvents } from '../api';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  test('When the user is shown a list of events that are hidden by default', ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given('the user opens the app', () => {
      AppComponent = render(<App />);
    });

    when('the app displays a list of events', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });

    then('the event details are hidden by default', () => {
      const AppDOM = AppComponent.container.firstChild;
      const eventDetails = AppDOM.querySelector('.details');
      expect(eventDetails).not.toBeInTheDocument();
    });
  });

  test('User can expand an event to see details', ({ given, when, then }) => {
    let EventComponent;
    let allEvents;
    given(
      'the user is viewing a list of events that is collapsed by default',
      async () => {
        allEvents = await getEvents();
        EventComponent = render(<Event event={allEvents[0]} />);
        expect(
          EventComponent.container.querySelector('.details')
        ).not.toBeInTheDocument();
      }
    );

    when('the user clicks on an event', async () => {
      const showDetails = EventComponent.queryByText('show details');
      const user = userEvent.setup();
      await user.click(showDetails);
    });

    then('the event details are expanded and displayed', () => {
      expect(
        EventComponent.container.querySelector('.details')
      ).toBeInTheDocument();
      expect(EventComponent.queryByText('hide details')).toBeInTheDocument();
    });
  });

  test('User can collapse an event to hide details', ({
    given,
    when,
    then,
  }) => {
    let EventComponent;
    let allEvents;
    given('the user has expanded event details', async () => {
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />);
      const user = userEvent.setup();
      await user.click(EventComponent.queryByText('show details'));
      expect(
        EventComponent.container.querySelector('.details')
      ).toBeInTheDocument();
    });

    when('the user clicks on the event again', async () => {
      const hideDetails = EventComponent.queryByText('hide details');
      const user = userEvent.setup();
      await user.click(hideDetails);
    });

    then('the event details are collapsed and hidden', () => {
      expect(
        EventComponent.container.querySelector('.details')
      ).not.toBeInTheDocument();
      expect(
        EventComponent.queryByText('hide details')
      ).not.toBeInTheDocument();
    });
  });
});
