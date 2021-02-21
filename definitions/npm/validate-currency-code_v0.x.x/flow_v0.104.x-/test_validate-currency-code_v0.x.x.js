// @flow

import isCurrencyCode from 'validate-currency-code';


const value: boolean = isCurrencyCode('USD')

// $FlowExpectedError[incompatible-call] if string is not passed into validator
isCurrencyCode()

// $FlowExpectedError[incompatible-call] if number is passed into validator
isCurrencyCode(1)

