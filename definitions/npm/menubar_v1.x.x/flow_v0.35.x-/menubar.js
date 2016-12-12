

declare module 'menubar' {
					declare module.exports: undefined


}

declare module 'npm$namespace$Menubar' {
	declare type Position = "trayLeft" | "trayBottomLeft" | "trayRight" | "trayBottomRight" | "trayCenter" | "trayBottomCenter" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "topCenter" | "bottomCenter" | "center";

	declare type TrayBounds = "trayLeft" | "trayBottomLeft" | "trayRight" | "trayBottomRight" | "trayCenter" | "trayBottomCenter";

	declare interface ElectronPositioner {
		move(pos: Position): void,
		calculate(pos: Position, bounds?: TrayBounds): Electron.Point
	}

	declare interface MenubarOptions {
		dir?: string,
		index?: string,
		icon?: Electron.NativeImage | string,
		tooltip?: string,
		tray?: Electron.Tray,
		preloadWindow?: boolean,
		width?: number,
		height?: number,
		x?: number,
		y?: number,
		alwaysOnTop?: boolean,
		showOnAllWorkspaces?: boolean,
		windowPosition?: Position,
		showDockIcon?: boolean,
		showOnRightClick?: boolean
	}

		declare class MenubarApp extends NodeJS$EventEmitter {
		app: Electron.App;
		window: Electron.BrowserWindow;
		tray: Electron.Tray;
		positioner: ElectronPositioner;
		setOption(opt: string, value: any): void;
		getOption(opt: string): any;
		showWindow(): void;
		hideWindow(): void
	}

	
}