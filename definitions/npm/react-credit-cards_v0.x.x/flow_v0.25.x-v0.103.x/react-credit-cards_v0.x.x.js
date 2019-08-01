// @flow

declare module 'react-credit-cards' {
  declare export type CallbackArgument = {
    isValid: boolean,
    type: { issuer: string, maxLength: number }
  };

  declare export type  Focused = "name" | "number" | "expiry" | "cvc";

  declare export type ReactCreditCardProps = {
    acceptedCards?: string[],
    callback?: (type: CallbackArgument, isValid: boolean) => void,
    cvc: string | number,
    expiry: string,
    focused?: Focused,
    issuer?: string,
    locale?: { valid: string },
    name: string,
    number: string | number,
    placeholders?: { name: string },
    preview?: boolean
  };

  declare export default class ReactCreditCard extends React$Component<ReactCreditCardProps> {}
}
