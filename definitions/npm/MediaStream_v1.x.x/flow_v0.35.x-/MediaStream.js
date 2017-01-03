/**
 * Flowtype definitions for MediaStream
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface ConstrainBooleanParameters {
    exact?: boolean,
        ideal?: boolean
}
declare interface NumberRange {
    max?: number,
        min?: number
}
declare type ConstrainNumberRange = {
    exact?: number,
    ideal?: number
} & NumberRange
declare interface ConstrainStringParameters {
    exact?: string | string[],
        ideal?: string | string[]
}
declare interface MediaStreamConstraints {
    video?: boolean | MediaTrackConstraints,
        audio?: boolean | MediaTrackConstraints
}
declare type W3C$LongRange = NumberRange;

declare type W3C$DoubleRange = NumberRange;

declare type W3C$ConstrainBoolean = boolean | ConstrainBooleanParameters;

declare type W3C$ConstrainNumber = number | ConstrainNumberRange;

declare type W3C$ConstrainLong = W3C$ConstrainNumber;

declare type W3C$ConstrainDouble = W3C$ConstrainNumber;

declare type W3C$ConstrainString = string | string[] | ConstrainStringParameters;
declare type MediaTrackConstraints = {
    advanced?: MediaTrackConstraintSet[]
} & MediaTrackConstraintSet
declare interface MediaTrackConstraintSet {
    width?: W3C$ConstrainLong,
        height?: W3C$ConstrainLong,
        aspectRatio?: W3C$ConstrainDouble,
        frameRate?: W3C$ConstrainDouble,
        facingMode?: W3C$ConstrainString,
        volume?: W3C$ConstrainDouble,
        sampleRate?: W3C$ConstrainLong,
        sampleSize?: W3C$ConstrainLong,
        echoCancellation?: W3C$ConstrainBoolean,
        latency?: W3C$ConstrainDouble,
        deviceId?: W3C$ConstrainString,
        groupId?: W3C$ConstrainString
}
declare interface MediaTrackSupportedConstraints {
    width?: boolean,
        height?: boolean,
        aspectRatio?: boolean,
        frameRate?: boolean,
        facingMode?: boolean,
        volume?: boolean,
        sampleRate?: boolean,
        sampleSize?: boolean,
        echoCancellation?: boolean,
        latency?: boolean,
        deviceId?: boolean,
        groupId?: boolean
}
declare type MediaStream = {
    id: string,
    active: boolean,
    onactive: EventListener,
    oninactive: EventListener,
    onaddtrack: (event: MediaStreamTrackEvent) => any,
    onremovetrack: (event: MediaStreamTrackEvent) => any,
    clone(): MediaStream,
    stop(): void,
    getAudioTracks(): MediaStreamTrack[],
    getVideoTracks(): MediaStreamTrack[],
    getTracks(): MediaStreamTrack[],
    getTrackById(trackId: string): MediaStreamTrack,
    addTrack(track: MediaStreamTrack): void,
    removeTrack(track: MediaStreamTrack): void
} & EventTarget
declare type MediaStreamTrackEvent = {
    track: MediaStreamTrack
} & Event
declare type MediaStreamTrack = {
    id: string,
    kind: string,
    label: string,
    enabled: boolean,
    muted: boolean,
    remote: boolean,
    readyState: MediaStreamTrackState,
    onmute: EventListener,
    onunmute: EventListener,
    onended: EventListener,
    onoverconstrained: EventListener,
    clone(): MediaStreamTrack,
    stop(): void,
    getCapabilities(): MediaTrackCapabilities,
    getConstraints(): MediaTrackConstraints,
    getSettings(): MediaTrackSettings,
    applyConstraints(constraints: MediaTrackConstraints): Promise<void >
} & EventTarget
declare interface MediaTrackCapabilities {
    width: number | W3C$LongRange,
        height: number | W3C$LongRange,
        aspectRatio: number | W3C$DoubleRange,
        frameRate: number | W3C$DoubleRange,
        facingMode: string,
        volume: number | W3C$DoubleRange,
        sampleRate: number | W3C$LongRange,
        sampleSize: number | W3C$LongRange,
        echoCancellation: boolean[],
        latency: number | W3C$DoubleRange,
        deviceId: string,
        groupId: string
}
declare interface MediaTrackSettings {
    width: number,
        height: number,
        aspectRatio: number,
        frameRate: number,
        facingMode: string,
        volume: number,
        sampleRate: number,
        sampleSize: number,
        echoCancellation: boolean,
        latency: number,
        deviceId: string,
        groupId: string
}
declare interface MediaStreamError {
    name: string,
        message: string,
        constraintName: string
}
declare interface NavigatorGetUserMedia {
    (constraints: MediaStreamConstraints, successCallback: (stream: MediaStream) => void, errorCallback: (error: MediaStreamError) => void): void
}
declare var getUserMedia: NavigatorGetUserMedia;
declare interface Navigator {
    getUserMedia: NavigatorGetUserMedia,
        webkitGetUserMedia: NavigatorGetUserMedia,
        mozGetUserMedia: NavigatorGetUserMedia,
        msGetUserMedia: NavigatorGetUserMedia,
        mediaDevices: MediaDevices
}
declare interface MediaDevices {
    getSupportedConstraints(): MediaTrackSupportedConstraints,
        getUserMedia(constraints: MediaStreamConstraints): Promise<MediaStream>,
        enumerateDevices(): Promise<MediaDeviceInfo[] >
}
declare interface MediaDeviceInfo {
    label: string,
        deviceId: string,
        kind: string,
        groupId: string
}