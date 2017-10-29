cd definitions
call yarn install
call yarn test
cd ..\cli
call yarn install
node dist\cli.js validate-defs ..\definitions
node dist\cli.js run-tests %*
cd ..
