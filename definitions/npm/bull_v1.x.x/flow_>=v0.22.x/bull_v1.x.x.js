declare type $npm$bull$jobType =
  | 'completed'
  | 'waiting'
  | 'active'
  | 'delayed'
  | 'failed';

declare type $npm$bull$jobPriority =
  | 'low'
  | 'normal'
  | 'medium'
  | 'high'
  | 'critical';

declare type $npm$bull$jobOptions = {
  priority: $npm$bull$jobPriority,
  attempts: number,
};

declare module 'bull' {
  declare type jobCallback = (job: Job, done: Function) => void;
  declare type jobPromise = (job: Job) => Promise;
  declare type callbackOrPromise = jobCallback | jobPromise;
  declare class Job {
    static (queue: Queue, data: Object, opts: $npm$bull$jobOptions): Job,
    queue: Queue,
    data: Object,
    opts: Object,
    delay: number,
    timestamp: Date,
    stacktrace: Array<string>,
    attempts: number,
    attemptsMade: number,
    remove(): Promise,
    retry(): Promise,
  }
  declare class Queue {
    static (queueName: string, redisPort: number, redisHost: string, redisOptions: Object): Queue,
    static (queueName: string, redisPort: number, redisHost: string): Queue,
    process(callback: callbackOrPromise): void,
    process(concurrency: number, callback: callbackOrPromise): void,
    add(data: Object, opts: Object): Promise<Job>,
    add(data: Object): Promise<Job>,
    pause(isLocal: boolean): Promise,
    pause(): Promise,
    resume(isLocal: boolean): Promise,
    resume(): Promise,
    count(): Promise<number>,
    close(): Promise,
    getJob(jobId: string): Promise<Job>,
    clean(grace: number, type: $npm$bull$jobType): Promise<Array<Job>>,
    clean(grace: number): Promise<Array<Job>>,
  }
  declare class PriorityQueue extends Queue {}
  declare var exports: typeof Queue;
}
