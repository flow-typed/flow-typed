declare module 'credit-card-type' {

  declare export type CardBrand =
  | "american-express"
  | "diners-club"
  | "discover"
  | "jcb"
  | "maestro"
  | "mastercard"
  | "unionpay"
  | "visa";

  declare export type CreditCardType = {
    niceType: string,
    type: string,
    prefixPattern: RegExp,
    exactPattern: RegExp,
    gaps: number[],
    lengths: number[],
    code: {
        name: string;
        size: number;
    },
  }

  declare type Library = {
    (cardNumber: string): CreditCardType[];
    types: {
      [key: string]: CreditCardType
    };
    getTypeInfo: (type: string) => CreditCardType | null;
    removeCard: (name: string) => void;
    addCard: (config: CreditCardType) => void;
    changeOrder: (name: string, position: number) => void;
    resetModifications: () => void;
  }

  declare module.exports: Library
}
  