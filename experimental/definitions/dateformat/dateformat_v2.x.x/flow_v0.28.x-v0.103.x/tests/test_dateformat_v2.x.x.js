import dateFormat from "dateformat";

const now = new Date();

const a1: string = dateFormat();
const a2: string = dateFormat(now);
const a3: string = dateFormat(now, "yyyy");
const a4: string = dateFormat(now, "yyyy", true);
const a5: string = dateFormat(now, "yyyy", true, true);

const b1: string = dateFormat('yyyy');
const b2: string = dateFormat('yyyy', "hh");
const b3: string = dateFormat('yyyy', "hh", true);
const b4: string = dateFormat('yyyy', "hh", true, true);

const c1: string = dateFormat(0);
const c2: string = dateFormat(0, "hh");
const c3: string = dateFormat(0, "hh", true);
const c4: string = dateFormat(0, "hh", true, true);

const d1: string = dateFormat('yyyy');
const d2: string = dateFormat('yyyy', true);
const d3: string = dateFormat('yyyy', true, true);

dateFormat.masks['hammerTime'] = 'HH:MM! "Can\'t touch this!"';
const f1: string = dateFormat(now, "hammerTime");

// $ExpectError
const e1: string = dateFormat(now, true);

// $ExpectError
const e2: string = dateFormat(0, true);

// $ExpectError
dateFormat.masks['hammerTime'] = 0;
