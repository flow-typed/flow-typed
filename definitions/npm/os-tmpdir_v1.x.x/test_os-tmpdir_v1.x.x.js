import osTmpdir from 'os-tmpdir';

const tmp: string = osTmpdir();
//=> /var/folders/m3/5574nnhn0yj488ccryqr7tc80000gn/T

// $ExpectError
(osTmpdir(): number);
