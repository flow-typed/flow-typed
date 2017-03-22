declare interface eventToPromise$CancelablePromise<+R> extends Promise<R> {
  cancel(): void;
}

type eventToPromise$Options = {
  array?: boolean;
  error?: string;
  ignoreErrors?: boolean;
};

declare module 'event-to-promise' {
  declare module.exports: {
    <R>(emitter: events$EventEmitter, event: string, opts?: ?eventToPromise$Options): eventToPromise$CancelablePromise<R>;
    multi<R>(emitter: events$EventEmitter, successEvents: Array<string>, errorEvents?: ?Array<string>): eventToPromise$CancelablePromise<R>;
  };
}
