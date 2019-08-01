// @flow
import MobileDetect from 'mobile-detect';

/* Trivial case */

// $ExpectError
MobileDetect.foo();

const detect = new MobileDetect('');

detect.mobile();
detect.mobileGrade();
detect.os();
detect.phone();
detect.tablet();
detect.userAgent();
detect.userAgents();
detect.version('Mobile');
detect.versionStr('Mobile');
detect.isPhoneSized(1024);

// $ExpectError
detect.foo();
