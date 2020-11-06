// @flow

import isCurrencyCode from 'validate-currency-code';


const value: boolean = isCurrencyCode('USD')

// $FlowExpectedError if string is not passed into validator
isCurrencyCode()

// $FlowExpectedError if number is passed into validator
isCurrencyCode(1)

