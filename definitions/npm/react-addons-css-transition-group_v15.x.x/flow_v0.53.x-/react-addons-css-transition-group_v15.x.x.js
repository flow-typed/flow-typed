declare module 'react-addons-css-transition-group' {
  declare type ReactCSSTransitionGroupNames = {
    enter: string,
    enterActive?: string,
    leave: string,
    leaveActive?: string,
    appear: string,
    appearActive?: string
  };
  declare type Props = {
    transitionName: string | ReactCSSTransitionGroupNames,
    transitionAppear?: boolean,
    transitionEnter?: boolean,
    transitionLeave?: boolean,
    transitionAppearTimeout?: number,
    transitionEnterTimeout?: number,
    transitionLeaveTimeout?: number,
  };
  declare type DefaultProps = {
    transitionAppear: boolean,
    transitionEnter: boolean,
    transitionLeave: boolean,
  }
  declare class ReactCSSTransitionGroup extends React$Component<Props> {
    static defaultProps: DefaultProps;
  }
  declare module.exports: Class<ReactCSSTransitionGroup>;
}
