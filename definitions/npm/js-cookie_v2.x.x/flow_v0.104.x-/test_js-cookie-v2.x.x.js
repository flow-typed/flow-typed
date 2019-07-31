// @flow
import Cookie from 'js-cookie';

Cookie.set('version', 20, {
    path: '/'
});

// $ExpectError
const v: string = Cookie.get('version');

const all: Object = Cookie.get();

// $ExpectError
Cookie.set(12, 'should fail');

Cookie.remove('version', {
    path: '/'
});

// $ExpectError
Cookie.removeCookie()

Cookie.set('data', {
    a: 1,
    b: 3
}, { secure: true });


// $ExpectError
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


// $ExpectError
Cookie.defaults = {
    secure: 1
};
