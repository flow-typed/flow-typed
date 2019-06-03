import socketIO from 'socket.io';
import {Server, IncomingMessage} from 'http';

let app: Server = require('http').createServer();
let io = socketIO();

io = socketIO(app, {path: '/socket.oi', pingInterval: 50});
io = socketIO(app);
io = socketIO(4000);
io = socketIO('5060');

let message: IncomingMessage = new IncomingMessage();
io.checkRequest(message, (err, success) => {
  if(err){throw err;}
})

let isClient: boolean = io.serveClient();
io.serveClient(false);

// $ExpectError
io.serveClient('false');

let path: string = io.path();
io.path('/some/path');

// $ExpectError
let path: boolean = io.path();

let adapter = io.adapter();
io.adapter('adapter')

let origins: string = io.origins();
io.origins('*:*');

// $ExpectError
io.origins({origin: '*;*'});

io = socketIO();
io.attach(app);
io.attach(5000);

io.listen(app);
io.listen(5000);

io.bind(app);

let oi = io.onconnection(app);
let namespace = io.of('/space');

// $ExpectError
namespace = io.of(app);

io.close(() => {});

namespace = io.on('connection', (socket) => {});
namespace = io.on('disconnect', () => {});

// $ExpectError
namespace = io.on(42);

namespace = io.to('alpha');
namespace = io.in('beta');

namespace = io.emit('connecting', {timeout: 30});
namespace = io.send({timeout: 30});
namespace = io.write({timeout: 30});

namespace = io.clients();
namespace = io.compress();
