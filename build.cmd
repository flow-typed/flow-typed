cd definitions
call yarn install
call yarn test
cd ..\cli
call yarn
call yarn run flow
node dist\cli.js validate-defs ..\definitions
node dist\cli.js run-tests --onlyChanged
