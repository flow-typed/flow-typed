declare class vcf$vCardProperty {
    constructor(): vcf$vCardProperty;
    static fromJSON(data: Array<string | string[]>): vcf$vCardProperty;
    is(type: string): boolean;
    isEmpty(): boolean;
    toString(version: string): string;
    valueOf(): string;
    toJSON(): Array<string | string[]>;
  }

declare module "vcf" {
  declare class vCard {
    constructor(): vCard;
    static mimeType: string;
    static extension: string;
    static versions: Array<string>;
    static foldLine(
      input: string,
      maxLength: number,
      hardWrap: boolean
    ): string;
    static normalize(input: string): string;
    static isSupported(version: string): boolean;
    static parse(value: string | Buffer): Array<vCard>;
    static parseLines(): Array<vCard>;
    static fromJSON(jcard: Array<string | string[]>): vCard;
    static format(card: vCard, version: string): string;
    static Property(): vcf$vCardProperty;
    get(key: string): vcf$vCardProperty | Array<vcf$vCardProperty>;
    set(key: string, value: string, params?: {}): this;
    add(key: string, value: string, params?: {}): this;
    addProperty(prop: vcf$vCardProperty): this;
    parse(value: string): vCard;
    toString(version?: string, charset?: string): string;
    toJCard(version: string): Array<string | string[]>;
    toJSON(): Array<string | string[]>;
  }

  declare module.exports: typeof vCard;
}
