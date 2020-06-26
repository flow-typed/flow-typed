# Contributing to the React Navigation Flow libdef

## Overview

There are eight React Navigation libdefs in `flow-typed`:

1. `@react-navigation/core`
2. `@react-navigation/native`
3. `@react-navigation/stack`
4. `@react-navigation/bottom-tabs`
5. `@react-navigation/material-bottom-tabs`
6. `@react-navigation/material-top-tabs`
7. `@react-navigation/drawer`
8. `@react-navigation/devtools`

It's not currently possible to import types between libdefs. Consequently, many of the same types are copy-pasted across the different libdefs.

Each libdef is organized into two sections. The first section should be identical between all of the libdefs. If you make a change to this section, please make sure to mirror it across the other libdefs.

## Contributors

- @Ashoat
