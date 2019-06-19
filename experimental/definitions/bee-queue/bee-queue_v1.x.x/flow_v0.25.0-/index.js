declare class BeeQueue$Job extends events$EventEmitter {
  constructor(queue: BeeQueue$Queue, jobId: number, data: *, options: *): this,
  backoff(strategy: string, delayFactor?: number): this,
  data: *,
  delayUntil(timestamp: number): this,
  delayUntil(date: Date): this,
  queue: BeeQueue$Queue,
  id: number | string,
  options: *,
  progress: number,
  remove(): Promise<this>,
  remove(callback: (err: ?Error) => void): void,
  reportProgress(progress: number): this,
  retries(n: number): this,
  setId(id: number | string): this,
  save(): Promise<this>,
  save(callback: (err: ?Error, job: this) => void): void,
  status: string,
  timeout(ms: number): this
}

type BeeQueue$Page = {
  end?: number,
  size?: number,
  start?: number
};
type BeeQueue$Handler = (
  job: BeeQueue$Job,
  done: (err?: ?Error, result?: mixed) => void
) => ?Promise<*>;
type BeeQueue$Health = {
  [key: string]: number
};

declare class BeeQueue$Queue extends events$EventEmitter {
  constructor(name: string, settings?: {}): this,
  close(timeout: number): Promise<*>,
  close(timeout: number, callback: (err: ?Error) => void): void,
  createJob(payload: *): BeeQueue$Job,
  checkHealth(): Promise<BeeQueue$Health>,
  checkHealth(callback: (err: ?Error, health: BeeQueue$Health) => void): void,
  checkStalledJobs(
    timeout?: number,
    callback?: (err: ?Error, num: number) => void
  ): void,
  destroy(): Promise<*>,
  destroy(callback: (err: ?Error) => void): void,
  getJob(jobId: number): Promise<BeeQueue$Job>,
  getJob(
    jobId: number,
    callback: (err: ?Error, job: BeeQueue$Job) => void
  ): void,
  getJobs(type: string, page: BeeQueue$Page): Promise<Array<BeeQueue$Job>>,
  getJobs(
    type: string,
    page: BeeQueue$Page,
    callback: (err: ?Error, jobs: Array<BeeQueue$Job>) => void
  ): void,
  jobs: Map<*, BeeQueue$Job>,
  keyPrefix: string,
  name: string,
  paused: boolean,
  process(handler: BeeQueue$Handler): void,
  process(concurrency: number, handler: BeeQueue$Handler): void,
	ready(): Promise<*>,
	ready(cb: Function): void,
  removeJob(jobId: number): Promise<*>,
  removeJob(jobId: number, callback: (err: ?Error) => void): void,
  settings: {}
}

declare module "bee-queue" {
  declare type Queue = BeeQueue$Queue;
  declare type Job = BeeQueue$Job;

  declare module.exports: typeof BeeQueue$Queue;
}
