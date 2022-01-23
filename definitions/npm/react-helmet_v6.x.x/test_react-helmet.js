// @flow
import React from 'react';
import Helmet from 'react-helmet';
import { describe, it } from 'flow-typed-test';

describe('react-helmet', () => {
  it('renders meta tags', () => {
    <Helmet>
      <meta charSet="utf-8" />
      <title>Title</title>
      <link rel="canonical" href="http://site.com/example" />
    </Helmet>;
  });

  it('overrides meta tags', () => {
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Title</title>
        <link rel="canonical" href="http://site.com/example" />
      </Helmet>
      ;
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>New Title</title>
          <link rel="canonical" href="http://newsite.com/example" />
        </Helmet>
        ;
      </div>
    </div>;
  });
});
