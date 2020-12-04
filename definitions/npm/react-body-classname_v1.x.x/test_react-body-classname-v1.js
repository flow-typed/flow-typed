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
  // $FlowExpectedError fails on type of props
  <BodyClassName className={false} />
);


const shouldFailMissingProp = () => (
  // $FlowExpectedError should not be allowed
  <BodyClassName />
);

(BodyClassName.rewind(): string);
// $FlowExpectedError
(BodyClassName.rewind(): false);
