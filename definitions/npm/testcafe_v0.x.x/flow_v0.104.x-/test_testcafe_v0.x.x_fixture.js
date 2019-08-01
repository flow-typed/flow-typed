fixture `123`
fixture('123')
// $ExpectError
fixture(123)

fixture `123`.page `123`
fixture `123`.page('123')
// $ExpectError
fixture `123`.page(123)

fixture
    .skip
    .only
    ('Fixture1')
    .page('http://example.com')
    .httpAuth({
        username: 'user',
        password: 'pass',
        domain: 'domain',
        workstation: 'workstation'
    })
    .meta('fixture', 'fixture')
    .meta({ foo: 'bar' })
    .before(async() => {
    })
    .after(async() => {
    })
    .beforeEach(async t => {
        t.ctx['1'] = 2;
        t.ctx['someKey'] = [];
        t.fixtureCtx['yo'] = 'hey';
    })
    .afterEach(async t => {
        await t.click('#smth');
    });

test
    .before(async t => {
        await t.click('#smth');
    })
    .after(async t => {
        await t.click('#smth');
    })
    ('Test1', async t => {
        t.ctx['1'] = 2;
        t.ctx['someKey'] = [];
        t.fixtureCtx['yo'] = 'hey';

        await t.click('#smth');
    })
    .skip
    .only
    .meta('test', 'test')
    .meta({ foo: 'bar' })
    .page('http://example.com')
    .httpAuth({
        username: 'user',
        password: 'pass',
        domain: 'domain',
        workstation: 'workstation'
    });
