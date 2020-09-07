// @flow
import { describe, it } from 'flow-typed-test';
import dayjs from 'dayjs';

const dayjsInstance = dayjs('2019-01-01');

dayjsInstance.unix()

describe('dayjs', function() {
  it('dayjs instance work', function() {
    const _dayjs = dayjs('2019-01-01');
    dayjs.isDayjs(_dayjs)
    dayjs.isDayjs(0)
  })
})

// $FlowExpectedError
dayjsInstance.unix2()
