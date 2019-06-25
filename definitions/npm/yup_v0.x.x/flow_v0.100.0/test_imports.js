// @flow
import { it, describe } from 'flow-typed-test';
import {
  addMethod,
  isSchema,
  array,
  bool,
  date,
  mixed,
  string,
  number,
  object,
  reach,
} from 'yup';

import reach2 from 'yup/lib/util/reach';
import isSchema2 from 'yup/lib/util/isSchema';
import array2 from 'yup/lib/array';
import bool2 from 'yup/lib/bool';
import date2 from 'yup/lib/date';
import mixed2 from 'yup/lib/mixed';
import string2 from 'yup/lib/string';
import number2 from 'yup/lib/number';
import object2 from 'yup/lib/object';

it('should work properly', () => {
  bool();
});
