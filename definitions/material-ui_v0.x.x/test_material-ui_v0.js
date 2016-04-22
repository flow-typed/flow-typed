// @flow
import { AppBar } from 'material-ui';
import React from 'react';

describe("type-checking", () => {
  it("fail on AppBar", () => {
    // $ExpectError Wrong attributes
    const element = <AppBar className={false} showMenuIconButton={null} />;

  })
})
