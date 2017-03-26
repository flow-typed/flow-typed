cd definitions
call npm install
call npm test
cd ..\cli
call npm install
node dist\cli.js validate-defs ..\definitions
node dist\cli.js run-tests %*
cd ..
