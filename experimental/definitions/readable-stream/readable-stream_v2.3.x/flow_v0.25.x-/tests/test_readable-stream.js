import stream from 'stream';
import RStream from 'readable-stream';

function testTypes() {
  const ANY: any = null;
  const _readableOpts: stream.ReadableOptions = (ANY: RStream.ReadableOptions);
  const _writableOpts: stream.WritableOptions = (ANY: RStream.WritableOptions);
  const _transformOpts: stream.TransformOptions = (ANY: RStream.TransformOptions);
  const _duplexOpts: stream.DuplexOptions = (ANY: RStream.DuplexOptions);

  const _readable: typeof stream.Readable = RStream.Readable;
  const _writable: typeof stream.Writable = RStream.Writable;
  const _transform: typeof stream.Transform = RStream.Transform;
  const _duplex: typeof stream.Duplex = RStream.Duplex;
}

function test() {
  const rs: stream.Stream = ((null: any): RStream.Stream);
  const RS_Readable = RStream;
  const RS_Writable = RStream.Writable;
  const RS_Transform = RStream.Transform;
  const RS_Duplex = RStream.Duplex;

  const streamR = new RS_Readable({
    objectMode: true,
    read(size) {},
    destroy(error, cb) {},
  });

  streamR.once('end', () => {
    process.nextTick(() => {
      streamR.emit('close');
    });
  });

  const row = null;
  const i = 0;
  if (streamR.push(row)) streamR.emit('result', row, i);
  else streamR.emit('error', new Error('a possible exception')); // Pass on any errors
  streamR.push(null); // pushing null, indicating EOF

  const streamW = new RS_Writable({
    write(chunk, enc, cb) {},
    writev(chunks, cb) {},
    destroy(error, cb) {},
    final(cb) {},
  });
  streamW.write(new Buffer('test'));
  streamW.emit('finish');
}
