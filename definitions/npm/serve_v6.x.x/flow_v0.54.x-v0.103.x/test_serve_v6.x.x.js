import serve from "serve";

// $FlowExpectedError (port should be number)
const badServer1 = serve(__dirname, { port: '1337' })
const goodServer1 = serve(__dirname, { port: 1337 })

// $FlowExpectedError (ssl should be a boolean)
const badServer2 = serve(__dirname, { ssl: 'true' })
const goodServer2 = serve(__dirname, { ssl: true })

// $FlowExpectedError (Options is an exact object that doesn't allow unexpected flags)
const badServer3 = serve(__dirname, { cor: true })
const goodServer3 = serve(__dirname, { cors: true })
