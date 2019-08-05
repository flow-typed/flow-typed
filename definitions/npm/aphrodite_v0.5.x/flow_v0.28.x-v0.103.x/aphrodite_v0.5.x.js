declare module "aphrodite" {
  declare type DehydratedServerContent = {
    html: string,
    css: {
      content: string,
      renderedClassNames: Array<string>
    }
  };

  declare type SheetDefinition = {
    [key: string]: Object
  };

  declare export type StyleDefinition = {
    [key: string]: {
      _name: string,
      _definition: Object
    }
  };

  declare export var css: (
    ...definitions: Array<StyleDefinition | false>
  ) => string;

  declare export var StyleSheetServer: {
    renderStatic(renderFunc: Function): DehydratedServerContent
  };

  declare export var StyleSheet: {
    create(
      sheetDefinition: SheetDefinition
    ): {
      [key: string]: StyleDefinition
    }
  };

  declare export var StyleSheetTestUtils: {
    suppressStyleInjection: () => void,
    clearBufferAndResumeStyleInjection: () => void
  };
}

declare module "aphrodite/no-important" {
  declare module.exports: $Exports<"aphrodite">;
}
