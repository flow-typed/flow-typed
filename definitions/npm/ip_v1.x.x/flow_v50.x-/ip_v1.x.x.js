declare module "ip" {
  declare type SubnetInformation = {
    networkAddress: string,
    firstAddress: string,
    lastAddress: string,
    broadcastAddress: string,
    subnetMask: string,
    subnetMaskLength: number,
    numHosts: number,
    length: number,
    contains(string): boolean
  };
  declare type IP = {
    address(): string,
    isEqual(string, string): boolean,
    toBuffer(string): Buffer,
    toString(Buffer): string,
    fromPrefixLen(number): string,
    mask(string, string): string,
    cidr(string): string,
    not(string): string,
    or(string, string): string,
    isPrivate(string): boolean,
    isV4Format(string): boolean,
    isV6Format(string): boolean,
    toLong(string): number,
    fromLong(number): string,
    subnet(string, string): SubnetInformation,
    cidrSubnet(string): SubnetInformation
  };
  declare module.exports: IP;
}
