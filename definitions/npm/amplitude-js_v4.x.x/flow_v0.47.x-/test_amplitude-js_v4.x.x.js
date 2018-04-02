// @flow

/* eslint-disable no-unused-vars, no-undef, no-console */

import amplitude, { Identify, Revenue } from 'amplitude-js';
import type { AmplitudeClient } from 'amplitude-js';

/**
 * Common instances
 */

const client = amplitude.getInstance();
const identify = new Identify();
const revenue = new Revenue();
const callback = (responseCode: number, responseBody: string) => void 0;

/**
 * ALL THE TESTS START FROM HERE
 */

function getInstanceTest() {
  (amplitude.getInstance(): AmplitudeClient);
  (amplitude.getInstance('name'): AmplitudeClient);

  // $ExpectError: getInstance only accepts strings
  amplitude.getInstance(5);

  // $ExpectError: getInstance only accepts strings
  amplitude.getInstance(new Date());
}

function identifyTests() {
  //* constructor
  (new Identify(): Identify);

  const i: Identify = new Identify();

  //* add
  i.add('foo', 1);
  i.add('bar', -10);

  // $ExpectError: add requies a name as first parameter
  i.add(15, 21);

  // $ExpectError: add requies a number as second parameter
  i.add('foo', 'bar');

  //* append
  i.append('foo', 1);
  i.append('foo', [1]);
  i.append('foo', 'bar');
  i.append('foo', ['bar']);
  i.append('foo', [1, 'bar']);

  //* prepend
  i.prepend('foo', 1);
  i.prepend('foo', [1]);
  i.prepend('foo', 'bar');
  i.prepend('foo', ['bar']);
  i.prepend('foo', [1, 'bar']);

  //* set
  i.set('foo', 1);
  i.set('foo', [1]);
  i.set('foo', 'bar');
  i.set('foo', ['bar']);
  i.set('foo', [1, 'bar']);
  i.set('foo', {});
  i.set('foo', { foo: 1 });
  i.set('foo', { foo: [1] });
  i.set('foo', { foo: 'foo' });
  i.set('foo', { foo: ['foo'] });
  i.set('foo', { foo: [1, 'foo'] });

  //* setOnce
  i.setOnce('foo', 1);
  i.setOnce('foo', [1]);
  i.setOnce('foo', 'bar');
  i.setOnce('foo', ['bar']);
  i.setOnce('foo', [1, 'bar']);
  i.setOnce('foo', {});
  i.setOnce('foo', { foo: 1 });
  i.setOnce('foo', { foo: [1] });
  i.setOnce('foo', { foo: 'foo' });
  i.setOnce('foo', { foo: ['foo'] });
  i.setOnce('foo', { foo: [1, 'foo'] });

  //* unset
  i.unset('foo');
}

function revenueTests() {
  //* constructor
  (new Revenue(): Revenue);

  const r: Revenue = new Revenue();

  //* setProductId
  r.setProductId('pid');

  // $ExpectError: setProductId only accepts strings
  r.setProductId(5);

  // $ExpectError: setProductId only accepts strings
  r.setProductId();

  //* setQuantity
  r.setQuantity(5);
  r.setQuantity();

  // $ExpectError: setProductId only accepts numbers
  r.setQuantity('foo');

  //* setPrice
  r.setPrice(15);

  // $ExpectError: setPrice only accepts numbers
  r.setPrice();

  // $ExpectError: setPrice only accepts numbers
  r.setPrice('foo');

  //* setRevenueType
  r.setRevenueType('cost');

  // $ExpectError: setRevenueType only accepts strings
  r.setRevenueType(5);

  // $ExpectError: setRevenueType only accepts strings
  r.setRevenueType();

  //* setEventProperties
  // $ExpectError: setEventProperties requires arguments
  r.setEventProperties();
  r.setEventProperties({});
  r.setEventProperties({ foo: 1 });
  r.setEventProperties({ foo: [1] });
  r.setEventProperties({ foo: 'foo' });
  r.setEventProperties({ foo: ['foo'] });
  r.setEventProperties({ foo: [1, 'foo'] });
}

function amplitudeClientTests() {
  const client: AmplitudeClient = amplitude.getInstance();

  //* Identify
  (client.Identify: typeof Identify);

  //* Revenue
  (client.Revenue: typeof Revenue);

  //* init
  client.init('key');
  client.init('key', 'uid');
  client.init('key', null, { batchEvents: false });
  client.init('key', 'uid', null, function(c: AmplitudeClient) {});

  //* isNewSession
  (client.isNewSession(): boolean);

  //* getSessionId
  (client.getSessionId(): number);

  //* setDomain
  client.setDomain('foo');

  //* setUserId
  client.setUserId('uid');
  client.setUserId(null);

  //* setGroup
  client.setGroup('orgId', '15');
  client.setGroup('sport', ['soccer', 'tennis']);

  //* setOptOut
  client.setOptOut(true);
  client.setOptOut(false);

  //* regenerateDeviceId
  client.regenerateDeviceId();

  //* setDeviceId
  client.setDeviceId('uid');

  //* setUserProperties
  // $ExpectError: setUserProperties requires arguments
  r.setUserProperties();
  r.setUserProperties({});
  r.setUserProperties({ foo: 1 });
  r.setUserProperties({ foo: [1] });
  r.setUserProperties({ foo: 'foo' });
  r.setUserProperties({ foo: ['foo'] });
  r.setUserProperties({ foo: [1, 'foo'] });

  //* clearUserProperties
  r.clearUserProperties();

  //* identify
  r.identify(identify);
  r.identify(identify, callback);

  //* setVersionName
  r.setVersionName('vname');

  //* logEvent
  r.logEvent('event');
  r.logEvent('event', { foo: 1 });
  r.logEvent('event', null, callback);

  //* logEventWithTimestamp
  r.logEventWithTimestamp('event');
  r.logEventWithTimestamp('event', { foo: 1 });
  r.logEventWithTimestamp('event', null, Date.now());
  r.logEventWithTimestamp('event', null, null, callback);

  //* logEventWithGroups
  r.logEventWithGroups('event');
  r.logEventWithGroups('event', { foo: 1 });
  r.logEventWithGroups('event', null, { orgId: 'some-org-id' });
  r.logEventWithGroups('event', null, null, callback);

  //* logRevenueV2
  r.logRevenueV2(revenue);
}
