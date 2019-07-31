// @flow

declare module 'diskusage' {
    declare type DiskUsage = {|
        available: number,
        free: number,
        total: number
    |};

    declare function checkWithPromise(path: string): Promise<DiskUsage>;
    declare function checkWithCallback(path: string, callback: (error: Error, result: DiskUsage) => void): void;
    declare function checkSync(path: string): DiskUsage;

    declare module.exports: {
        check: typeof checkWithPromise & typeof checkWithCallback,
        checkSync: typeof checkSync
    };
}
