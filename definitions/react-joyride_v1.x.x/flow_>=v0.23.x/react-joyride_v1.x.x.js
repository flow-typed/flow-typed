import type React from 'react';

type ReactJoyride$LocaleOption = {
  back?: string,
  close?: string,
  last?: string,
  next?: string,
  skip?: string,
}

type ReactJoyride$DefaultProps = {
  debug: false,
  keyboardNavigation: true,
  locale: {
    back: 'Back',
    close: 'Close',
    last: 'Last',
    next: 'Next',
    skip: 'Skip',
  },
  resizeDebounce: false,
  resizeDebounceDelay: 200,
  scrollOffset: 20,
  scrollToFirstStep: false,
  scrollToSteps: true,
  showBackButton: true,
  showOverlay: true,
  showSkipButton: false,
  showStepsProgress: false,
  steps: [],
  tooltipOffset: 30,
  type: 'single',
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

type ReactJoyride$State = void

declare module 'react-joyride' {
  declare var exports: React.Component<ReactJoyride$DefaultProps, ReactJoyride$Props, ReactJoyride$State>;
}
