import React from 'react';

type ReactJoyride$LocaleOption = {
  back?: string,
  close?: string,
  last?: string,
  next?: string,
  skip?: string,
}

type ReactJoyride$DefaultProps = {
  debug: bool,
  keyboardNavigation: bool,
  locale: ReactJoyride$LocaleOption,
  resizeDebounce: bool,
  resizeDebounceDelay: number,
  scrollOffset: number,
  scrollToFirstStep: bool,
  scrollToSteps: bool,
  showBackButton: bool,
  showOverlay: bool,
  showSkipButton: bool,
  showStepsProgress: bool,
  steps: any[],
  tooltipOffset: number,
  type: 'continous'|'single',
}

type ReactJoyride$Props = {
  completeCallback?: Function,
  debug: bool,
  keyboardNavigation: bool,
  locale: ReactJoyride$LocaleOption,
  resizeDebounce: bool,
  resizeDebounceDelay: number,
  scrollOffset: number,
  scrollToFirstStep: bool,
  scrollToSteps: bool,
  showBackButton: bool,
  showOverlay: bool,
  showSkipButton: bool,
  showStepsProgress: bool,
  stepCallback?: Function,
  steps: any[],
  tooltipOffset: number,
  type: 'continous'|'single',
}

declare module 'react-joyride' {
  declare class Joyride extends React.Component {
    static defaultProps: ReactJoyride$DefaultProps;
    props: ReactJoyride$Props;
  }
  declare var exports: typeof Joyride;
}
