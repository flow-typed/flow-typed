// TODO: Waiting on libdef imports to be shipped to do something like:
//   import type {Transform} from 'stream';
type $todo$node$stream$Transform = any;

type $npm$through$ThroughStream = $todo$node$stream$Transform & {
  autoDestroy: boolean;
};

declare module 'through' {
  declare type ThroughStream = $npm$through$ThroughStream;

  declare function exports(
    write?: (data: any) => void,
    end?: () => void,
    opts?: { autoDestroy: boolean }
  ): $npm$through$ThroughStream;
}
