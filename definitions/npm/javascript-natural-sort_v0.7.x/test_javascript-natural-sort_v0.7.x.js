import naturalSort from 'javascript-natural-sort';

['10','9',2,1,'4'].sort(naturalSort);
['10.0401',10.022,10.042,'10.021999'].sort(naturalSort);
['1.528535047e5','1.528535047e7','1.528535047e3'].sort(naturalSort);
['10/12/2008','10/11/2008','10/11/2007','10/12/2007'].sort(naturalSort);

naturalSort('10.04f','10.039F');

// $ExpectError
naturalSort();

// $ExpectError
naturalSort(['192.168.0.100','192.168.0.1']);
