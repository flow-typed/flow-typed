// @flow
import BodyClassName from 'react-body-classname';
import React from 'react';

const shouldWork = () => (
  <BodyClassName className="somehting" />
);

const shouldWorkWithChildren = () => (
  <BodyClassName className="somehting">
    <h1>Works!</h1>
  </BodyClassName>
);

const shouldFailNonString = () => (
  // $ExpectError fails on type of props
  <BodyClassName className={false} />
);


const shouldFailMissingProp = () => (
  // $ExpectError should not be allowed
  <BodyClassName />
);

(BodyClassName.rewind(): string);
// $ExpectError
(BodyClassName.rewind(): false);
