import request from 'cb-fetch';

request({ responseType: "json" });
request().post();
request().hook('download', () => {});
request().get().query().done();

// $ExpectError
request({ responseType: "ms-stream" });

// $ExpectError
request().trace();

// $ExpectError
request().hook('upload', () => {});

// $ExpectError
request().get().send().done();