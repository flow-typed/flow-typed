// @flow
import pg from 'pg';
import type {
  ResultSet,
  ResultBuilder,
  QueryType,
  PG_ERROR,
  Client,
  Row,
  DoneCallback,
  PoolClient,
  Pool,
  PGType
} from 'pg';

pg.types.setTypeParser(1184, v => v);
pg.types.setTypeParser(1184, 'text', (v: string) => v);
// $FlowExpectedError[incompatible-call]
pg.types.setTypeParser(1184, 'binary', (v: string) => v)
pg.types.setTypeParser(1184, 'binary', (v: Buffer) => v)
// $FlowExpectedError[incompatible-call]
pg.types.setTypeParser(1184, (v: Buffer) => v)

// There are two common ways to use node-postgres.
function test_pg() {
  // 1. interact with your server via a pool of clients
  function test_pool(pool: Pool) {
    // 1.1 you can run queries directly against the pool
    const rq: Promise<ResultSet> = pool.query('select * from table;');
    // $FlowExpectedError[incompatible-type-arg]
    const rqw: Promise<number> = pool.query('select * from table;');
    const rq2: Promise<ResultSet> = pool.query('Parameterized Queries',[1],
     (err, result) => {
       const _err: PG_ERROR|null = err;
       // $FlowExpectedError[incompatible-type]
       const _err_w: number = err;
       const _result: ResultSet|void = result;
       // $FlowExpectedError[incompatible-type]
       const _result_w: number = result;
     });
     // $FlowExpectedError[incompatible-call]
    const rq2_w: Promise<ResultSet> = pool.query('Parameterized Queries',1);

    // 1.2 the pool also supports checking out a client for
    // multiple operations, such as a transaction
    const rc: Promise<PoolClient> = pool.connect( (err, client, done) => {
      const _err: PG_ERROR|null = err;
      // $FlowExpectedError[incompatible-type]
      const _err_w: number = err;
      const _client: PoolClient|null = client;
      // $FlowExpectedError[incompatible-type]
      const _client_w: number = client;
      const _done: DoneCallback = done;
      // $FlowExpectedError[incompatible-type]
      const _done_w: number = done;
    });
    // $FlowExpectedError[incompatible-type]
    const rc_w: number = pool.connect();

    const rt: Promise<PoolClient> = pool.take( (err, client, done) => {
      const _err: PG_ERROR|null = err;
      // $FlowExpectedError[incompatible-type]
      const _err_w: number = err;
      const _client: PoolClient|null = client;
      // $FlowExpectedError[incompatible-type]
      const _client_w: number = client;
      const _done: DoneCallback = done;
      // $FlowExpectedError[incompatible-type]
      const _done_w: number = done;
    });
    // $FlowExpectedError[incompatible-type]
    const rt_w: number = pool.take();

    const re: Promise<void> = pool.end( err => {
      // $FlowExpectedError[incompatible-type]
      const _err_w: string = err; // ?:mixed
    });
    // $FlowExpectedError[incompatible-type-arg]
    const re_w: Promise<null> = pool.end();

    // Note: There is a slight different between pool.query and client.query.
    // client.query return a Query, pool.query return Promise<ResultSet>
    // class Query extends Promise<ResultSet>
    function test_PoolClient(client: PoolClient) {
      const rr: void = client.release('any msg');
      const rr1: void = client.release();
      // $FlowExpectedError[incompatible-type]
      const rr_w: null = client.release();
      const rq: QueryType = client.query('select * from table;');
      // $FlowExpectedError[incompatible-type-arg]
      const rqw: Promise<number> = pool.query('select * from table;');
      rq.on('row', (row, result) => {
        const _row: Row = row;
        const _result: ResultBuilder = result;
        // $FlowExpectedError[incompatible-type]
        const _row_w: number = row;
        // $FlowExpectedError[incompatible-type]
        const _result_w: number = result;
      });
      rq.on('end', (result) => {
        const reselt: ResultBuilder = result;
      });
      rq.on('error', (err) => {
        const _err: PG_ERROR = err;
        // $FlowExpectedError[incompatible-type]
        const _err_w: number = err;
      });
      // $FlowExpectedError[incompatible-call]
      rq.on('wrong', ()=>{});


      const rq2: Promise<ResultSet> = client.query('Parameterized Queries',[1],
       (err, result) => {
         const _err: PG_ERROR|null = err;
         // $FlowExpectedError[incompatible-type]
         const _err_w: number = err;
         const _result: ResultSet|void = result;
         // $FlowExpectedError[incompatible-type]
         const _result_w: number = result;
       });
       // $FlowExpectedError[incompatible-call]
      const rq2_w: Promise<ResultSet> = client.query('Parameterized Queries',1);
    }
  }

  // 2. instantiate a client directly.
  function test_client() {
    const client = new pg.Client();
    client.connect((err, client) => {
      const _err: PG_ERROR|null = err;
      const _client: Client|void = client;
      if (_client) {
        const rq: QueryType = _client.query('select * from table;');
        const rq2: Promise<ResultSet> = _client.query('Parameterized Queries',[1],
         (err, result) => {
           const _err: PG_ERROR|null = err;
           // $FlowExpectedError[incompatible-type]
           const _err_w: number = err;
           const _result: ResultSet|void = result;
           // $FlowExpectedError[incompatible-type]
           const _result_w: number = result;
         });
         // $FlowExpectedError[incompatible-call]
        const rq2_w: Promise<ResultSet> = _client.query('Parameterized Queries',1);

        _client.on('drain', _ => {
          const a: void = _;
        });
        // $FlowExpectedError[incompatible-call]
        _client.on('drain',1);
        _client.on('error', err => {
          const _err: PG_ERROR = err;
        });
        // $FlowExpectedError[incompatible-call]
        _client.on('error',1);
        _client.on('notification', msg => {
        });
        // $FlowExpectedError[incompatible-call]
        _client.on('notification',1);
        _client.on('notice', msg => {
        });
        // $FlowExpectedError[incompatible-call]
        _client.on('notice',1);
        _client.on('end', _ => {
          const a: void = _;
        });
        // $FlowExpectedError[incompatible-call]
        _client.on('end',1);
      }
    });
  }
}

// Simple example usage.
const pool = new pg.Pool({
  user: 'testuser',
  password: 'testuser',
  host: 'localhost',
  database: 'testdb',
  max: 10,
  idleTimeoutMillis: 1000,
});

// use pool
const promise_r = pool.query('select * from table;', ['11']);
// $FlowExpectedError[incompatible-type]
const p:boolean = promise_r; // Promise
promise_r.then( result => {
  // $FlowExpectedError[incompatible-type]
  const v:boolean = result.command; // string
  // $FlowExpectedError[incompatible-type]
  const v2:boolean = result.oid; // string
  // $FlowExpectedError[incompatible-type]
  const v3:boolean = result.rowCount; // string
  // $FlowExpectedError[incompatible-type]
  const v4:boolean = result.rows; // Array
  const rt:ResultSet = result; // the type of result
})

// directly use client
const promise_client = pool.connect();
promise_client.then( client => {
  client.query('select * from table;')
    .then( result => {
      // $FlowExpectedError[incompatible-type]
      const v:boolean = result; // result should be typed
    });
  client.release('error msg'); // accept error msg
  client.release(); // or without arguments
});
