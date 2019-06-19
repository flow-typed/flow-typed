// @flow
import {
  Meter,
  Timer,
  Counter,
  Histogram,
  Report,
  GraphiteReporter,
} from 'metrics';
import type { Metric } from 'metrics';

const meter: Meter = new Meter();
meter.mark();
meter.mark(3);
// $ExpectError wrong argument type
meter.mark('hello');
const printed = meter.printObj();

// Type refinement
declare var metric: Metric;
switch (metric.type) {
  case 'meter': {
    (metric: Meter);
    // $ExpectError
    (metric: Histogram);
    break;
  }
  case 'timer': {
    (metric: Timer);
    break;
  }
  case 'counter': {
    (metric: Counter);
    break;
  }
  case 'histogram': {
    (metric: Histogram);
    // $ExpectError
    (metric: Counter);
    break;
  }
}

const report = new Report();
const reporter: GraphiteReporter = new GraphiteReporter(report);
reporter.report();
