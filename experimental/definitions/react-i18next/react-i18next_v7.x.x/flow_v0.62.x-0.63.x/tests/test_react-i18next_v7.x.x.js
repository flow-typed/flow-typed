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
import type {
  TFunction,
  TranslateOptions,
  TranslatorProps
} from "react-i18next";
import { describe, it } from "flow-typed-test";

const i18n = { loadNamespaces: () => {} };

describe("react-i18next", () => {
  describe("<I18nextProvider />", () => {
    it("passes when passed correct props", () => {
      <I18nextProvider i18n={i18n} children={<div />} />;
    });

    it("raises error when missing children prop", () => {
      // $ExpectError - missing children prop
      <I18nextProvider i18n={i18n} />;
    });

    it("raises error when missing i18n prop", () => {
      // $ExpectError - missing i18n prop
      <I18nextProvider children={<div />} />;
    });
  });

  describe("loadNamespaces", () => {
    it("passes when called with correct arguments", () => {
      loadNamespaces({ components: [], i18n });
      loadNamespaces({ components: [() => <div />], i18n });
    });

    it("raises error when called with incorrect arguments", () => {
      // $ExpectError - too few arguments
      loadNamespaces();
      // $ExpectError - wrong type
      loadNamespaces("");
      // $ExpectError - wrong components type
      loadNamespaces({ components: [{}], i18n });
    });
  });

  describe("TFunction", () => {
    it("passes when passed valid arguments", () => {
      const testFn = (t: TFunction) => {
        t("key");
        t("key", { val: "val" });
      };
    });

    it("errors when passed invalid arguments", () => {
      const testFn = (t: TFunction) => {
        // $ExpectError wrong second argument type
        t("key", "key2");
        // $ExpectError First argument must be a string
        t({ val: "val" });
      };
    });
  });

  describe("translate HOC", () => {
    it("passes when called with correct arguments", () => {
      const namspaces: Array<string> = ["namespace1", "namespace2"];
      translate();
      translate(namspaces);
      translate("namespace1");
      translate(({ s }) => s);
      translate(({ s }) => [s]);
    });

    it("errors when called with invalid arguments", () => {
      // $ExpectError - wrong argument type
      translate({});
    });

    describe("Stateless Functional Components", () => {
      it("passes if the component is passed required props", () => {
        const Comp = ({ s, t }: { s: string, t: TFunction }) => (
          <div prop1={t("")} prop2={" " + s} />
        );
        const WrappedComp = translate()(Comp);
        <WrappedComp s="" />;
      });

      it("errors if the component is missing required props", () => {
        // $ExpectError - missing prop "s"
        const Comp = ({ s, t }: { s: string, t: TFunction }) => (
          <div prop1={t("")} prop2={" " + s} />
        );
        const WrappedComp = translate()(Comp);
        <WrappedComp />;
      });

      it("errors if the component is passed props of the wrong type", () => {
        // $ExpectError - wrong type
        const Comp = ({ s, t }: { s: string, t: TFunction }) => (
          <div prop1={t("")} prop2={" " + s} />
        );
        const WrappedComp = translate()(Comp);
        // $ExpectError - wrong type
        <WrappedComp s={1} />;
      });
    });

    describe("Class Components", () => {
      it("passes if the component is passed required props", () => {
        class Comp extends React.Component<{ s: string, t: TFunction }> {
          render() {
            const { s, t } = this.props;
            return <span>{t(s)}</span>;
          }
        }
        const WrappedComp = translate()(Comp);
        <WrappedComp s="" />;
      });

      it("errors if the component is missing required props", () => {
        class Comp extends React.Component<{ s: string, t: TFunction }> {
          render() {
            const { s, t } = this.props;
            return <span>{t(s)}</span>;
          }
        }
        // $ExpectError - missing prop "s"
        const WrappedComp = translate()(Comp);
        <WrappedComp />;
      });

      it("errors if the component is passed props of the wrong type", () => {
        class Comp extends React.Component<{ s: string, t: TFunction }> {
          render() {
            const { s, t } = this.props;
            return <span>{t(s)}</span>;
          }
        }
        // $ExpectError - wrong type
        const WrappedComp = translate()(Comp);
        // $ExpectError - wrong type
        <WrappedComp s={1} />;
      });
    });
  });

  describe("<I18n />", () => {
    it("passes when passed correct props", () => {
      <I18n>{(t: TFunction) => <span>{t("title")}</span>}</I18n>;
      <I18n ns="translations">
        {(t: TFunction, { i18n }: { i18n: Object }) => (
          <div>
            <span>{t("title")}</span>
            <button onClick={() => i18n.changeLanguage("de")}>de</button>
            <button onClick={() => i18n.changeLanguage("en")}>en</button>
          </div>
        )}
      </I18n>;
    });

    it("errors when no children are passed", () => {
      // $ExpectError - no children passed to I18n component
      <I18n ns="translations" />;
    });
  });

  describe("<Interpolate />", () => {
    it("passes when passed correct props", () => {
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
    });

    it("fails when passed props of wrong type", () => {
      // $ExpectError - i18nKey prop wrong type
      <Interpolate i18nKey={1} />;
    });
  });

  describe("<Trans />", () => {
    it("passes when passed correct props", () => {
      <Trans i18nKey="translation.key" />;
      <Trans i18nKey="translation.key" count={5} />;
      <Trans i18nKey="translation.key" count={5} parent="div" i18n={i18n} />;
    });

    it("errors when passed props of wrong type", () => {
      // $ExpectError - i18nKey prop wrong type
      <Trans i18nKey={5} />;
    });
  });

  describe("reactI18nextModule", () => {
    it("has correct properties", () => {
      reactI18nextModule.init(i18n);
      reactI18nextModule.type;
    });

    it("errors if trying to access an unknown property", () => {
      // $ExpectError - no field property on reactI18nextModule
      reactI18nextModule.field;
    });
  });

  describe("setDefaults", () => {
    it("passes when passed an object with allowed properties", () => {
      setDefaults({ wait: true });
    });

    it("errors if passes a non-object or an invalid proeprty", () => {
      // $ExpectError - setDefaults must be called with an object
      setDefaults("option");
      // $ExpectError - other is not a valid option
      setDefaults({ other: true });
    });
  });

  describe("getDefaults", () => {
    it("passes when called without an argument", () => {
      const options: TranslateOptions = getDefaults();
    });

    it("errors if passed an argument", () => {
      // $ExpectError - no arguments should be passed to getDefaults
      getDefaults("string");
    });
  });

  describe("getI18n", () => {
    it("passes when called without an argument", () => {
      getI18n();
    });

    it("errors if passed an argument", () => {
      // $ExpectError - no arguments should be passed to getI18n
      getI18n("string");
    });
  });

  describe("setI18n", () => {
    it("passes when called with an object", () => {
      setI18n(i18n);
    });

    it("errors if passed a non-object", () => {
      // $ExpectError - i18n object should be passed to setI18n
      setI18n("string");
    });
  });
});
