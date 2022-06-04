// @flow
import { describe, it } from 'flow-typed-test';
import tz from 'timezones-list';

describe('timezones-list', () => {
  it('works', () => {
    const {
      label,
      tzCode,
      name,
      utc,
    } = tz[0];

    label.toLowerCase();
    tzCode.toLowerCase();
    name.toLowerCase();
    utc.toLowerCase();
  });

  it('fails', () => {
    // $FlowExpectedError[prop-missing] is not string, is array
    tz.toLowerCase();

    // $FlowExpectedError[prop-missing] object does not have random properties
    tz[0].foo
  });
});
