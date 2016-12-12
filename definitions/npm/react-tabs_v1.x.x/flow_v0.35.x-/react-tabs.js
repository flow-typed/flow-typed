import type { Tabs, TabList, Tab, TabPanel } from 'npm$namespace$ReactTabs'

declare module 'react-tabs' {
					
}

declare module 'npm$namespace$ReactTabs' {
		declare interface TabsProps {
		className?: string,
		selectedIndex?: number,
		focus?: boolean,
		forceRenderTabPanel?: boolean,
		onSelect?: (index: number, last: number) => void
	}

	declare interface Tabs {
		setUseDefaultStyles: (use: boolean) => void
	}

	declare interface TabListProps {
		className?: string,
		activeTabClassName?: string,
		disabledTabClassName?: string
	}

	declare interface TabList {
		
	}

	declare interface TabProps {
		className?: string,
		focus?: boolean,
		selected?: boolean,
		id?: string,
		panelId?: string
	}

	declare interface Tab {
		
	}

	declare interface TabPanelProps {
		className?: string,
		selected?: boolean,
		id?: string,
		tabId?: string
	}

	declare interface TabPanel {
		
	}

			
}