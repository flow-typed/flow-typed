

declare module 'RTCPeerConnection' {
	declare type RTCIceTransportPolicy = "public" | "relay" | "all";

	declare type RTCBundlePolicy = "balanced" | "max-compat" | "max-bundle";

	declare type RTCRtcpMuxPolicy = "negotiate" | "require";

	declare type RTCIceCredentialType = "password" | "token";

	declare interface RTCCertificate {
		expires: number
	}

	declare interface RTCConfiguration {
		iceServers?: RTCIceServer[],
		iceTransportPolicy?: RTCIceTransportPolicy,
		bundlePolicy?: RTCBundlePolicy,
		rtcpMuxPolicy?: RTCRtcpMuxPolicy,
		peerIdentity?: string,
		certificates?: RTCCertificate[],
		iceCandidatePoolSize?: number
	}

	declare interface RTCIceServer {
		urls: string | string[],
		username?: string,
		credential?: string,
		credentialType?: RTCIceCredentialType
	}

	declare interface mozRTCPeerConnection {
		
	}

	declare interface webkitRTCPeerConnection {
		
	}

	declare interface RTCOptionalMediaConstraint {
		DtlsSrtpKeyAgreement?: boolean,
		RtpDataChannels?: boolean
	}

	declare interface RTCMediaConstraints {
		mandatory?: RTCMediaOfferConstraints,
		optional?: RTCOptionalMediaConstraint[]
	}

	declare interface RTCMediaOfferConstraints {
		offerToReceiveAudio: boolean,
		offerToReceiveVideo: boolean
	}

	declare interface RTCSessionDescriptionInit {
		type: string,
		sdp: string
	}

	declare interface RTCSessionDescription {
		type?: string,
		sdp?: string
	}

	declare interface webkitRTCSessionDescription {
		type?: string,
		sdp?: string
	}

	declare interface mozRTCSessionDescription {
		type?: string,
		sdp?: string
	}

	declare interface RTCDataChannelInit {
		ordered?: boolean,
		maxPacketLifeTime?: number,
		maxRetransmits?: number,
		protocol?: string,
		negotiated?: boolean,
		id?: number
	}

	declare interface RTCMessageEvent {
		data: any
	}

	declare interface RTCDataChannel {
		label: string,
		reliable: boolean,
		readyState: string,
		bufferedAmount: number,
		binaryType: string,
		onopen: (event: Event) => void,
		onerror: (event: Event) => void,
		onclose: (event: Event) => void,
		onmessage: (event: RTCMessageEvent) => void,
		close(): void,
		send(data: string): void,
		send(data: ArrayBuffer): void,
		send(data: ArrayBufferView): void,
		send(data: Blob): void
	}

	declare interface RTCDataChannelEvent {
		channel: RTCDataChannel
	}

	declare interface RTCIceCandidateEvent {
		candidate: RTCIceCandidate
	}

	declare interface RTCMediaStreamEvent {
		stream: MediaStream
	}

	declare interface EventInit {
		
	}

	declare interface RTCDataChannelEventInit {
		channel: RTCDataChannel
	}

	declare interface RTCVoidCallback {
		(): void
	}

	declare interface RTCSessionDescriptionCallback {
		(sdp: RTCSessionDescription): void
	}

	declare interface RTCPeerConnectionErrorCallback {
		(errorInformation: DOMError): void
	}

	declare interface RTCStatsReport {
		stat(id: string): string
	}

	declare interface RTCStatsCallback {
		(report: RTCStatsReport): void
	}

	declare interface RTCOfferAnswerOptions {
		voiceActivityDetection?: boolean
	}

	declare interface RTCOfferOptions {
		iceRestart?: boolean
	}

	declare interface RTCAnswerOptions {
		
	}

	declare interface RTCPeerConnection {
		createOffer(options?: RTCOfferOptions): Promise<RTCSessionDescription>,
		createOffer(
		successCallback: RTCSessionDescriptionCallback, failureCallback?: RTCPeerConnectionErrorCallback, constraints?: RTCMediaConstraints
	): void,
		createAnswer(options?: RTCAnswerOptions): Promise<RTCSessionDescription>,
		createAnswer(
		successCallback: RTCSessionDescriptionCallback, failureCallback?: RTCPeerConnectionErrorCallback, constraints?: RTCMediaConstraints
	): void,
		setLocalDescription(description: RTCSessionDescription | RTCSessionDescriptionInit): Promise<void>,
		setLocalDescription(
		description: RTCSessionDescription, successCallback?: RTCVoidCallback, failureCallback?: RTCPeerConnectionErrorCallback
	): void,
		setRemoteDescription(description: RTCSessionDescription | RTCSessionDescriptionInit): Promise<void>,
		setRemoteDescription(
		description: RTCSessionDescription, successCallback?: RTCVoidCallback, failureCallback?: RTCPeerConnectionErrorCallback
	): void,
		localDescription: RTCSessionDescription,
		remoteDescription: RTCSessionDescription,
		signalingState: string,
		updateIce(configuration?: RTCConfiguration, constraints?: RTCMediaConstraints): void,
		addIceCandidate(candidate: RTCIceCandidate): Promise<void>,
		addIceCandidate(
		candidate: RTCIceCandidate, successCallback: () => void, failureCallback: RTCPeerConnectionErrorCallback
	): void,
		iceGatheringState: string,
		iceConnectionState: string,
		getLocalStreams(): MediaStream[],
		getRemoteStreams(): MediaStream[],
		createDataChannel(label?: string, dataChannelDict?: RTCDataChannelInit): RTCDataChannel,
		ondatachannel: (event: RTCDataChannelEvent) => void,
		addStream(stream: MediaStream, constraints?: RTCMediaConstraints): void,
		removeStream(stream: MediaStream): void,
		close(): void,
		onnegotiationneeded: (event: Event) => void,
		onconnecting: (event: Event) => void,
		onopen: (event: Event) => void,
		onaddstream: (event: RTCMediaStreamEvent) => void,
		onremovestream: (event: RTCMediaStreamEvent) => void,
		onstatechange: (event: Event) => void,
		oniceconnectionstatechange: (event: Event) => void,
		onicecandidate: (event: RTCIceCandidateEvent) => void,
		onidentityresult: (event: Event) => void,
		onsignalingstatechange: (event: Event) => void,
		getStats(selector: MediaStreamTrack): Promise<RTCStatsReport>,
		getStats(
		selector: MediaStreamTrack, successCallback: RTCStatsCallback, failureCallback: RTCPeerConnectionErrorCallback
	): void
	}

	declare interface RTCIceCandidate {
		candidate: string,
		sdpMid?: string,
		sdpMLineIndex?: number
	}

	declare interface webkitRTCIceCandidate {
		candidate: string,
		sdpMid?: string,
		sdpMLineIndex?: number
	}

	declare interface mozRTCIceCandidate {
		candidate: string,
		sdpMid?: string,
		sdpMLineIndex?: number
	}

	declare interface RTCIceCandidateInit {
		candidate: string,
		sdpMid?: string,
		sdpMLineIndex?: number
	}

	declare interface PeerConnectionIceEvent {
		peer: RTCPeerConnection,
		candidate: RTCIceCandidate
	}

	declare interface RTCPeerConnectionConfig {
		iceServers: RTCIceServer[]
	}

	declare interface Window {
		RTCPeerConnection: RTCPeerConnection,
		webkitRTCPeerConnection: webkitRTCPeerConnection,
		mozRTCPeerConnection: mozRTCPeerConnection,
		RTCSessionDescription: RTCSessionDescription,
		webkitRTCSessionDescription: webkitRTCSessionDescription,
		mozRTCSessionDescription: mozRTCSessionDescription,
		RTCIceCandidate: RTCIceCandidate,
		webkitRTCIceCandidate: webkitRTCIceCandidate,
		mozRTCIceCandidate: mozRTCIceCandidate
	}

			
}