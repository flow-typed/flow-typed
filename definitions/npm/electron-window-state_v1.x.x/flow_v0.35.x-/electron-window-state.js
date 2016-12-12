

declare module 'electron-window-state' {
			declare function windowStateKeeper(
		opts: ElectronWindowState.WindowStateKeeperOptions
	): ElectronWindowState.WindowState

		declare module.exports: undefined


}

declare module 'npm$namespace$ElectronWindowState' {
		declare interface WindowState {
		x: number,
		y: number,
		width: number,
		height: number,
		isMaximized: boolean,
		isFullScreen: boolean,
		manage(win: Electron.BrowserWindow): void,
		saveState(win: Electron.BrowserWindow): void
	}

	declare interface WindowStateKeeperOptions {
		defaultWidth?: number,
		defaultHeight?: number,
		path?: string,
		file?: string,
		maximize?: boolean,
		fullScreen?: boolean
	}

			
}