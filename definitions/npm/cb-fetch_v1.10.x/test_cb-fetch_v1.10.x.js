import request from 'cb-fetch';

request({ responseType: "json" });
request().post();
request().hook('download', () => {});
request().get().query();
request().done({
    success(response) {
        response.headers.hasOwnProperty();
    }
});

// $ExpectError
request({ responseType: "ms-stream" });

// $ExpectError
request().trace();

// $ExpectError
request().hook('upload', () => {});

// $ExpectError
request().get().send();

request().done({
    error(response) {
        // $ExpectError
        response.headers.hasOwnProperty();
    }
});