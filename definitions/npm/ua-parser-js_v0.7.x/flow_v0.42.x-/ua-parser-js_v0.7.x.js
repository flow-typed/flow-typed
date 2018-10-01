declare module 'ua-parser-js' {
  declare type UABrowser = {
    name: string,
    version: string,
  };

  declare type UACpu = {
    architecture: string,
  };

  declare type UADevice = {
    model: string,
    type:
      | 'console'
      | 'mobile'
      | 'tablet'
      | 'smarttv'
      | 'wearable'
      | 'embedded',
    vendor: string,
  };

  declare type UAEngine = {
    name: string,
    version: string,
  };

  declare type UAOs = {
    name: string,
    version: string,
  };

  declare type UAResult = {
    browser: UABrowser,
    cpu: UACpu,
    device: UADevice,
    engine: UAEngine,
    os: UAOs,
    ua: string,
  };

  declare class UAParser {
    constructor(): UAParser;
    getBrowser(): UABrowser;
    getCPU(): UACpu;
    getDevice(): UADevice;
    getEngine(): UAEngine;
    getOS(): UAOs;
    getResult(): UAResult;
    getUA(): string;
    setUA(ua: string): UAParser;
  }

  declare export default typeof UAParser;
}
