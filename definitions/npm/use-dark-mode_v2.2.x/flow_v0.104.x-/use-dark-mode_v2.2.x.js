declare module 'use-dark-mode' {
  declare export type DarkModeConfig = {|
    classNameDark?: string,
    classNameLight?: string,
    element?: HTMLElement,
    onChange?: (value: boolean) => void,
  |};

  declare export type DarkMode = {|
    +value: boolean,
    enable: () => void,
    disable: () => void,
    toggle: () => void,
  |};

  declare export default function useDarkMode(
    initialState?: boolean,
    config?: DarkModeConfig
  ): DarkMode;
}
