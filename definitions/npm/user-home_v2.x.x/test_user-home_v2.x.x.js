import userHome from 'user-home';

const home: string = userHome;
//=> '/Users/sindresorhus'

// $ExpectError
(userHome: number);
