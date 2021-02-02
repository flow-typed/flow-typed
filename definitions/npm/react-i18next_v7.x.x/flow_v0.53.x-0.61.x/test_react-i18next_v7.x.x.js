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
  getDefaults,
  getI18n,
  setI18n
} from "react-i18next";
import type { TFunction, Translator } from "react-i18next";

const i18n = { loadNamespaces: () => {} };

<I18nextProvider i18n={i18n} children={<div />} />;

// $FlowExpectedError - missing children prop
<I18nextProvider i18n={i18n} />;
// $FlowExpectedError - missing i18n prop
<I18nextProvider children={<div />} />;

// passing
loadNamespaces({ components: [], i18n });
loadNamespaces({ components: [() => <div />], i18n });

// $FlowExpectedError - too few arguments
loadNamespaces();
// $FlowExpectedError - wrong type
loadNamespaces("");
// $FlowExpectedError - wrong component type
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

// $FlowExpectedError - wrong argument type
const FlowErrorComp = ({ s, t }: Props) => t("", "")

class FlowErrorClassComp extends React.Component<Props> {
  render() {
    const { s, t } = this.props;
    // $FlowExpectedError - wrong argument type
    return <div prop={t({})} />; // misuse of t()
  }
}

// passing
const namspaces: Array<string> = ['namespace1', 'namespace2']
translate();
translate(namspaces)
translate('namespace1')
const funcTranslator: Translator<OwnProps, Props> = translate(({ s }: OwnProps) => s)
const funcTranslatorArray: Translator<OwnProps, Props> = translate(({ s }: OwnProps) => [s])
// $FlowExpectedError - wrong argument type
translate({});

const translator: Translator<OwnProps, Props> = translate("");
const WrappedStatelessComp = translator(Comp);

// passing
<WrappedStatelessComp s="" />;

// $FlowExpectedError - missing prop "s"
<WrappedStatelessComp />;
// $FlowExpectedError - wrong type
<WrappedStatelessComp s={1} />;

const WrappedClassComp = translator(ClassComp);

// passing
<WrappedClassComp s="" />;

// $FlowExpectedError - missing prop "s"
<WrappedClassComp />;
// $FlowExpectedError - wrong type
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
// $FlowExpectedError - no children passed to I18n component
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

// $FlowExpectedError - i18nKey prop wrong type
<Interpolate i18nKey={1} />;

// passing
<Trans i18nKey="translation.key" />;
<Trans i18nKey="translation.key" count={5} />;
<Trans i18nKey="translation.key" count={5} parent="div" i18n={i18n} />;

// $FlowExpectedError - i18nKey prop wrong type
<Trans i18nKey={5} />;

// passing
reactI18nextModule.init(i18n);
reactI18nextModule.type;
// $FlowExpectedError - no field property on reactI18nextModule
reactI18nextModule.field;

// passing
setDefaults({ wait: true });
// $FlowExpectedError - setDefaults must be called with an object
setDefaults("option");
// $FlowExpectedError - other is not a valid option
setDefaults({ other: true });

// passing
getDefaults();
// $FlowExpectedError - no arguments should be passed to getDefaults
getDefaults("string");

// passing
getI18n();
// $FlowExpectedError - no arguments should be passed to getI18n
getI18n("string");

// passing
setI18n(i18n);
// $FlowExpectedError - setI18n must be called with an object
setI18n("option");
