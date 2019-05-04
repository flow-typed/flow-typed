//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Box } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const Box1 = require('@material-ui/core/Box').default;
    const Box0 = require('@material-ui/core/Box/Box').default;

    <Box1 />;
    <Box0 />;
  });
});

describe('css props', () => {
  it('should passes when used properly', () => {
    <Box
      display="table"
      width={10}
      height="100%"
      color="inherit"
      textAlign="center"
    />;
  });

  it('should raises an error when pass incompatible css values', () => {
    <Box
      // $ExpectError
      flexDirection="ups"
      // $ExpectError: need string
      color={123}
      // $ExpectError
      textAlign="startstartstartstart"
    />;
  });
});
describe('own props', () => {
  it('should passes when used properly', () => {
    <Box clone={false} bgcolor={'red'} displayPrint={'displayPrint'} />;

    <Box clone={undefined} bgcolor={undefined} displayPrint={undefined} />;

    <Box
      m={69}
      mb={69}
      ml={69}
      mr={69}
      mt={69}
      mx={69}
      my={69}
      order={69}
      p={69}
      pb={69}
      pl={69}
      pr={69}
      pt={69}
      px={69}
      py={69}
    />;

    <Box
      m="9"
      mb="9"
      ml="9"
      mr="9"
      mt="9"
      mx="9"
      my="9"
      order="9"
      p="9"
      pb="9"
      pl="9"
      pr="9"
      pt="9"
      px="9"
      py="9"
    />;

    <Box
      m={undefined}
      mb={undefined}
      ml={undefined}
      mr={undefined}
      mt={undefined}
      mx={undefined}
      my={undefined}
      order={undefined}
      p={undefined}
      pb={undefined}
      pl={undefined}
      pr={undefined}
      pt={undefined}
      px={undefined}
      py={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    // $ExpectError: need string
    <Box bgcolor={1} />;
    // $ExpectError: need boolean
    <Box clone={'true'} />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Box aria-hidden="true" />;
  });
});
