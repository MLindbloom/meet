// src/features/specifyNumberOfEvents.test.js

import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';
import { getEvents } from '../api';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  test('When user hasn’t specified a number, 32 events are shown by default.', ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let eventList;
    given(
      "the user hasn't selected how many events they want to be shown",
      () => {
        AppComponent = render(<App />);
      }
    );

    when('the user views the events page', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        expect(EventListDOM).toBeInTheDocument();
      });
    });

    then(/^(\d+) events are displayed by default$/, async (arg0) => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });
  });

  test('User can change the number of events displayed.', ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given('the user is viewing a list of events', () => {
      AppComponent = render(<App />);
    });

    when(
      'the user selects a specific number of events to be shown',
      async () => {
        const AppDOM = AppComponent.container.firstChild;
        const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
        const numberOfEventsInput =
          within(NumberOfEventsDOM).queryByRole('textbox');
        await userEvent.clear(numberOfEventsInput);
        await userEvent.type(numberOfEventsInput, '10');
      }
    );

    then('only the specified number of events are displayed', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(10);
      });
    });
  });
});
