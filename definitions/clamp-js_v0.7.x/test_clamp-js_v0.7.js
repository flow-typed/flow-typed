// @flow
import clamp from 'clamp-js';

const element: HTMLElement = (this: any);
clamp(element);
// $ExpectError
clamp(element, { clamp: true })
