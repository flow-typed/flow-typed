// @flow
import pg from 'pg';
import type {
  ResultSet,
  ResultBuilder,
  QueryType,
  QuerySubmittableConfig,
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
// $ExpectError
pg.types.setTypeParser(1184, 'binary', (v: string) => v)
pg.types.setTypeParser(1184, 'binary', (v: Buffer) => v)
// $ExpectError
pg.types.setTypeParser(1184, (v: Buffer) => v)

// There are two common ways to use node-postgres.
function test_pg() {
  // 1. interact with your server via a pool of clients
  function test_pool(pool: Pool) {
    // 1.1 you can run queries directly against the pool
    const rq: Promise<ResultSet> = pool.query('select * from table;');
    // $ExpectError
    const rqw: Promise<number> = pool.query('select * from table;');
    const rq2: Promise<ResultSet> = pool.query('Parameterized Queries',[1],
     (err, result) => {
       const _err: PG_ERROR|null = err;
       // $ExpectError
       const _err_w: number = err;
       const _result: ResultSet|void = result;
       // $ExpectError
       const _result_w: number = result;
     });
     // $ExpectError
    const rq2_w: Promise<ResultSet> = pool.query('Parameterized Queries',1);

    // 1.2 the pool also supports checking out a client for
    // multiple operations, such as a transaction
    const rc: Promise<PoolClient> = pool.connect( (err, client, done) => {
      const _err: PG_ERROR|null = err;
      // $ExpectError
      const _err_w: number = err;
      const _client: PoolClient|null = client;
      // $ExpectError
      const _client_w: number = client;
      const _done: DoneCallback = done;
      // $ExpectError
      const _done_w: number = done;
    });
    // $ExpectError
    const rc_w: number = pool.connect();

    const rt: Promise<PoolClient> = pool.take( (err, client, done) => {
      const _err: PG_ERROR|null = err;
      // $ExpectError
      const _err_w: number = err;
      const _client: PoolClient|null = client;
      // $ExpectError
      const _client_w: number = client;
      const _done: DoneCallback = done;
      // $ExpectError
      const _done_w: number = done;
    });
    // $ExpectError
    const rt_w: number = pool.take();

    const re: Promise<void> = pool.end( err => {
      // $ExpectError
      const _err_w: string = err; // ?:mixed
    });
    // $ExpectError
    const re_w: Promise<null> = pool.end();

    // Note: There is a slight different between pool.query and client.query.
    // client.query return a Query, pool.query return Promise<ResultSet>
    // class Query extends Promise<ResultSet>
    function test_PoolClient(client: PoolClient) {
      const rr: void = client.release('any msg');
      const rr1: void = client.release();
      // $ExpectError
      const rr_w: null = client.release();
      const rq: QueryType = client.query('select * from table;');
      // $ExpectError
      const rqw: Promise<number> = pool.query('select * from table;');
      rq.on('row', (row, result) => {
        const _row: Row = row;
        const _result: ResultBuilder = result;
        // $ExpectError
        const _row_w: number = row;
        // $ExpectError
        const _result_w: number = result;
      });
      rq.on('end', (result) => {
        const reselt: ResultBuilder = result;
      });
      rq.on('error', (err) => {
        const _err: PG_ERROR = err;
        // $ExpectError
        const _err_w: number = err;
      });
      // $ExpectError
      rq.on('wrong', ()=>{});


      const rq2: Promise<ResultSet> = client.query('Parameterized Queries',[1],
       (err, result) => {
         const _err: PG_ERROR|null = err;
         // $ExpectError
         const _err_w: number = err;
         const _result: ResultSet|void = result;
         // $ExpectError
         const _result_w: number = result;
       });
       // $ExpectError
      const rq2_w: Promise<ResultSet> = client.query('Parameterized Queries',1);

      const rq3: QuerySubmittableConfig = client.query({
          text: 'select * from table;',
          submit: (connection: mixed): void => {
            const _connection: mixed = connection;
          },
      });
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
           // $ExpectError
           const _err_w: number = err;
           const _result: ResultSet|void = result;
           // $ExpectError
           const _result_w: number = result;
         });
        const rq3: QuerySubmittableConfig = _client.query({
            text: 'select * from table;',
            submit: (connection: mixed): void => {
              const _connection: mixed = connection;
            },
        });
         // $ExpectError
        const rq2_w: Promise<ResultSet> = _client.query('Parameterized Queries',1);

        _client.on('drain', _ => {
          const a: void = _;
        });
        // $ExpectError
        _client.on('drain',1);
        _client.on('error', err => {
          const _err: PG_ERROR = err;
        });
        // $ExpectError
        _client.on('error',1);
        _client.on('notification', msg => {
        });
        // $ExpectError
        _client.on('notification',1);
        _client.on('notice', msg => {
        });
        // $ExpectError
        _client.on('notice',1);
        _client.on('end', _ => {
          const a: void = _;
        });
        // $ExpectError
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
  statement_timeout: false,
  idleTimeoutMillis: 1000,
  connectionTimeoutMillis: 1000
});

// use pool
const promise_r = pool.query('select * from table;', ['11']);
// $ExpectError
const p:boolean = promise_r; // Promise
promise_r.then( result => {
  // $ExpectError
  const v:boolean = result.command; // string
  // $ExpectError
  const v2:boolean = result.oid; // string
  // $ExpectError
  const v3:boolean = result.rowCount; // string
  // $ExpectError
  const v4:boolean = result.rows; // Array
  const rt:ResultSet = result; // the type of result
})

// directly use client
const promise_client = pool.connect();
promise_client.then( client => {
  client.query('select * from table;')
    .then( result => {
      // $ExpectError
      const v:boolean = result; // result should be typed
    });
  client.release('error msg'); // accept error msg
  client.release(); // or without arguments
});
