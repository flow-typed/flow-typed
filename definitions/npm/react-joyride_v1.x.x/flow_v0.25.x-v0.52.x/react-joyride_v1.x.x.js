import React from "react";

type ReactJoyride$LocaleOption = {
  back?: string,
  close?: string,
  last?: string,
  next?: string,
  skip?: string
};

type ReactJoyride$DefaultProps = {
  debug: boolean,
  keyboardNavigation: boolean,
  locale: ReactJoyride$LocaleOption,
  resizeDebounce: boolean,
  resizeDebounceDelay: number,
  scrollOffset: number,
  scrollToFirstStep: boolean,
  scrollToSteps: boolean,
  showBackButton: boolean,
  showOverlay: boolean,
  showSkipButton: boolean,
  showStepsProgress: boolean,
  steps: any[],
  tooltipOffset: number,
  type: "continous" | "single"
};

type ReactJoyride$Props = {
  completeCallback?: Function,
  debug?: boolean,
  keyboardNavigation?: boolean,
  locale?: ReactJoyride$LocaleOption,
  resizeDebounce?: boolean,
  resizeDebounceDelay?: number,
  scrollOffset?: number,
  scrollToFirstStep?: boolean,
  scrollToSteps?: boolean,
  showBackButton?: boolean,
  showOverlay?: boolean,
  showSkipButton?: boolean,
  showStepsProgress?: boolean,
  stepCallback?: Function,
  steps?: any[],
  tooltipOffset?: number,
  type?: "continous" | "single"
};

declare module "react-joyride" {
  declare class Joyride extends React.Component {
    static defaultProps: ReactJoyride$DefaultProps;
    props: ReactJoyride$Props;
  }
  declare module.exports: typeof Joyride;
}
