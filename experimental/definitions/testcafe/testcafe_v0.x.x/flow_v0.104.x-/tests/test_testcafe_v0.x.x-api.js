import type { TestCafe } from 'testcafe';

import createTestCafe from 'testcafe';

var testcafe = createTestCafe('123', 1234, 1234);

// $ExpectError
testcafe.createRunner();

(async () => {
    var testcafe = await createTestCafe('123', 1234, 1234);

    // $ExpectError
    testcafe.createRunner('1234');
}) ();

(async () => {
    var testcafe = await createTestCafe('123', 1234, 1234);

    // $ExpectError
    testcafe.createBrowserConnection('chrome');
}) ();

(async () => {
    var testcafe = await createTestCafe('123', 1234, 1234);

    var runner = testcafe.createRunner();

    var connections = (new Array(3)).fill(testcafe.createBrowserConnection());

    var browserInfo1 = { path: '/usr/bin/chrome', cmd: '--new-window' };
    var browserInfo2 = { path: '/usr/bin/firefox', cmd: '--new-window' };

    runner.browsers('ie', 'chrome');
    runner.browsers('firefox');

    runner.browsers('opera', [connections[0]], [browserInfo1, connections[1]]);
    runner.browsers([connections[2], browserInfo2]);

    runner.reporter('xunit');

    runner.src('./test1.js', './test2.js');
    runner.src('./dir/test3.js');
    runner.src('../test4.js', ['./test5.js'], ['./test6.js', './test7.js']);

    runner.filter((test, fixture) => test === fixture);

    // $ExpectError
    runner.filter('1234');

    runner.run();
    runner.stop();

    runner.blabla();

    runner.run().then(() => console.log('ok'));
    runner.run().catch(() => console.log('fail'));
    runner.run().cancel().then(() => console.log('ok'));

    runner.cancel().then(() => console.log('ok'));
}) ();

(async () => {
    var testcafe = await createTestCafe('123', 1234, 1234);

    var runner = testcafe.createRunner();

    runner.run();
    runner.stop();

    // $ExpectError
    runner.run({ 'blabla': 1 });
}) ();

(async () => {
    var testcafe = await createTestCafe('123', 1234, 1234);

    var runner = testcafe.createRunner();

    runner.run().then(() => console.log('ok'));
    runner.run().catch(() => console.log('fail'));
    runner.run().cancel().then(() => console.log('ok'));

    // $ExpectError
    runner.cancel().then(() => console.log('ok'));
}) ();


