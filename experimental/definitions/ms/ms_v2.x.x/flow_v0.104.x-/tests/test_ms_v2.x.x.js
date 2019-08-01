import ms from 'ms';

ms('2 days');
ms('1d');
ms('10h');
ms('2.5 hrs');
ms('2h');
ms('1m');
ms('5s');
ms('1y');
ms('100');

ms(60000);
ms(2 * 60000);
ms(ms('10 hours'));

ms(60000, {long: true});
ms(2 * 60000, {long: true});
ms(ms('10 hours'), {long: true});

// $ExpectError
ms();

// $ExpectError
ms({});
