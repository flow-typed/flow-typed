import osHomedir from 'os-homedir';

const home: string = osHomedir();
//=> /Users/sindresorhus

// $FlowExpectedError
(osHomedir(): number);
