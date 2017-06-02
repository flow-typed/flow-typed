import { ClientFunction, t } from 'testcafe';

fixture `ClientFunction`
    .page `http://localhost:3000/fixtures/api/es-next/client-function/pages/index.html`;

const getLocation = ClientFunction(() => document.location.toString());
const getUserAgent = ClientFunction(() => navigator.userAgent);

test('Dispatch', async() => {
    throw await getUserAgent();
});

test('Call with arguments', async() => {
    const getElementText = ClientFunction((className, idx) => {
        return document.querySelectorAll('.' + className)[idx].textContent;
    });

    const answer = await getElementText('answer', 1);

    await t.expect(answer.trim()).eql('42');
});

test('Hammerhead code instrumentation', async() => {
    const location = await getLocation();

    await t.expect(location).eql('http://localhost:3000/fixtures/api/es-next/client-function/pages/index.html');
});


test('Async syntax in ClientFunction', async() => {
    ClientFunction(async() => Promise.resolve());
});

test('Generator in ClientFunction', async() => {
    ClientFunction(function*() {
        yield 1;
    });
});

test('Bind ClientFunction', async t => {
    const boundGetLocation = getLocation.with({boundTestRun: t});

    await boundGetLocation();
});

test('Promises support', async() => {
    var res = await ClientFunction(() => {
        return Promise
            .resolve()
            .then(()=> {
                return new Promise(resolve => {
                    window.setTimeout(() => resolve(42), 100);
                });
            });
    })();

    await t.expect(res).eql(42);
});

const selectByClassName = ClientFunction(className => document.querySelectorAll('.' + className));
const nthByClass = ClientFunction((className, n) => selectByClassName(className).then(res => res[n]), {dependencies: {selectByClassName}});

test('ClientFunction call with complex argument types', async() => {
    const fn = ClientFunction((re, err, undef, nan) => {
        return re instanceof RegExp &&
            re.source === '\\S+' &&
            err instanceof Error &&
            err.message === 'Hey!' &&
            undef === void 0 &&
            isNaN(nan);
    });

    const res = await fn(/\S+/ig, new Error('Hey!'), void 0, NaN);

    await t.expect(res).ok();
});

test('ClientFunction call with complex return types', async() => {
    const fn = ClientFunction(() => {
        return [/\S+/ig, new Error('Hey!'), void 0, NaN];
    });

    const res = await fn();

    await t.expect(res[0].source).eql('\\S+');
    await t.expect(res[1].message).eql('Hey!');
    await t.expect(res[2]).eql(void 0);
    await t.expect(Number.isNaN(res[3])).ok();
});

test('ClientFunction with function argument', async() => {
    function getAnswer() {
        return new Promise(resolve => {
            setTimeout(() => resolve(42), 30);
        });
    }

    const hfn = ClientFunction(fn => fn());
    const answer = await hfn(getAnswer);

    await t.expect(answer).eql(42);
});

test('Async/await in function argument of ClientFunction', async() => {
    const hfn = ClientFunction(fn => fn());

    await hfn(async() => Promise.resolve());
});

test('ClientFunction with ClientFunction argument', async() => {
    const hfn = ClientFunction(fn => fn());
    const location = await hfn(getLocation);

    await t.expect(location).eql('http://localhost:3000/fixtures/api/es-next/client-function/pages/index.html');
});

test('ClientFunction without `await`', async() => {
    getLocation();
});

test('DOM node return value', async() => {
    const getSomeNodes = ClientFunction(() => {
        const answer = document.querySelector('.answer');

        return [answer ? answer.childNodes[0] : null, document];
    });

    await getSomeNodes();
});
