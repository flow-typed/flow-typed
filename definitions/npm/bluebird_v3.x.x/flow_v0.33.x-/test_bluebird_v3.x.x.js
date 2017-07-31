// @flow
import Bluebird from 'bluebird';

Bluebird.all(Promise.resolve([
  new Bluebird(() => {}),
]));
