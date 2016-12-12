

declare module 'unity-webapi' {
		declare interface External {
		getUnityObject(version: number): Unity
	}

	declare interface UnityMediaPlayer {
		setTrack(trackMetadata: UnityTrackMetadata),
		onPrevious(onPreviousCallback: Function),
		onNext(onNextCallback: Function),
		onPlayPause(onPlayPauseCallback: Function),
		getPlaybackstate(response: Function),
		setPlaybackstate(state: UnityPlaybackState),
		setCanGoNext(cangonext: Boolean),
		setCanGoPrev(cangoprev: Boolean),
		setCanPlay(canplay: Boolean),
		setCanPause(canpause: Boolean)
	}

	declare interface UnityNotification {
		showNotification(summary: String, body: String, iconUrl?: String)
	}

	declare interface UnityMessagingIndicator {
		showIndicator(name: String, indicatorProperties: UnityIndicatorProperties),
		clearIndicator(name: String),
		clearIndicators(),
		addAction(name: String, onActionInvoked: Function),
		removeAction(name: String),
		removeActions(),
		onPresenceChanged(onPresenceChanged: Function),
		presence: String
	}

	declare interface UnityLauncher {
		setCount(count: number),
		clearCount(),
		setProgress(progress: number),
		clearProgress(),
		setUrgent(urgent: Boolean),
		addAction(name: String, onActionInvoked: Function),
		removeAction(name: String),
		removeActions()
	}

	declare interface Unity {
		init(settings: UnitySettings),
		addAction(name: String, callback: Function),
		removeAction(actionName: String),
		removeActions(),
		Notification: UnityNotification,
		MediaPlayer: UnityMediaPlayer,
		MessagingIndicator: UnityMessagingIndicator,
		Launcher: UnityLauncher
	}

	declare interface BrowserPublic {
		getUnityObject(version: number): Unity
	}

		declare class UnitySettings  {
		name: String;
		iconUrl: String;
		onInit: Function
	}

	declare class UnityTrackMetadata  {
		title: String;
		album: String;
		artist: String;
		artLocation: String
	}

	declare class UnityIndicatorProperties  {
		count: Number;
		time: Date;
		iconURI: String;
		onIndicatorActivated: Function
	}

	
}