declare type Middleware = (req: http$IncomingMessage, res: http$ServerResponse, next: (err?: ?Error) => mixed) => mixed;

declare type helmet$XssFilterOptions = {
  setOnOldIE?: boolean;
}

declare type helmet$ReferrerPolicyOptions = {
  policy?:   'no-referrer' | 'no-referrer-when-downgrade' | 'same-origin' | 'origin' | 'strict-origin' | 'origin-when-cross-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url' | ''
}

declare type helmet$HstsOptions = {
  maxAge: number;
  includeSubDomains: boolean;
  preload: boolean;
  setIf?: (req: http$IncomingMessage, res: http$ServerResponse) => boolean;
}

declare type helmet$HpkpOptions = {
  maxAge: number;
  sha256s: Array<string>;
  includeSubDomains?: boolean;
  reportUri?: string;
  reportOnly?: boolean;
  setIf?: (req: http$IncomingMessage, res: http$ServerResponse) => boolean;
}

declare type helmet$hidePoweredByOptions = {
  setTo?: string;
}

declare type helmet$FrameguardOptions = {
  action?: 'DENY' | 'ALLOW-FROM' | 'SAMEORIGIN';
  domain?: string;
}

declare type helmet$ExpectCT = {
  enforce?: boolean;
  maxAge?: number;
  reportUri?: string;
}

declare type helmet$DnsOptions = {
  allow?: boolean;
}

declare type helmet$CspDirectives = {
  defaultSrc?: Array<string>;
  scriptSrc?: Array<string>;
  styleSrc?: Array<string>;
  fontSrc?: Array<string>;
  imgSrc?: Array<string>;
  sandbox?: Array<string>;
  reportUri?: string;
  objectSrc?: Array<string>;
  upgradeInsecureRequests?: true;
}

declare type helmet$CspOptions = {
  directives?: helmet$CspDirectives;
  loose?: boolean;
  reportOnly?: boolean;
  setAllHeaders?: boolean;
  disableAndroid?: boolean;
  browserSniff?: boolean;
}

declare type cspOptions = helmet$CspOptions;
declare type dnsOptions = helmet$DnsOptions;
declare type ctOptions = helmet$ExpectCT;
declare type frameguardOptions = helmet$FrameguardOptions;
declare type hidePoweredByOptions = helmet$hidePoweredByOptions;
declare type hpkpOptions = helmet$HpkpOptions;
declare type hstsOptions = helmet$HstsOptions;
declare type referrerPolicyOptions = helmet$ReferrerPolicyOptions;
declare type xssFilterOptions = helmet$XssFilterOptions;

declare module 'helmet' {
  declare module.exports: {
    (options?: { frameguard?: boolean | { action?: 'deny' | 'allow' } }): Middleware;
    contentSecurityPolicy(options?: cspOptions): Middleware;
    dnsPrefetchControl(options?: dnsOptions): Middleware;
    expectCt(options?: ctOptions): Middleware;
    frameguard(options?: frameguardOptions): Middleware;
    hidePoweredBy(options?: hidePoweredByOptions): Middleware;
    hpkp(options: hpkpOptions): Middleware;
    hsts(options?: hstsOptions): Middleware;
    ieNoOpen(): Middleware;
    noCache(): Middleware;
    noSniff(): Middleware;
    referrerPolicy(options?: referrerPolicyOptions): Middleware;
    xssFilter(options?: xssFilterOptions): Middleware;
  }
}
