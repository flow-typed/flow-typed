import MessageFormat from 'intl-messageformat';

const message = 'Hello, {name}';
const locale = 'en-US';
const formatter = new MessageFormat(message, locale);

const expectedOptions: {| locale: string |} = formatter.resolvedOptions();

const expectedString: string = formatter.format({ name: 'Alice' });


// Test User Defined Formats

const priceFormat = new MessageFormat('The price is: {price, number, USD}', locale, {
  number: {
    USD: {
      style: 'currency',
      currency: 'USD'
    }
  }
});

priceFormat.format({ price: 100 });

const nullableFormats = new MessageFormat(message, locale, null);

// $FlowExpectedError
const invalidFormats = new MessageFormat(message, locale, { number: { USD: { style: 1 } } });

// $FlowExpectedError
formatter.format(null);

// $FlowExpectedError
formatter.format();

// $FlowExpectedError
const missingLocale = new MessageFormat(message);

// $FlowExpectedError
const missingMessage = new MessageFormat(null, locale);
