import type Mixpanel from 'mixpanel-browser';

declare module 'react-mixpanel' {
  declare type Props = {
    mixpanel: Mixpanel
  }

  declare type Context = {
    mixpanel: Mixpanel
  }

  declare class MixpanelProvider extends React$Component {
    props: Props;
    childContextTypes: Context;
  }

  declare module.exports: typeof MixpanelProvider;
}
