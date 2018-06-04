// @flow
import {Settings} from "@material-ui/icons";
import SettingsIcon from "@material-ui/icons/Settings";
import Foo from "@material-ui/icons/Foo";

(
    <Settings />,
    <SettingsIcons />
);
// $ExpectError
<Foo />
