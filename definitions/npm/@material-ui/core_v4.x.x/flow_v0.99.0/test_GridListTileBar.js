//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { GridListTileBar } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const GridListTileBar1 = require('@material-ui/core/GridListTileBar')
      .default;
    const GridListTileBar0 = require('@material-ui/core/GridListTileBar/GridListTileBar')
      .default;

    <GridListTileBar1 />;
    <GridListTileBar0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <GridListTileBar
      classes={{
        root: 'str',
        titlePositionBottom: 'str',
        titlePositionTop: 'str',
        rootSubtitle: 'str',
        titleWrap: 'str',
        titleWrapActionPosLeft: 'str',
        titleWrapActionPosRight: 'str',
        title: 'str',
        subtitle: 'str',
        actionIcon: 'str',
        actionIconActionPosLeft: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <GridListTileBar
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <GridListTileBar
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <GridListTileBar
      actionIcon={<i />}
      subtitle={<i />}
      title={<i />}
      actionPosition={'left'}
      titlePosition={'top'}
    />;

    <GridListTileBar actionPosition={'right'} titlePosition={'bottom'} />;
  });

  it('should raises an error when pass incompatible types', () => {
    <GridListTileBar
      // $ExpectError: need react node
      actionIcon={() => null}
      // $ExpectError: need react node
      subtitle={() => null}
      // $ExpectError: need react node
      title={() => null}
      // $ExpectError: '__ups' missing in enum
      actionPosition={'__ups'}
      // $ExpectError: '__ups' missing in enum
      titlePosition={'__ups'}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <GridListTileBar aria-hidden="true" />;
  });
});
