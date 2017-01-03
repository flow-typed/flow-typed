/**
 * Flowtype definitions for waa
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare var webkitAudioContext: {
    new(): AudioContext
};
declare var webkitOfflineAudioContext: {
    new(
        numberOfChannels: number,
        length: number,
        sampleRate: number): OfflineAudioContext
};
declare interface AudioContextConstructor {
    new(): AudioContext
}
declare interface Window {
    AudioContext: AudioContextConstructor
}
declare interface AudioContext {
    createMediaStreamSource(stream: MediaStream): MediaStreamAudioSourceNode
}
declare type MediaStreamAudioSourceNode = {} & AudioNode
declare type MediaStreamAudioDestinationNode = {
    stream: MediaStream
} & AudioNode
declare interface AudioBuffer {
    copyFromChannel(
            destination: Float32Array,
            channelNumber: number,
            startInChannel?: number): void,
        copyToChannel(source: Float32Array, channelNumber: number, startInChannel?: number): void
}
declare interface AudioNode {
    disconnect(destination: AudioNode): void
}