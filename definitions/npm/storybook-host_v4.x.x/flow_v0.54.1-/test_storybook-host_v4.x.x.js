// @flow

import * as React from 'react';
import { host } from 'storybook-host';

// All bells and whistles
host({
  mobXDevTools: true,
  title: 'str',
  hr: true,
  align: 'str',
  height: 'str',
  width: 'str',
  background: true,
  backdrop: true,
  cropMarks: true,
  border: true,
  padding: 123
});

// $ExpectError unknown property
host({ unknown: true, });

// Follows storybook decorator API
(host({ padding: 123 })(() => <div></div>): React.Node);
