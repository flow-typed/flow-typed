// @flow

import Perf from 'react-addons-perf';


const ok = () => {
  Perf.start();
  setTimeout(Perf.stop, 1000);
};

const fail = () => {
  // $ExpectError
  Perf.doesntExist();
};


