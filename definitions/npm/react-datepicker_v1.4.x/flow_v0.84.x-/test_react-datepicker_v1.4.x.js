/* @flow */

import * as React from 'react';
import DatePicker from 'react-datepicker';

const datepicker = (
  <DatePicker
    customInput={<img src="" />}
    fixedHeight
    popperPlacement="bottom"
    popperModifiers={{
      flip: {
        enabled: false
      }
    }}
    selected={new Date()}
    onChange={() => console.log('change')}
  />
);

const invalidDatepicker = (
  <DatePicker
    // $ExpectError
    onChange={{ foo: 'bar' }}
  />
);
