// @flow
import Cookie from 'js-cookie';

Cookie.set('version', 20, {
    path: '/'
});

// $FlowExpectedError[incompatible-type]
const v: string = Cookie.get('version');

const all: Object = Cookie.get();

// $FlowExpectedError[incompatible-call]
Cookie.set(12, 'should fail');

Cookie.remove('version', {
    path: '/'
});

// $FlowExpectedError[prop-missing]
Cookie.removeCookie()

Cookie.set('data', {
    a: 1,
    b: 3
}, { secure: true });


// $FlowExpectedError[prop-missing]
Cookie.getJson();

const data: Object = Cookie.getJSON('data');


const otherCookie = Cookie.noConflict();

otherCookie.set('name', 'OtherCookie');


const cookieWithConverter = otherCookie.withConverter((value: string, name: string): string => {
    return value;
});

cookieWithConverter.defaults = {
    secure: true
};


Cookie.defaults = {
    // $FlowExpectedError[incompatible-type]
    secure: 1
};
