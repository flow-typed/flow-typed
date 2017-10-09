// @flow

import * as React from "react";
import {
  loadNamespaces,
  translate,
  I18nextProvider,
  I18n,
  Interpolate,
  Trans,
  setDefaults,
  reactI18nextModule,
  defaultOptions,
  getDefaults,
  getI18n,
  setI18n
} from "react-i18next";
import type { TFunction, Translator } from "react-i18next";

const i18n = { loadNamespaces: () => {} };

<I18nextProvider i18n={i18n} children={<div />} />;

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

type OwnProps = { s: string };
type Props = OwnProps & { t: TFunction };

const Comp = ({ s, t }: Props) => <div prop1={t("")} prop2={" " + s} />;

class ClassComp extends React.Component<Props> {
  render() {
    const { s, t } = this.props;
    return <div prop={t("")} />;
  }
}

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

// passing
translate();
// $ExpectError - wrong argument type
translate({});

const translator: Translator<OwnProps, Props> = translate("");
const WrappedStatelessComp = translator(Comp);

// passing
<WrappedStatelessComp s="" />;

// $ExpectError - missing prop "s"
<WrappedStatelessComp />;
// $ExpectError - wrong type
<WrappedStatelessComp s={1} />;

const WrappedClassComp = translator(ClassComp);

// passing
<WrappedClassComp s="" />;

// $ExpectError - missing prop "s"
<WrappedClassComp />;
// $ExpectError - wrong type
<WrappedClassComp s={1} />;

// passing
<I18n>
  {(t: TFunction) =>
    <span>
      {t("title")}
    </span>}
</I18n>;
<I18n ns="translations">
  {(t: TFunction, { i18n }: { i18n: Object }) =>
    <div>
      <span>
        {t("title")}
      </span>
      <button onClick={() => i18n.changeLanguage("de")}>de</button>
      <button onClick={() => i18n.changeLanguage("en")}>en</button>
    </div>}
</I18n>;
// $ExpectError - no children passed to I18n component
<I18n ns="translations" />;

// passing
<Interpolate />;
<Interpolate i18nKey="translation.key" keyValue={5} />;
<Interpolate
  className="string"
  dangerouslySetInnerHTMLPartElement="span"
  i18n={i18n}
  i18nKey="translation.key"
  options={{}}
  parent="div"
  style={{}}
  t={key => ""}
  useDangerouslySetInnerHTML={true}
/>;

// $ExpectError - i18nKey prop wrong type
<Interpolate i18nKey={1} />;

// passing
<Trans i18nKey="translation.key" />;
<Trans i18nKey="translation.key" count={5} />;
<Trans i18nKey="translation.key" count={5} parent="div" i18n={i18n} />;

// $ExpectError - i18nKey prop wrong type
<Trans i18nKey={5} />;

// passing
reactI18nextModule.init(i18n);
reactI18nextModule.type;
// $ExpectError - no field property on reactI18nextModule
reactI18nextModule.field;

// passing
defaultOptions.wait;
defaultOptions.withRef;
defaultOptions.bindI18n;
defaultOptions.bindStore;
defaultOptions.translateFuncName;
defaultOptions.nsMode;
// $ExpectError - no field property on defaultOptions
defaultOptions.field;

// passing
setDefaults({ wait: true });
// $ExpectError - setDefaults must be called with an object
setDefaults("option");
// $ExpectError - other is not a valid option
setDefaults({ other: true });

// passing
getDefaults();
// $ExpectError - no arguments should be passed to getDefaults
getDefaults("string");

// passing
getI18n();
// $ExpectError - no arguments should be passed to getI18n
getI18n("string");

// passing
setI18n(i18n);
// $ExpectError - setI18n must be called with an object
setI18n("option");
