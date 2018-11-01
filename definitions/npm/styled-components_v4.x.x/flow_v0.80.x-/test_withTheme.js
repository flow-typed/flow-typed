import * as React from 'react'
import {
  withTheme,
  type Theme
} from 'styled-components'

type Props = {
  ownProp : string,
  theme : Theme
}

const MyComp = (props : Props) =>
  <div>
    {props.ownProp}
  </div>

const MyCompWT = withTheme(MyComp)

// $ExpectError - missing theme prop
const mc = <MyComp ownProp="own prop" />
const mcwt = <MyCompWT ownProp="own prop" />

// $ExpectError - wrong prop
const mcwt2 = <MyCompWT ownProp={0} />
