cd cli
call npm install
node dist/cli.js validate-defs ../definitions
node dist/cli.js run-tests --onlyChanged
