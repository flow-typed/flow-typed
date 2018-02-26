declare module 'react-toggled' {
  declare export type ToggledProps = {
    on: boolean,
    getTogglerProps(): {
      'aria-expanded': boolean,
      tabIndex: 0,
      onClick(): void
    },
    getInputTogglerProps(): {
      'aria-expanded': boolean,
      tabIndex: 0,
      onKeyUp(): void,
      onClick(): void
    },
    getElementTogglerProps(): {
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
    onToggle?: ({ on: boolean, p: ToggledProps }) => void,
    on?: boolean,
    children: (ToggledProps) => React$Node | React$Node
  };

  declare module.exports: React$ComponentType<ReactToggledProps>;
}
