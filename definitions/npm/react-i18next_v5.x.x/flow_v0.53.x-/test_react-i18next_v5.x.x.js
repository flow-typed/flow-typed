// @flow

import * as React from "react";
import {
  loadNamespaces,
  translate,
  I18nextProvider,
  Interpolate,
  type TranslatorProps,
  type LegacyTranslator,
  type TFunction
} from "react-i18next";

const i18n = { loadNamespaces: () => {} };

<I18nextProvider i18n={i18n}>
  <div />
</I18nextProvider>;

// $ExpectError - missing children prop
<I18nextProvider i18n={i18n} />;
// $ExpectError - missing i18n prop
<I18nextProvider children={<div />} />;

// passing
loadNamespaces({ components: [], i18n });
loadNamespaces({ components: [() => <div />], i18n });

// $ExpectError - too few arguments
loadNamespaces();
// $ExpectError - wrong type
loadNamespaces("");
// $ExpectError - wrong component type
loadNamespaces({ components: [{}], i18n });

type Props = { s: string } & TranslatorProps;

// $ExpectError - wrong argument type
const FlowErrorComp = ({ s, t }: Props) =>
  <div
    prop1={t("", "")} // misuse of t()
    prop2={" " + s}
  />;

class FlowErrorClassComp extends React.Component<Props> {
  render() {
    // $ExpectError - wrong argument type
    const { s, t } = this.props;
    return <div prop={t({})} />; // misuse of t()
  }
}

// $ExpectError - too few arguments
translate();
// $ExpectError - wrong argument type
translate({});

const StatelessComp = ({ s, t }: Props) =>
  <div prop1={t("")} prop2={" " + s} />;

const WrappedStatelessComp = translate("")(StatelessComp);

// passing
<WrappedStatelessComp s="" />;

// $ExpectError - missing prop "s"
<WrappedStatelessComp />;
// $ExpectError - wrong type
<WrappedStatelessComp s={1} />;

class ClassComp extends React.Component<Props> {
  render() {
    const { s, t } = this.props;
    return <div prop={t("")} />;
  }
}

const WrappedClassComp = translate("")(ClassComp);

// passing
<WrappedClassComp s="s" />;

// $ExpectError - missing prop "s"
<WrappedClassComp />;
// $ExpectError - wrong type
<WrappedClassComp s={1} />;

// passing
<Interpolate />;
<Interpolate children={<div />} className="string" />;

// $ExpectError - className prop wrong type
<Interpolate className={null} />;
// $ExpectError - children prop wrong type
<Interpolate children={{}} />;

// Works with legacy syntax

type LegacyProps = { s: string };
type LegacyPropsWithT = LegacyProps & { t: TFunction };

const LegacyStatelessComp = ({ s, t }: LegacyPropsWithT) => {
  return <div prop1={t("")} prop2={" " + s} />;
};

const translator: LegacyTranslator<LegacyProps, LegacyPropsWithT> = translate(
  ""
);
const LegacyWrappedClassComp = translator(LegacyStatelessComp);

// passing
<LegacyWrappedClassComp s="s" />;

// $ExpectError - missing prop "s"
<LegacyWrappedClassComp />;
// $ExpectError - wrong type
<LegacyWrappedClassComp s={1} />;
