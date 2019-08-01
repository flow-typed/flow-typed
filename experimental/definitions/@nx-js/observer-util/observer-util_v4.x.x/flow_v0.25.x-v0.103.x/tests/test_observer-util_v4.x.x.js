// @flow

import {observable, isObservable, observe, unobserve} from '@nx-js/observer-util';

const time = observable({seconds: 10});
let check: boolean = isObservable(time);
const logger = observe(() => console.log(time.seconds));
unobserve(logger);

// $ExpectError
const errorLogger = observe(time);

// $ExpectError
const errorTime = observable(2);
