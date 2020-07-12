// @flow
import Joyride from 'react-joyride';

const A = <Joyride debug/>;
const B = <Joyride/>;
const C = <Joyride showOverlay showBackButton scrollToSteps scrollToFirstStep/>;
// $FlowExpectedError How should we type this?!
const D: string = <Joyride foo/>;
