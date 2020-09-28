// @flow strict

import cloudinary from 'cloudinary';
import { describe, it } from 'flow-typed-test';

describe('cloudinary', () => {
  it('errors', () => {
    // $FlowExpectedError
    cloudinary.config();
    // $FlowExpectedError
    cloudinary.url();
  });

  it('config', () => {
    (cloudinary.config({
      cloud_name: 'foo',
      api_key: 'mykey',
      api_secret: 'mysecret',
    }): void);
  });

  it('url', () => {
    (cloudinary.url('foo'): string);
    (cloudinary.url('bar', {
      secure: true,
      transformation: [
        { width: 320, height: 256, crop: 'fit' },
        { width: 320, height: 256, crop: 'limit', quality: 60 },
      ],
    }): string);
  });
});
