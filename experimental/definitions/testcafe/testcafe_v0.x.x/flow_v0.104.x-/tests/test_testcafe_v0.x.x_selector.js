import { Selector, ClientFunction, t } from 'testcafe';

fixture `Selector`
    .page `http://localhost:3000/fixtures/api/es-next/selector/pages/index.html`;

const getElementById = Selector(id => document.getElementById(id));

test('HTMLElement snapshot basic properties', async t => {
    const el = await getElementById('htmlElement');

    if (!el)
        throw new Error();

    const { attributes, style, boundingClientRect } = el;

    if (!attributes || !style || !boundingClientRect)
        throw new Error();

    await t.expect(el.nodeType).eql(1);
    await t.expect(el.id).eql('htmlElement');
    await t.expect(el.tagName).eql('div');

    await t.expect(attributes['id']).eql('htmlElement');
    await t.expect(el.getAttribute('id')).eql('htmlElement');
    await t.expect(attributes['class']).eql('yo hey cool');
    await t.expect(attributes['style']).contains('width: 40px; height: 30px; padding-top: 2px; padding-left: 2px;');

    await t.expect(style['width']).eql('40px');
    await t.expect(el.getStyleProperty('width')).eql('40px');
    await t.expect(style['height']).eql('30px');
    await t.expect(style['padding-top']).eql('2px');
    await t.expect(style['padding-left']).eql('2px');
    await t.expect(style['display']).eql('block');

    await t.expect(el.namespaceURI).eql('http://www.w3.org/1999/xhtml');
    await t.expect(el.hasChildNodes).ok();
    await t.expect(el.childNodeCount).eql(3);
    await t.expect(el.hasChildElements).ok();
    await t.expect(el.childElementCount).eql(1);
    await t.expect(el.visible).ok();

    await t.expect(el.clientWidth).eql(42);
    await t.expect(el.clientHeight).eql(32);
    await t.expect(el.clientTop).eql(0);
    await t.expect(el.clientLeft).eql(1);

    await t.expect(el.offsetWidth).eql(43);
    await t.expect(el.offsetHeight).eql(32);
    await t.expect(el.offsetTop).eql(0);
    await t.expect(el.offsetLeft).eql(0);

    await t.expect(el.scrollWidth).eql(42);
    await t.expect(el.scrollHeight).eql(32);
    await t.expect(el.scrollTop).eql(0);
    await t.expect(el.scrollLeft).eql(0);

    await t.expect(el.focused).notOk();
    await t.expect(el.value).eql(void 0);
    await t.expect(el.checked).eql(void 0);
    await t.expect(el.selected).eql(void 0);

    await t.expect(boundingClientRect.width).eql(43);
    await t.expect(boundingClientRect.left).eql(0);
    await t.expect(el.getBoundingClientRectProperty('left')).eql(0);

    await t.expect(el.textContent).eql('\n    \n        42\n    \n    Yo\n');
    await t.expect(el.classNames).eql(['yo', 'hey', 'cool']);
});

test('SVGElement snapshot basic properties', async() => {
    const el = await getElementById('svgElement');

    if (!el)
        throw new Error();

    const { attributes, style, boundingClientRect } = el;

    if (!attributes || !style || !boundingClientRect)
        throw new Error();

    await t.expect(el.nodeType).eql(1);
    await t.expect(el.id).eql('svgElement');
    await t.expect(el.tagName).eql('rect');

    await t.expect(attributes['id']).eql('svgElement');
    await t.expect(attributes['width']).eql('300px');
    await t.expect(attributes['height']).eql('100px');
    await t.expect(attributes['class']).eql('svg1 svg2');
    await t.expect(attributes['style']).typeOf('string');

    await t.expect(style['display']).eql('inline');
    await t.expect(style['visibility']).eql('visible');

    await t.expect(el.namespaceURI).eql('http://www.w3.org/2000/svg');
    await t.expect(el.hasChildNodes).ok();
    await t.expect(el.childNodeCount).eql(1);
    await t.expect(el.hasChildElements).notOk();
    await t.expect(el.childElementCount).eql(0);
    await t.expect(el.visible).ok();

    await t.expect(el.clientWidth).eql(0);
    await t.expect(el.clientHeight).eql(0);
    await t.expect(el.clientTop).eql(0);
    await t.expect(el.clientLeft).eql(0);

    await t.expect(boundingClientRect.width).eql(300);
    await t.expect(boundingClientRect.height).eql(100);
    await t.expect(boundingClientRect.top).eql(32);
    await t.expect(boundingClientRect.left).eql(0);

    await t.expect(el.focused).notOk();
    await t.expect(el.value).eql(void 0);
    await t.expect(el.checked).eql(void 0);
    await t.expect(el.selected).eql(void 0);

    await t.expect(el.textContent).eql('\n        Hey\n    ');
    await t.expect(el.classNames).eql(['svg1', 'svg2']);
});

test('Input-specific element snapshot properties', async t => {
    let el = await getElementById('textInput');

    await t.expect(el.focused).notOk();
    await t.expect(el.value).eql('');
    await t.expect(el.checked).notOk();

    await t.typeText('#textInput', 'Hey!');

    el = await getElementById('textInput');

    await t.expect(el.focused).ok();
    await t.expect(el.value).eql('Hey!');
    await t.expect(el.checked).notOk();
    await t.expect(el.selected).eql(void 0);

    el = await getElementById('checkInput');

    await t.expect(el.focused).notOk();
    await t.expect(el.value).eql('on');
    await t.expect(el.checked).notOk();

    await t.click('#checkInput');

    el = await getElementById('checkInput');

    await t.expect(el.focused).ok();
    await t.expect(el.value).eql('on');
    await t.expect(el.checked).ok();

    el = await getElementById('option2');

    await t.expect(el.selected).notOk();

    const select = Selector('#selectInput');

    await t.expect(await select.selectedIndex).eql(0);

    await t
        .click(select)
        .click('#option2');

    await t.expect(await select.selectedIndex).eql(1);

    el = await getElementById('option2');

    await t.expect(el.selected).ok();
});

test('`innerText` element snapshot property', async() => {
    const el = await getElementById('htmlElementWithInnerText');

    if (!el.innerText)
        throw new Error();

    // NOTE: we have to use this regexp because the innerText field
    // returns a little bit different values in IE9 and other browsers
    await t.expect(/^Hey\nyo test {1,2}test( \u0000)?/.test(el.innerText.trim())).ok();
});

test('Non-element node snapshots', async t => {
    await t.navigateTo('http://localhost:3000/fixtures/api/es-next/selector/pages/non-element-nodes.html');

    const doc = await Selector(() => document)();

    await t.expect(doc.nodeType).eql(9);
    await t.expect(doc.childNodeCount).eql(2);
    await t.expect(doc.hasChildNodes).ok();
    await t.expect(doc.childElementCount).eql(1);
    await t.expect(doc.hasChildElements).ok();
    await t.expect(doc.textContent).eql(null);

    const textNode = await Selector(() => document.body && document.body.childNodes[0])();

    await t.expect(textNode.nodeType).eql(3);
    await t.expect(textNode.childNodeCount).eql(0);
    await t.expect(textNode.hasChildNodes).notOk();
    await t.expect(textNode.childElementCount).eql(0);
    await t.expect(textNode.hasChildElements).notOk();
    await t.expect(textNode.textContent).eql('Yo');

    const comment = await Selector(() => document.body && document.body.childNodes[1])();

    await t.expect(comment.nodeType).eql(8);
    await t.expect(comment.childNodeCount).eql(0);
    await t.expect(comment.hasChildNodes).notOk();
    await t.expect(comment.childElementCount).eql(0);
    await t.expect(comment.hasChildElements).notOk();
    await t.expect(comment.textContent).eql(' some comment ');

    const fragment = await Selector(() => {
        const f = document.createDocumentFragment();
        const div = document.createElement('div');

        div.innerHTML = '42';
        f.appendChild(div);

        return f;
    })();

    await t.expect(fragment.nodeType).eql(11);
    await t.expect(fragment.childNodeCount).eql(1);
    await t.expect(fragment.hasChildNodes).ok();
    await t.expect(fragment.childElementCount).eql(1);
    await t.expect(fragment.hasChildElements).ok();
    await t.expect(fragment.textContent).eql('42');
});

test('String ctor argument', async() => {
    const el1 = await Selector('#htmlElement')();
    const el2 = await Selector('.svg1')();

    await t.expect(el1.tagName).eql('div');
    await t.expect(el2.tagName).eql('rect');
});

test('Wait for element in DOM', async t => {
    await t.click('#createElement');

    const el = await Selector('#newElement')();

    await t.expect(el.tagName).eql('div');
});

test('Element does not appear', async() => {
    const el = await Selector('#someElement')();

    await t.expect(el).eql(null);
});

test('Error in code', async() => {
    const selector = Selector(() => {
        throw new Error('Hey ya!');
    });

    await selector();
});

test('Visibility check', async t => {
    const getInvisibleEl = Selector('#invisibleElement');

    let el = await getInvisibleEl();

    await t.expect(el.tagName).eql('div');

    el = await getInvisibleEl.with({visibilityCheck: true})();

    await t.click('#makeVisible');

    el = await getInvisibleEl.with({visibilityCheck: true})();

    await t.expect(el.tagName).eql('div');
});

test('Timeout', async() => {
    const getSlowEl = Selector('#slowElement').with({visibilityCheck: true, timeout: 300});
    const el = await getSlowEl();

    await t.expect(el).eql('null');
});

test('Snapshot `hasClass` method', async() => {
    let el = await getElementById('htmlElement');

    await t.expect(el.hasClass('yo')).ok();
    await t.expect(el.hasClass('cool')).ok();
    await t.expect(el.hasClass('42')).notOk();

    el = await getElementById('svgElement');

    await t.expect(el.hasClass('svg1')).ok();
    await t.expect(el.hasClass('svg2')).ok();
    await t.expect(el.hasClass('cool')).notOk();
});

test('Element on new page', async t => {
    const getNewElement = Selector('#newPageElement').with({timeout: 5000});

    await t.click('#newPage');

    const el = await getNewElement();

    await t.expect(el.tagName).eql('div');
});

test('Derivative selector without options', async() => {
    var derivative = Selector(getElementById('textInput'));

    await derivative();
});

test('<option> text selector', async() => {
    const selector = Selector('#selectInput > option').withText('O2');
    const el = await selector();

    await t.expect(el.id).eql('option2');
});

test('Snapshot properties shorthands on selector', async() => {
    let el = Selector('#htmlElement');

    await t.expect(await el.id).eql('htmlElement');
    await t.expect(await el.nodeType).eql(1);
    await t.expect(await el.tagName).eql('div');
    await t.expect(await el.namespaceURI).eql('http://www.w3.org/1999/xhtml');
    await t.expect(await el.childNodeCount).eql(3);
    await t.expect(await el.childElementCount).eql(1);
    await t.expect(await el.visible).ok();
    await t.expect(await el.clientWidth).eql(42);
    await t.expect(await el.offsetWidth).eql(43);
    await t.expect(await el.focused).notOk();
    await t.expect(await el.value).eql(void 0);
    await t.expect(await el.textContent).eql('\n    \n        42\n    \n    Yo\n');
    await t.expect(await el.classNames).eql(['yo', 'hey', 'cool']);
    await t.expect(await el.getStyleProperty('width')).eql('40px');
    await t.expect(await el.getStyleProperty('display')).eql('block');
    await t.expect(await el.getAttribute('id')).eql('htmlElement');
    await t.expect(await el.getAttribute('class')).eql('yo hey cool');
    await t.expect(await el.getBoundingClientRectProperty('width')).eql(43);
    await t.expect(await el.getBoundingClientRectProperty('left')).eql(0);
    await t.expect(await el.hasClass('yo')).ok();
    await t.expect(await el.hasClass('cool')).ok();
    await t.expect(await el.hasClass('some-class')).notOk();

    el = Selector('#checkInput');

    await t.expect(await el.focused).notOk();
    await t.expect(await el.value).eql('on');
    await t.expect(await el.checked).notOk();

    el = Selector(() => document);

    await t.expect(await el.hasClass('some-class')).notOk();
    await t.expect(await el.getStyleProperty('width')).eql(void 0);
    await t.expect(await el.getAttribute('id')).eql(void 0);
    await t.expect(await el.getBoundingClientRectProperty('left')).eql(void 0);

    const selector = Selector(id => document.getElementById(id));

    await t.expect(await selector('htmlElement').tagName).eql('div');
    await t.expect(await selector('htmlElement').classNames).eql(['yo', 'hey', 'cool']);
    await t.expect(await selector('checkInput').checked).notOk();
    await t.expect(await selector('checkInput').value).eql('on');
});

test("Snapshot property shorthand - selector doesn't match any element", async() => {
    await Selector('#someUnknownElement').tagName;
});

test("Snapshot shorthand method - selector doesn't match any element", async() => {
    await Selector('#someUnknownElement').getStyleProperty('width');
});

test('Selector "nth()" method', async() => {
    // String selector
    const getSecondEl = Selector('.idxEl').nth(-3);

    let el = await getSecondEl();

    await t.expect(el.id).eql('el2');

    // Function selector
    const getThirdEl = Selector(() => document.querySelectorAll('.idxEl')).nth(2);

    el = await getThirdEl();

    await t.expect(el.id).eql('el3');

    // If single node is returned index should be always 0
    const getFirstEl = Selector(() => document.querySelectorAll('.idxEl')[0]).nth(2);

    el = await getFirstEl();

    await t.expect(el).eql(null);

    // Should work on parameterized selectors
    const elWithClass = Selector(className => document.querySelectorAll('.' + className));

    await t.expect(await elWithClass('idxEl').nth(2).id).eql('el3');
    await t.expect(await elWithClass('idxEl').nth(-3).id).eql('el2');

    // Should be overridable
    await t.expect(await elWithClass('idxEl').nth(2).nth(1).id).eql('el2');
    await t.expect(await getSecondEl.nth(2).id).eql('el3');
});

test('Selector "withText" method', async() => {
    // String selector and string filter
    let selector = Selector('div').withText('element 4.');

    let el = await selector();

    await t.expect(el.id).eql('el4');

    // String selector and regexp filter
    selector = Selector('div').withText(/This is element \d+/);

    el = await selector();

    await t.expect(el.id).eql('el1');

    // Function selector and string filter
    selector = Selector(() => document.querySelectorAll('.idxEl')).withText('element 4.');

    el = await selector();

    await t.expect(el.id).eql('el4');

    // Function selector and regexp filter
    selector = Selector(() => document.querySelectorAll('.idxEl')).withText(/This is element \d+/);

    el = await selector();

    await t.expect(el.id).eql('el1');

    // Should filter element if text filter specified
    selector = Selector(id => document.getElementById(id)).withText('element 4.');

    el = await selector('el1');

    await t.expect(el).eql(null);

    el = await selector('el4');

    await t.expect(el.id).eql('el4');

    // Should filter document if text filter specified
    selector = Selector(() => document).withText('Lorem ipsum dolor sit amet, consectetur');

    el = await selector();

    await t.expect(el).eql(null);

    // Should be overridable
    el = await selector.withText('Hey?! (yo)')();

    await t.expect(el.nodeType).eql(9);

    selector = Selector(() => {
        var el = document.getElementById('el2');

        return el ? el.childNodes[0] : null;
    }).withText('Lorem ipsum dolor sit amet, consectetur');

    el = await selector();

    await t.expect(el).eql(null);

    el = await selector.withText('Hey?! (yo)')();

    await t.expect(el.nodeType).eql(3);

    // Should work on parameterized selectors
    const elWithClass = Selector(className => document.querySelectorAll('.' + className));

    await t.expect(await elWithClass('idxEl').withText('element 4.').id).eql('el4');
    await t.expect(await elWithClass('idxEl').withText('element 1.').id).eql('el1');
});

test('Selector "filter" method', async() => {
    // String filter
    await t.expect(await Selector('body div').filter('#htmlElementWithInnerText').id).eql('htmlElementWithInnerText');

    // Function filter
    await t.expect(await Selector('#container div').filter(node => node.id === 'el3').id).eql('el3');

    // Compound
    await t.expect(await Selector('div').filter('.common').filter('.class1').id).eql('common2');

    // Parameterized selector
    const withClass = Selector(className => document.getElementsByClassName(className));

    await t.expect(await withClass('common').filter('.class1').id).eql('common2');

    // With other filters
    await t.expect(await Selector('div').filter('.common').nth(0).id).eql('common1');

    // Should not apply implicit index filter when used as transitive selector
    let label = Selector('#list *').filter('label');

    await t.expect(await label.filter('#release').id).eql('release');
    await t.expect(await label.filter('#write').id).eql('write');

    // Should apply explicit index filter when used as transitive selector
    label = Selector('#list *').filter('label');

    await t.expect(await label.nth(0).parent(0).find('#release').exists).notOk();
    await t.expect(await label.nth(1).parent(0).find('#release').exists).notOk();
    await t.expect(await label.nth(2).parent(0).find('#release').exists).ok();
});

test('Combination of filter methods', async t => {
    const selector = Selector('div').withText('Hey?! (yo)').nth(1);

    let el = await selector();

    await t.expect(el.id).eql('el3');

    el = await selector.withText(/This is element \d+/)();

    await t.expect(el.id).eql('el4');

    // Selector should maintain filter when used as parameter
    const getId = ClientFunction(getEl => getEl().id);

    let id = await getId(selector);

    await t.expect(id).eql('el3');

    // Selector should maintain filter when used as dependency
    id = await t.eval(() => selector().id, {dependencies: {selector: selector.nth(0)}});

    await t.expect(id).eql('el2');
});

test('Selector "find" method', async() => {
    // String filter
    await t.expect(await Selector('#htmlElement').find('span').id).eql('someSpan');

    // Function filter
    await t.expect(await Selector('#container').find(node => node.id === 'el3').id).eql('el3');

    // Compound
    await t.expect(await Selector('a').find('f').find('g').innerText).eql('h');

    // Deep search
    await t.expect(await Selector('a').find('g').innerText).eql('h');
    await t.expect(await Selector('a').find(node => !!node.tagName && node.tagName.toLowerCase() === 'g').innerText).eql('h');

    // Parameterized selector
    const withId = Selector(id => document.getElementById(id));

    await t.expect(await withId('htmlElement').find('span').id).eql('someSpan');

    // With filters
    await t.expect(await Selector('#container').find('div').withText('element 4').id).eql('el4');

    // Should not apply implicit index filter when used as transitive selector
    let label = Selector('#list').find('li').find('label');

    await t.expect(await label.withText('Write code').id).eql('write');
    await t.expect(await label.withText('Test it').id).eql('test');
    await t.expect(await label.withText('Release it').id).eql('release');

    // Should apply explicit index filter when used as transitive selector
    label = Selector('#list').find('li').nth(1).find('label');

    await t.expect(await label.withText('Write code').exists).notOk();
    await t.expect(await label.withText('Test it').exists).ok();
    await t.expect(await label.withText('Release it').exists).notOk();
});

test('Selector "parent" method', async() => {
    // Index filter
    await t.expect((await Selector('g').parent(1).tagName).toLowerCase()).eql('a');
    await t.expect((await Selector('g').parent().parent().tagName).toLowerCase()).eql('a');
    await t.expect((await Selector('#option1').parent(1).tagName).toLowerCase()).eql('form');
    await t.expect((await Selector('#option1').parent(-2).tagName).toLowerCase()).eql('html');
    await t.expect(await Selector('g').parent(0).count).eql(1);

    // CSS selector filter
    await t.expect((await Selector('g').parent('a').tagName).toLowerCase()).eql('a');
    await t.expect(await Selector('#childDiv').parent('.parent1').id).eql('p1');

    // Function selector
    await t.expect(await Selector('#childDiv').parent(node => node.id === 'p2').id).eql('p2');

    // Parameterized selector
    const withId = Selector(id => document.getElementById(id));

    await t.expect(await withId('childDiv').parent('.parent1').id).eql('p1');

    // With filters
    await t.expect(await Selector('#childDiv').parent().withText(/Hey/).id).eql('p2');
    await t.expect(await Selector('#childDiv').parent().nth(1).id).eql('p1');

    // Should not apply implicit index filter when used as transitive selector
    let selector = Selector('.common').parent('div').find('div');

    await t.expect(await selector.nth(0).id).eql('common1');
    await t.expect(await selector.nth(1).id).eql('common2');

    // Should apply explicit index filter when used as transitive selector
    selector = Selector('.common').parent('div').nth(0).find('div');

    await t.expect(await selector.nth(0).exists).ok();
    await t.expect(await selector.nth(1).exists).notOk();
});

test('Selector "child" method', async() => {
    // Index filter
    await t.expect(await Selector('#container').child(1).id).eql('el2');
    await t.expect(await Selector('#p2').child().child().id).eql('p0');
    await t.expect(await Selector('#container').child(3).id).eql('el4');
    await t.expect(await Selector('#container').child(-2).id).eql('el3');
    await t.expect(await Selector('body').child(0).count).eql(1);

    // CSS selector filter
    await t.expect(await Selector('#container').child('#el3').id).eql('el3');
    await t.expect(await Selector('form').child('select').id).eql('selectInput');

    // Function selector
    await t.expect(await Selector('#container').child(el => el.id === 'el2').id).eql('el2');

    // Parameterized selector
    const withId = Selector(id => document.getElementById(id));

    await t.expect(await withId('container').child('#el3').id).eql('el3');

    // With filters
    await t.expect(await Selector('#container').child().withText('element 4').id).eql('el4');

    // Should not apply implicit index filter when used as transitive selector
    let label = Selector('#list').child('li').child('label');

    await t.expect(await label.withText('Write code').id).eql('write');
    await t.expect(await label.withText('Test it').id).eql('test');
    await t.expect(await label.withText('Release it').id).eql('release');

    // Should apply explicit index filter when used as transitive selector
    label = Selector('#list').child('li').nth(1).child('label');

    await t.expect(await label.withText('Write code').exists).notOk();
    await t.expect(await label.withText('Test it').exists).ok();
    await t.expect(await label.withText('Release it').exists).notOk();
});

test('Selector "sibling" method', async() => {
    // Index filter
    await t.expect(await Selector('#el2').sibling(1).id).eql('el3');
    await t.expect(await Selector('#el2').sibling().sibling().id).eql('el2');
    await t.expect(await Selector('#el1').sibling(2).id).eql('el4');
    await t.expect(await Selector('#el1').sibling(-3).id).eql('el2');
    await t.expect(await Selector('#el2').sibling(0).count).eql(1);

    // CSS selector filter
    await t.expect(await Selector('#selectInput').sibling('[type=checkbox]').id).eql('checkInput');

    // Function selector
    await t.expect(await Selector('#el2').sibling(el => el.id === 'el3').id).eql('el3');

    // Parameterized selector
    const withId = Selector(id => document.getElementById(id));

    await t.expect(await withId('el2').sibling().id).eql('el1');

    // With filters
    await t.expect(await Selector('#el2').sibling().withText('element 4').id).eql('el4');
});

test('Selector "count" and "exists" properties', async() => {
    await t.expect(await Selector('.idxEl').count).eql(4);
    await t.expect(await Selector('.idxEl').nth(2).count).eql(1);
    await t.expect(await Selector('form').find('input').count).eql(2);
    await t.expect(await Selector('.notexists').count).eql(0);

    const witClass = Selector(className => document.getElementsByClassName(className));

    await t.expect(await witClass('idxEl').count).eql(4);
    await t.expect(await witClass('idxEl').withText('Hey?!').count).eql(2);

    await t.expect(await Selector('.idxEl').exists).ok();
    await t.expect(await Selector('.idxEl').nth(2).exists).ok();
    await t.expect(await Selector('form').find('input').exists).ok();
    await t.expect(await Selector('.notexists').exists).notOk();
    await t.expect(await witClass('idxEl').exists).ok();
    await t.expect(await witClass('idxEl').withText('Hey?!').exists).ok();
    await t.expect(await witClass('idxEl').withText('testtesttest').exists).notOk();
});

test('Selector filter dependencies and index argument', async t => {
    const isOne = ClientFunction(i => i === 1);
    const isTwo = ClientFunction(i => i === 2);
    const firstNode = ClientFunction((node, i) => isOne(i));

    await t
        .expect(Selector('.idxEl').filter((node, i) => !!isTwo(i), {isTwo}).id).eql('el3')
        .expect(Selector('.find-parent').find((node, i) => !!isOne(i), {isOne}).id).eql('find-child2')
        .expect(Selector('#childDiv').parent((node, i) => !!isTwo(i), {isTwo}).id).eql('p2')
        .expect(Selector('.find-parent').child((node, i) => !!isOne(i), {isOne}).id).eql('find-child3');
});

test('Selector filter origin node argument', async t => {
    await t
        .expect(Selector('#p2').find((el, idx, ancestor) => {
            return ancestor.id === 'p2' && el.id === 'childDiv';
        }).id).eql('childDiv')

        .expect(Selector('#p0').child((el, idx, parent) => {
            return parent.id === 'p0' && el.id === 'childDiv';
        }).id).eql('childDiv')

        .expect(Selector('#childDiv').parent((el, idx, child) => {
            return child.id === 'childDiv' && el.id === 'p1';
        }).id).eql('p1')

        .expect(Selector('#el2').sibling((el, idx, refSibling) => {
            return refSibling.id === 'el2' && el.id === 'el3';
        }).id).eql('el3');
});


test('Add custom DOM properties method - property throws an error', async() => {
    const el = Selector('rect').addCustomDOMProperties({
        prop: () => {
            throw new Error('test');
        }
    });

    await el();
});

test('Selector "nextSibling" method', async t => {
    // Index filter
    await t
        .expect(Selector('#el2').nextSibling(1).id).eql('el4')
        .expect(Selector('#el2').nextSibling().nextSibling().id).eql('el4')
        .expect(Selector('#el1').nextSibling().id).eql('el2')
        .expect(Selector('#el1').nextSibling(-2).id).eql('el3')
        .expect(Selector('#el2').nextSibling(0).count).eql(1);

    // CSS selector filter
    await t.expect(Selector('#textInput').nextSibling('select').id).eql('selectInput');

    // Function selector
    await t.expect(Selector('#el2').nextSibling(el => el.id === 'el3').id).eql('el3');

    // Parameterized selector
    const withId = Selector(id => document.getElementById(id));

    await t.expect(withId('el2').nextSibling().id).eql('el3');

    // With filters
    await t.expect(Selector('#el2').nextSibling().withText('element 4').id).eql('el4');
});

test('Selector "prevSibling" method', async t => {
    // Index filter
    await t
        .expect(Selector('#el3').prevSibling(1).id).eql('el2')
        .expect(Selector('#el3').prevSibling().nextSibling().prevSibling().id).eql('el1')
        .expect(Selector('#el3').prevSibling().id).eql('el1')
        .expect(Selector('#el3').prevSibling(-2).id).eql('el1')
        .expect(Selector('#el2').prevSibling(0).count).eql(1);

    // CSS selector filter
    await t.expect(Selector('#selectInput').prevSibling('[type=text]').id).eql('textInput');

    // Function selector
    await t.expect(Selector('#el3').prevSibling(el => el.id === 'el2').id).eql('el2');

    // Parameterized selector
    const withId = Selector(id => document.getElementById(id));

    await t.expect(withId('el2').prevSibling().id).eql('el1');

    // With filters
    await t.expect(Selector('#el4').prevSibling().withText('Hey?!').nth(0).id).eql('el2');
});

test('Selector `addCustomMethods` method', async t => {
    let el = Selector('rect').addCustomMethods({
        prop1: (node, str) => str + '42',
        prop2: (node, str, separator) => [str, node.tagName].join(separator)
    });

    await t
        .expect(await el.prop1('value: ')).eql('value: 42')
        .expect(await el().prop1('value: ')).eql('value: 42')
        // $ExpectError
        .expect(await el.prop3('tagName', ': ')).eql('tagName: rect')

        .expect(await el.parent().filter(() => true).tagName).eql('svg')
        .expect(await el.exists).ok()
        .expect(await el.count).eql(1);

    const snapshot = await el();

    await t
        .expect(snapshot.prop1('value: ')).eql('value: 42')
        .expect(await snapshot.prop1('value: ')).eql('value: 42');

    await t
        .expect(el.prop1('Hi')).eql('Hi!!!')
        .expect(el.prop2('tagName', ': ')).eql('tagName: rect');

    const nonExistingElement = await Selector('nonExistingElement').addCustomMethods({
        prop: () => 'value'
    })();

    await t.expect(nonExistingElement).eql(null);
});

test('Add custom method - method throws an error', async() => {
    const el = Selector('rect').addCustomMethods({
        customMethod: () => {
            throw new Error('test');
        }
    });

    await el.customMethod();
});

test('hasAttribute method', async t => {
    let sel = Selector('#htmlElement');
    let el = await sel();

    await t
        .expect(sel.hasAttribute('id')).ok()
        .expect(sel.hasAttribute('class')).ok()
        .expect(sel.hasAttribute('style')).ok()
        .expect(sel.hasAttribute('data-something')).notOk()
        .expect(sel.hasAttribute('data-something-else')).notOk()

        .expect(el.hasAttribute('id')).ok()
        .expect(el.hasAttribute('class')).ok()
        .expect(el.hasAttribute('style')).ok()
        .expect(el.hasAttribute('data-something')).notOk()
        .expect(el.hasAttribute('data-something-else')).notOk();

    await t.eval(() => {
        const el = document.querySelector('#htmlElement');

        if (!el)
            return;

        el.setAttribute('data-something', 'true');
        el.setAttribute('data-something-else', void 0);
    });

    await t
        .expect(sel.hasAttribute('data-something')).ok()
        .expect(sel.hasAttribute('data-something-else')).ok();

    el = await sel();

    await t
        .expect(el.hasAttribute('data-something')).ok()
        .expect(el.hasAttribute('data-something-else')).ok();

    sel = Selector(() => document);
    el = await sel();

    // NOTE: method should not be available in snapshot for non-element nodes
    await t
        .expect(sel.hasAttribute('id')).notOk()
        .expect(el.hasAttribute).eql(void 0);
});
