// @flow
import * as React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles : React.ComponentType<*> = createGlobalStyle``

const App = () =>
  <div>
    <GlobalStyles />
  </div>

// @NOTE not sure what better way to test this...
