// @flow
import {
  Span,
  Tags,
  Tracer,
  initGlobalTracer,
  globalTracer,
  FORMAT_HTTP_HEADERS,
} from 'opentracing';

const tracer: Tracer = new Tracer();
initGlobalTracer(tracer);

const gTracer: Tracer = globalTracer();

declare var headers: { [key: string]: string | string[], ... };
const context = tracer.extract(FORMAT_HTTP_HEADERS, headers);
// $FlowExpectedError extract's result is nullable
tracer.inject(context, FORMAT_HTTP_HEADERS, headers);
if (context) {
  tracer.inject(context, FORMAT_HTTP_HEADERS, headers);
}

// $FlowExpectedError startSpan requires a name
tracer.startSpan();

const span: Span = tracer.startSpan('test-span');
span.setTag('foo', 1);
span.setTag('bar', 'something');
span.addTags({
  [Tags.SPAN_KIND]: 'test',
  [Tags.HTTP_URL]: 'https://www.test.com/test',
  // $FlowExpectedError Undfined tag
  [Tags.UNKNOWN]: 'unkown',
});
// $FlowExpectedError log argument should be an object
span.log('plain string');
span.log({ message: 'test' });
span.finish();

const spanWithOptions: Span = tracer.startSpan('another-span', {
  // $FlowExpectedError startTime should be a number
  startTime: '1234',
});
