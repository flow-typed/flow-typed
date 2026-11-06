/** @flow */

new Intl.Segmenter(); // correct
new Intl.Segmenter('en-US'); // correct
const segmenterFr = new Intl.Segmenter('fr', { granularity: 'word' }); //correct
segmenterFr.segment('fdsf'); // correct
segmenterFr.resolvedOptions(); // correct
// $FlowExpectedError[incompatible-type]
new Intl.Segmenter('is', { granularity: 'paragraph' }); //incorrect
new Intl.Segmenter('en-US', { localeMatcher: 'best fit' }); // correct
// $FlowExpectedError[incompatible-type]
Intl.Segmenter.supportedLocalesOf(); // incorrect
Intl.Segmenter.supportedLocalesOf(['is-IS']); // correct
Intl.Segmenter.supportedLocalesOf(['de-ID'], { localeMatcher: 'lookup' }); // correct
// $FlowExpectedError[incompatible-type]
Intl.Segmenter.supportedLocalesOf(['de-ID'], {
  granularity: 'string',
  localeMatcher: 'lookup',
}); // incorrect
