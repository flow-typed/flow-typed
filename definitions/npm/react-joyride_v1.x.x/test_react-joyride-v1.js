// @flow
import Joyride from 'react-joyride';

const A = <Joyride debug/>;
const B = <Joyride/>;
const C = <Joyride showOverlay showBackButton scrollToSteps scrollToFirstStep/>;
// $ExpectError How should we type this?!
const D: string = <Joyride foo/>;
