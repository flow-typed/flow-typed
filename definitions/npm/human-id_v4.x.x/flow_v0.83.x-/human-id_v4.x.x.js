declare module 'human-id' {
  declare export var adjectives: Array<string>;
  declare export var nouns: Array<string>;
  declare export var verbs: Array<string>;
  declare export var adverbs: Array<string>;

  declare type Options = {|
    separator?: string,
    capitalize?: boolean,
    adjectiveCount?: number,
    addAdverb?: boolean,
  |};

  declare export function humanId(options?: Options | string | boolean): string;
  declare export function poolSize(options?: Options): number;
  declare export function maxLength(options?: Options): number;
  declare export function minLength(options?: Options): number;

  declare export default typeof humanId;
}
