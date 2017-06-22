/* @flow */
import React from 'react';
import { intlShape, addLocaleData, defineMessages, injectIntl } from 'react-intl';
import { FormatMessage } from 'react-intl';

const localeData: LocaleData = {
  locale: 'fi',
  testKey: { foo: 'bar' },
  testKey2: { baz: 'buu' },
};

// Functions
intlShape({ foo: 'bar' }, 'propName', 'TestComponentName');
// $ExpectError number. This type is incompatible with void
const result1: number = intlShape({ foo: 'bar' }, 'propName', 'TestComponentName');

addLocaleData(localeData);

/*
declare function intlShape(props: Object, propName: string, componentName: string): void;
declare function addLocaleData(data: LocaleData | Array<LocaleData>): void;
declare function defineMessages(messageDescriptors: MessageDescriptorMap): MessageDescriptorMap;
declare function injectIntl(
  WrappedComponent: ReactClass<*>,
  options?: {
    intlPropName: string,
    withRef: boolean,
  }
): ReactClass<*>;
declare function formatMessage(messageDescriptor: MessageDescriptor, values?: Object): string;
declare function formatHTMLMessage(messageDescriptor: MessageDescriptor, values?: Object): string;
declare function formatDate(value: any, options?: DateTimeFormatOptions & { format: string }): string;
declare function formatTime(value: any, options?: DateTimeFormatOptions & { format: string }): string;
declare function formatRelative(value: any, options?: RelativeFormatOptions & { format: string, now: any }): string;
declare function formatNumber(value: any, options?: NumberFormatOptions & { format: string }): string;
declare function formatPlural(value: any, options?: PluralFormatOptions): PluralCategoryString;
*/
// Components
<FormatMessage id="test" defaultMessage="test message" description="this is description" />;
