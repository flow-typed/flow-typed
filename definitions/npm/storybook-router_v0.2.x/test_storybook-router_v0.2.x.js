// @flow

import StoryRouter from 'storybook-router';
// $ExpectError
import { linkTo } from '@storybook/addon-links';

StoryRouter();

StoryRouter({}, { autoRoute: false });

StoryRouter(
  { '/about': linkTo('Linked stories', 'about') },
  { initialEntry: ['/'], autoRoute: false }
);

StoryRouter({
  '/about': linkTo('Linked stories with automatic route definition', 'about'),
});

StoryRouter(
  {
    '/': linkTo('Linked stories with automatic route definition', 'home'),
  },
  { initialEntry: ['/about'] }
);

StoryRouter(
  {},
  { getUserConfirmation: (message, cb) => cb(window.confirm(message)) }
);

// $ExpectError
StoryRouter(false);

// $ExpectError
StoryRouter('string');

// $ExpectError
StoryRouter({}, false);

// $ExpectError
StoryRouter({}, { autoRoute: 'string' });

// $ExpectError
StoryRouter({}, { initialEntry: 'string' });

// $ExpectError
StoryRouter({}, { initialEntries: 'string' });

// $ExpectError
StoryRouter({}, { keyLength: 'string' });

// $ExpectError
StoryRouter({}, { children: 'string' });
