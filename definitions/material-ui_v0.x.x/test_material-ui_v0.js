// @flow
import { AppBar } from 'material-ui';
import React from 'react';

// $ExpectError Wrong attributes
const element = <AppBar className={false} showMenuIconButton={null} />;
