import type { ReactSplitPaneClass } from 'npm$namespace$ReactSplitPane'

declare module 'react-split-pane' {
					declare module.exports: ReactSplitPaneClass


}

declare module 'npm$namespace$ReactSplitPane' {
		declare interface ReactSplitPaneProps {
		allowResize?: boolean,
		className?: string,
		defaultSize?: number | string,
		maxSize?: number | string,
		minSize?: number | string,
		onChange?: Function,
		onDragFinished?: Function,
		onDragStarted?: Function,
		primary?: string,
		size?: number | string,
		split?: string
	}

	declare interface ReactSplitPaneClass {
		
	}

			
}