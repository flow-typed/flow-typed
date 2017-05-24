import typeis from 'type-is';

function createRequest (type) {
  return {
    headers: {
      'content-type': type || '',
      'transfer-encoding': 'chunked',
    },
  }
}

const req = createRequest('text/html; charset=utf-8');

typeis(req, ['text/*']);

const req2 = createRequest('text/html');

// $ExpectError
typeis(req2, [undefined, null, true, function () {}]);

const req3 = {headers: {}};

typeis(req3);
typeis(req3, ['image/*']);
typeis(req3, ['text/*', 'image/*']);

const req4 = {headers: {'content-length': '1'}};

typeis.hasBody(req4);
