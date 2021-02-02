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
// $FlowExpectedError wrong argument type
meter.mark('hello');
const printed = meter.printObj();

// Type refinement
declare var metric: Metric;
switch (metric.type) {
  case 'meter': {
    (metric: Meter);
    // $FlowExpectedError
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
    // $FlowExpectedError
    (metric: Counter);
    break;
  }
}

const report = new Report();
const reporter: GraphiteReporter = new GraphiteReporter(report);
reporter.report();
