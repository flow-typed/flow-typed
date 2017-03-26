// @flow
import * as webdriver from 'selenium-webdriver';

// webdriver.Capabilities
const capabilities = webdriver.Capabilities.chrome();
capabilities.setScrollBehavior(1);

// webdriver.logging.Preferences
const logPreferences = new webdriver.logging.Preferences();
logPreferences.setLevel(webdriver.logging.Type.BROWSER, webdriver.logging.Level.DEBUG);
capabilities.setLoggingPrefs(logPreferences);

// webdriver.Builder
const builder = new webdriver.Builder().withCapabilities(capabilities);
const driver = builder.build();

// timeouts
driver.manage().timeouts().implicitlyWait(0);
driver.manage().timeouts().pageLoadTimeout(1);
driver.manage().timeouts().setScriptTimeout(2);

// $ExpectError
const capabilities_: string = webdriver.Capabilities.chrome();
