declare module 'react-portal' {
  declare type PortalProps = {
    children: React$Children,
    node?: Element | null,
  };

  declare class Portal extends React$Component<void, PortalProps, void> {}

  declare type RenderFunctionParams = {
    openPortal: (event?: SyntheticEvent) => void,
    closePortal: () => void,
    portal: (children: React$Children) => React$Element<typeof Portal>,
    isOpen: boolean,
  };

  declare type PortalWithStateProps = {
    children: (params: RenderFunctionParams) => React$Children,
    node?: Element | null,
    defaultOpen?: boolean,
    closeOnEsc?: boolean,
    closeOnOutsideClick?: boolean,
    onOpen?: () => void,
    onClose?: () => void,
  };

  declare class PortalWithState extends React$Component<
    void,
    PortalWithStateProps,
    void
  > {}

  declare module.exports: {
    Portal: typeof Portal,
    PortalWithState: typeof PortalWithState,
  };
}
