// @flow

import { format, findCurrency, currencies } from 'currency-formatter';
import currencies2 from 'currency-formatter/currencies';

(currencies[0].code: string);

(currencies2[0].code: string);

// $FlowExpectedError is string, not number
(currencies[0].symbol: number);

// $FlowExpectedError is string, not number
(currencies2[0].symbol: number);


format(22, {});

// $FlowExpectedError opts is missing
format(22);

// $FlowExpectedError amount is number
format('22', {});

format(22, { format: { neg: '', pos: '', zero: '' } });

// $FlowExpectedError all formats must be covered
format(22, { format: { neg: '' } });


// $FlowExpectedError is nullable
findCurrency('GBP').code;

let gbp = findCurrency('GBP');
if (gbp) {
  (gbp.code: string);

  // $FlowExpectedError is string
  (gbp.symbol: boolean);
}
