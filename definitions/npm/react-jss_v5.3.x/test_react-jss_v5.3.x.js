// @flow

import React from 'react';
import injectSheet from 'react-jss';
import type { JSSProps, FunctionComponent, ClassComponent } from 'react-jss';

type OwnProps = {
  text: string,
};

const style = {
  red: {
    background: 'red',
  },
};

type Props = OwnProps & JSSProps<typeof style>;

const Func = ({ classes, text }: Props) => {
  return <div className={classes.red}>{text}</div>;
};

class Clas extends React.Component {
  render () {
    const { classes, text } = this.props;
    return <div className={classes.red}>{text}</div>;
  }
}

export const StyledFunc = injectSheet(style)(Func);

export const StyledClass = injectSheet(style)(Clas);

const OkayFunc = <div><StyledFunc text='text'/></div>
// $ExpectError
const NoPropFunc = <div><StyledFunc /></div>

class OkayClass extends React.Component {
    render() {
        return <div><StyledClass text='text'/></div>
    }
}

class NoPropClass extends React.Component {
    render() {
        // $ExpectError
        return <div><StyledClass /></div>
    }
}