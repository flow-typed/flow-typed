import events from 'events';

declare module 'metrics' {
  declare type Metric = Meter | Timer | Counter | Histogram;

  declare type MeterPrintObj = {
    type: 'histogram',

    count: number,
    m1: number,
    m5: number,
    m15: number,
    mean: number,
    unit: 'seconds'
  };

  declare type Rates = {
    '1': number;
    '5': number;
    '15': number;
    mean: number;
  };

  declare class Meter {
    type: 'meter';

    mark(n?: number): void;
    rates(): Rates;
    fifteenMinuteRate(): number;
    fiveMinuteRate(): number;
    oneMinuteRate(): number;
    meanRate(): number;
    printObj(): MeterPrintObj;
  }

  declare class Timer {
    type: 'timer';
    histogram: Histogram;
    meter: Meter;

    clear(): void;
    update(duration: number): void;

    count(): number;
    min(): number;
    max(): number;
    mean(): number;
    stdDev(): number;
    percentiles(percentiles: number[]): { [percentile: number]: number };
    values(): number[];

    oneMinuteRate(): number;
    fiveMinuteRate(): number;
    fifteenMinuteRate(): number;
    meanRate(): number;
    tick(): void;
    rates(): Rates;

    printObj(): {
      type: 'timer',
      duration: HistogramPrintObj;
      rate: MeterPrintObj;
    };
  }

  declare class Counter {
    type: 'counter';

    clear(): void;

    inc(): void;
    dec(): void;
    printObj(): ({
      type: 'counter';
      count: number;
    });
  }

  declare type HistogramPrintObj = {
    type: 'histogram',

    min: number,
    max: number,
    sum: number,
    variance: number | null,
    mean: number | null,
    std_dev: number | null,
    count: number,
    median: number,
    p75: number,
    p95: number,
    p99: number,
    p999: number
  };

  declare class Histogram {
    type: 'histogram';
    sample: any;
    min: number;
    max: number;
    sum: number;
    count: number;

    clear(): void;
    update(value: number, timestamp?: number): void;
    updateVariance(value: number): void;

    percentiles(percentiles: number[]): { [percentile: number]: number };
    variance(): number | null;
    mean(): number | null;
    stdDev(): number | null;
    values(): number[];

    printObj(): HistogramPrintObj;
  }

  declare interface Metrics {
    meters: (Meter & { name: string })[];
    timers: (Timer & { name: string })[];
    counters: (Counter & { name: string })[];
    histograms: (Histogram & { name: string })[];
  }

  declare class ScheduledReporter extends events.EventEmitter {
    constructor(registry: Report): this;
    start(intervalInMs: number): void;
    stop(): void;
    getMetrics(): Metrics;

    report(): void;
  }

  declare class ConsoleReporter extends ScheduledReporter {
  }

  declare class CsvReporter extends ScheduledReporter {
    write(timestamp: number, name: string, header: string, line: string, values: any[]): void;
    reportCounter(counter: Counter, timestamp: number): void;
    reportMeter(meter: Meter, timestamp: number): void;
    reportTimer(timer: Timer, timestamp: number): void;
    reportHistogram(histogram: Histogram, timestamp: number): void;
  }

  declare class GraphiteReporter extends ScheduledReporter {
    send(name: string, value: number, timestamp: number): void;
    reportCounter(counter: Counter, timestamp: number): void;
    reportMeter(meter: Meter, timestamp: number): void;
    reportTimer(timer: Timer, timestamp: number): void;
    reportHistogram(histogram: Histogram, timestamp: number): void;
  }

  declare class Report {
    addMetric(eventName: string, metric: Metric): void;
    getMetric(eventName: string): Metric;
    summary(): { [namespace: string]: { [name: string]: Metric } };
  }

  declare class EWMA {
    alpha: number;
    interval: number;
    initialized: boolean;
    currentRate: number;
    uncounted: number;
    tickInterval?: number;

    constructor(alpha: number, interval: number): this;
    update(n: number): void;
    tick(): void;
    rate(): number;
    stop(): void;

    static createM1EWMA(): EWMA;
    static createM5EWMA(): EWMA;
    static createM15EWMA(): EWMA;
  }

  declare class Sample {
    values: number[];
    count: number;

    init(): void;
    update(val: number): void;
    clear(): void;
    size(): number;
    print(): void;
    getValues(): number[];
  }

  declare class ExponentiallyDecayingSample extends Sample {
    limit: number;
    alpha: number;
    startTime: number;
    nextScaleTime: number;

    constructor(limit: number, alpha: number): this;

    now(): number;
    tick(): void;
    clear(): void;
    update(val: number, timestamp?: number): void;
    weight(time: number): number;
    rescale(): void;
  }
}
