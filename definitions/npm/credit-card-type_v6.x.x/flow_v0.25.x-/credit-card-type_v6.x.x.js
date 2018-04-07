declare module 'credit-card-type' {
  declare type ICardType = {
    niceType: string,
    type: string,
    prefixPattern: RegExp,
    exactPattern: RegExp,
    gaps: number[],
    lengths: number[],
    code: {
      name: string,
      size: number
    }
  }

  declare type ILibrary = {
    (cardNumber: string): ICardType[];
    types: {
      [key: string]: ICardType
    };
    getTypeInfo: (type: string) => ICardType | null;
    removeCard: (name: string) => void;
    addCard: (config: ICardType) => void;
    changeOrder: (name: string, position: number) => void;
    resetModifications: () => void;
  }

  declare module.exports: ILibrary
}
