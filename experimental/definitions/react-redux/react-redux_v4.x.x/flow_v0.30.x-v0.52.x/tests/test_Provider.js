// @flow
import React from 'react'
import { Provider } from 'react-redux'

// $ExpectError
const provider = <Provider />; // missing store
