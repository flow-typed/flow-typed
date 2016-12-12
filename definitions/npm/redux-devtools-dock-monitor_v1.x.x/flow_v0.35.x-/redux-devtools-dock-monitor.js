

declare module 'redux-devtools-dock-monitor' {
	declare type DockPosition = "left" | "top" | "right" | "bottom";

	declare interface IDockMonitorProps {
		children?: React.ReactNode,
		toggleVisibilityKey: string,
		changePositionKey: string,
		changeMonitorKey?: string,
		fluid?: boolean,
		defaultSize?: number,
		defaultPosition?: DockPosition,
		defaultIsVisible?: boolean
	}

		declare export default class DockMonitor extends React$Component<IDockMonitorProps, any> {
		
	}

	
}