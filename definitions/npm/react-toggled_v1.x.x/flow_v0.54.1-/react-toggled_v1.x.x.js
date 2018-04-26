declare module 'react-toggled' {
  declare export type ToggledProps = {
    on: boolean,
    getTogglerProps<P>(props?: P): {
      ...P,
      'aria-expanded': boolean,
      tabIndex: 0,
      onClick(): void
    },
    getInputTogglerProps<P>(props?: P): {
      ...P,
      'aria-expanded': boolean,
      tabIndex: 0,
      onKeyUp(): void,
      onClick(): void
    },
    getElementTogglerProps<P>(props?: P): {
      ...P,
      'aria-expanded': boolean,
      tabIndex: 0,
      onKeyUp(): void,
      onClick(): void
    },
    setOn(): void,
    setOff(): void,
    toggle(): void
  };

  declare type ReactToggledProps = {
    defaultOn?: boolean,
    onToggle?: (on: boolean, p: ToggledProps) => void,
    on?: boolean,
    children: React$Node | ((ToggledProps) => React$Node)
  };

  declare module.exports: React$ComponentType<ReactToggledProps>;
}
