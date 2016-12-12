

declare module 'react-notification-system' {
					declare module.exports: ClassicComponentClass


}

declare module 'npm$namespace$NotificationSystem' {
		declare export interface System {
		addNotification(notification: Notification): Notification,
		removeNotification(notification: Notification): void,
		removeNotification(uid: string): void
	}

	declare export interface CallBackFunction {
		(notification: Notification): void
	}

	declare export interface Notification {
		title?: string,
		message?: string,
		level?: "error" | "warning" | "info" | "success",
		position?: "tr" | "tl" | "tc" | "br" | "bl" | "bc",
		autoDismiss?: number,
		dismissible?: boolean,
		action?: ActionObject,
		onAdd?: CallBackFunction,
		onRemove?: CallBackFunction,
		uid?: number | string
	}

	declare export interface ActionObject {
		label: string,
		callback?: () => void
	}

	declare export interface ContainersStyle {
		DefaultStyle: React.CSSProperties,
		tl?: React.CSSProperties,
		tr?: React.CSSProperties,
		tc?: React.CSSProperties,
		bl?: React.CSSProperties,
		br?: React.CSSProperties,
		bc?: React.CSSProperties
	}

	declare export interface ItemStyle {
		DefaultStyle?: React.CSSProperties,
		success?: React.CSSProperties,
		error?: React.CSSProperties,
		warning?: React.CSSProperties,
		info?: React.CSSProperties
	}

	declare export interface WrapperStyle {
		DefaultStyle?: React.CSSProperties
	}

	declare export interface Style {
		Wrapper?: any,
		Containers?: ContainersStyle,
		NotificationItem?: ItemStyle,
		Title?: ItemStyle,
		MessageWrapper?: WrapperStyle,
		Dismiss?: ItemStyle,
		Action?: ItemStyle,
		ActionWrapper?: WrapperStyle
	}

	declare export interface Attributes {
		noAnimation?: boolean,
		ref?: string,
		style?: Style | boolean,
		allowHTML?: boolean
	}

			
}