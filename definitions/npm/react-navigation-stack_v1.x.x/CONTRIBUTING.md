# Contributing to the React Navigation Flow libdef

## Overview

There are five React Navigation libdefs in `flow-typed`:

1. `react-navigation`
2. `react-navigation-stack`
3. `react-navigation-tabs`
4. `react-navigation-drawer`
5. `@react-navigation/core`

It's not currently possible to import types between libdefs. Consequently, many of the same types are copy-pasted across the different libdefs.

Each of these libdefs is organized into several sections:

1. Section 1: exported types, identical across all React Navigation Flow libdefs
    - Section 1A: types copy-pasted from React Native source
    - Section 1B: exported types
2. Section 2: exported types, shared with some but not all React Navigation Flow libdefs
    - Section 2A: types copy-pasted from other places
    - Section 2B: exported types
3. Section 3: exported types, NOT shared with other React Navigation libdefs
4. Section 4: types the exported module

## Contributing Guidelines

1. If you find yourself making a change to a libdef in sections 1, 2, or 4, then you might need to update other libdefs as well.
2. Note that these packages have independent versioning schemes. If you're introducing a change to one libdef that applies to others, you'll need to consider what corresponding versions introduced the change.

## Contributors

- @Ashoat
