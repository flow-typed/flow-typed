//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import type { Theme } from '@material-ui/core/styles/createMuiTheme';

describe('makeStyles(Styles)', () => {
  it('should return shape { root: string }', () => {
    const useStyles = makeStyles({
      root: {
        padding: 10,
      },
    });

    const classes = useStyles();

    (classes.root: string);

    // $ExpectError: check any
    (classes.root: number);

    // $ExpectError: `abc` is missing
    (classes.abc: number);
  });

  describe('Props', () => {
    it('should pass dynamic styles', () => {
      const useStyles = makeStyles({
        root: {
          padding: 10,
        },
        dynamicRoot: ({ width }) => ({ width }),
      });

      const classes = useStyles();

      (classes.root: string);
      (classes.dynamicRoot: string);

      // $ExpectError: check any
      (classes.root: number);
      // $ExpectError: check any
      (classes.dynamicRoot: number);

      // $ExpectError: `abc` is missing
      (classes.abc: number);
    });

    describe('useStyles(props)', () => {
      type Props = { width: number };

      const useStyles = makeStyles<Props, _>({
        dynamicRoot: ({ width }: Props) => {
          (width: number);

          // $ExpectError: check any
          (width: boolean);

          return { width };
        },
      });

      it('should call with required props', () => {
        useStyles({ width: 1 });

        // $ExpectError: `width` mush be a number
        useStyles({ width: '123' });
      });

      it('should call with external classes', () => {
        useStyles({ width: 1, classes: { dynamicRoot: 'str' } });

        // $ExpectError: `__dynamicRoot` is  missing in enum
        useStyles({ width: 1, classes: { __dynamicRoot: 'str' } });
      });

      it('should call without props', () => {
        const classes = useStyles();

        (classes.dynamicRoot: string);

        // $ExpectError: check any
        (classes.dynamicRoot: number);

        // $ExpectError: `abc` is missing
        (classes.abc: number);
      });
    });
  });
});

describe('makeStyles(theme => Styles)', () => {
  it('should pass theme', () => {
    makeStyles(theme => {
      (theme.zIndex.modal: number);

      // $ExpectError: check any
      (theme.zIndex.modal: boolean);

      return {};
    });
  });

  it('should return shape { root: string }', () => {
    const useStyles = makeStyles(theme => ({
      root: {
        zIndex: theme.zIndex.modal,
      },
    }));

    const classes = useStyles();

    (classes.root: string);

    // $ExpectError: check any
    (classes.root: number);

    // $ExpectError: `abc` is missing
    (classes.abc: number);
  });

  describe('Props', () => {
    it('should pass dynamic styles', () => {
      const useStyles = makeStyles(theme => ({
        root: {
          padding: 10,
        },
        dynamicRoot: ({ width }) => ({ width }),
      }));

      const classes = useStyles();

      (classes.root: string);
      (classes.dynamicRoot: string);

      // $ExpectError: check any
      (classes.root: number);
      // $ExpectError: check any
      (classes.dynamicRoot: number);

      // $ExpectError: `abc` is missing
      (classes.abc: number);
    });

    describe('useStyles(props)', () => {
      type Props = { width: number };

      const useStyles = makeStyles<Props, _, _, _>(theme => ({
        dynamicRoot: ({ width }: Props) => {
          (width: number);

          // $ExpectError: check any
          (width: boolean);

          return { width };
        },
      }));

      it('should call with required props', () => {
        useStyles({ width: 1 });

        // $ExpectError: `width` mush be a number
        useStyles({ width: '123' });
      });

      it('should call with external classes', () => {
        useStyles({ width: 1, classes: { dynamicRoot: 'str' } });
      });

      it('should call without props', () => {
        const classes = useStyles();

        (classes.dynamicRoot: string);

        // $ExpectError: check any
        (classes.dynamicRoot: number);

        // $ExpectError: `abc` is missing
        (classes.abc: number);
      });
    });
  });
});

describe('makeStyles(Styles, Options)', () => {
  it('should work when pass valid options', () => {
    declare var myTheme: Theme;

    const useStyles = makeStyles(
      { root: { padding: 10 } },
      {
        flip: false,
        name: 'debugHelpName',
        defaultTheme: myTheme,
      }
    );

    const classes = useStyles();

    (classes.root: string);

    // $ExpectError: check any
    (classes.root: number);

    // $ExpectError: `abc` is missing
    (classes.abc: number);
  });

  it('should raise an error when pass incompatible options types', () => {
    makeStyles(
      { root: { padding: 10 } },
      {
        // $ExpectError: need a boolean
        flip: 69,
      }
    );

    makeStyles(
      { root: { padding: 10 } },
      {
        // $ExpectError: need a string
        name: 69,
      }
    );

    makeStyles(
      { root: { padding: 10 } },
      {
        // $ExpectError: need a Theme object
        defaultTheme: 69,
      }
    );

    // $ExpectError: `abc` is missing in Options
    makeStyles({ root: { padding: 10 } }, { abc: 69 });
  });
});

describe('makeStyles(theme => Styles, Options)', () => {
  it('should work when pass valid options', () => {
    declare var myTheme: Theme;

    const useStyles = makeStyles(
      { root: { padding: 10 } },
      {
        flip: false,
        name: 'debugHelpName',
        defaultTheme: myTheme,
      }
    );

    const classes = useStyles();

    (classes.root: string);

    // $ExpectError: check any
    (classes.root: number);

    // $ExpectError: `abc` is missing
    (classes.abc: number);
  });

  it('should raise an error when pass incompatible options types', () => {
    makeStyles(theme => ({ root: { padding: 10 } }), {
      // $ExpectError: need a boolean
      flip: 69,
    });

    makeStyles(theme => ({ root: { padding: 10 } }), {
      // $ExpectError: need a string
      name: 69,
    });

    makeStyles(theme => ({ root: { padding: 10 } }), {
      // $ExpectError: need a Theme object
      defaultTheme: 69,
    });

    // $ExpectError: `abc` is missing in Options
    makeStyles(theme => ({ root: { padding: 10 } }), { abc: 69 });
  });
});
