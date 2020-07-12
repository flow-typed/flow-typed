// @flow

import React from 'react'
import {
  loadNamespaces,
  translate,
  I18nextProvider,
  Interpolate,
} from 'react-i18next'
import type { TFunction, Translator } from 'react-i18next'

const i18n = { loadNamespaces: () => {} };

<I18nextProvider i18n={ i18n } children={ <div /> } />;

// $FlowExpectedError - missing children prop
<I18nextProvider i18n={ i18n } />;
// $FlowExpectedError - missing i18n prop
<I18nextProvider children={ <div /> } />;


// passing
loadNamespaces({ components: [], i18n });
loadNamespaces({ components: [() => <div />], i18n });

// $FlowExpectedError - too few arguments
loadNamespaces();
// $FlowExpectedError - wrong type
loadNamespaces('');
// $FlowExpectedError - wrong component type
loadNamespaces({ components: [{}], i18n });

type OwnProps = { s: string };
type Props = OwnProps & { t: TFunction };

const Comp = ({ s, t }: Props) => (
  <div
    prop1={ t('') }
    prop2={ ' ' + s }
  />
);

class ClassComp extends React.Component {
  props: Props;
  render() {
    const { s, t } = this.props;
    return <div prop={ t('') } />;
  }
}

// $FlowExpectedError - wrong argument type
const FlowErrorComp = ({ s, t }: Props) => (
  <div
    prop1={ t('', '') } // misuse of t()
    prop2={ ' ' + s }
  />
);

class FlowErrorClassComp extends React.Component {
  props: Props;
  render() {
    // $FlowExpectedError - wrong argument type
    const { s, t } = this.props;
    return <div prop={ t({}) } />; // misuse of t()
  }
}

// $FlowExpectedError - too few arguments
translate();
// $FlowExpectedError - wrong argument type
translate({});

const translator: Translator<OwnProps, Props> = translate('');
const WrappedStatelessComp = translator(Comp);

// passing
<WrappedStatelessComp s="" />;

// $FlowExpectedError - missing prop "s"
<WrappedStatelessComp />;
// $FlowExpectedError - wrong type
<WrappedStatelessComp s={ 1 } />;

const WrappedClassComp = translator(ClassComp);

// passing
<WrappedClassComp s="" />;

// $FlowExpectedError - missing prop "s"
<WrappedClassComp />;
// $FlowExpectedError - wrong type
<WrappedClassComp s={ 1 } />;

// passing
<Interpolate />;
<Interpolate children={ <div /> } className="string" />;

// $FlowExpectedError - className prop wrong type
<Interpolate className={ null } />;
// $FlowExpectedError - children prop wrong type
<Interpolate children={ {} } />;
