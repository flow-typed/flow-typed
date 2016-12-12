

declare module 'redux-devtools-log-monitor' {
		declare interface ILogMonitorProps {
		theme?: string | ColorScheme,
		select?: (state: any) => any,
		preserveScrollTop?: boolean,
		expandActionRoot?: boolean,
		expandStateRoot?: boolean
	}

		declare export default class LogMonitor extends React$Component<ILogMonitorProps, any> {
		
	}

	
}