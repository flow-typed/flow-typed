// @flow
/**
 * Flowtype definitions for emscripten
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface Emscripten$FileSystemType {}
declare var npm$namespace$Module: {
    print: typeof Module$print,
    printErr: typeof Module$printErr,
    ccall: typeof Module$ccall,
    cwrap: typeof Module$cwrap,
    setValue: typeof Module$setValue,
    getValue: typeof Module$getValue,
    allocate: typeof Module$allocate,
    Pointer_stringify: typeof Module$Pointer_stringify,
    UTF16ToString: typeof Module$UTF16ToString,
    stringToUTF16: typeof Module$stringToUTF16,
    UTF32ToString: typeof Module$UTF32ToString,
    stringToUTF32: typeof Module$stringToUTF32,
    addOnPreRun: typeof Module$addOnPreRun,
    addOnInit: typeof Module$addOnInit,
    addOnPreMain: typeof Module$addOnPreMain,
    addOnExit: typeof Module$addOnExit,
    addOnPostRun: typeof Module$addOnPostRun,
    intArrayFromString: typeof Module$intArrayFromString,
    intArrayToString: typeof Module$intArrayToString,
    writeStringToMemory: typeof Module$writeStringToMemory,
    writeArrayToMemory: typeof Module$writeArrayToMemory,
    writeAsciiToMemory: typeof Module$writeAsciiToMemory,
    addRunDependency: typeof Module$addRunDependency,
    removeRunDependency: typeof Module$removeRunDependency,
    _malloc: typeof Module$_malloc,
    _free: typeof Module$_free,
}
declare function Module$print(str: string): void

declare function Module$printErr(str: string): void

declare var arguments: string[];

declare var preInit: {
    (): void
}[];

declare var preRun: {
    (): void
}[];

declare var postRun: {
    (): void
}[];

declare var noExitRuntime: boolean;

declare var Runtime: any;

declare function Module$ccall(ident: string, returnType: string, argTypes: string[], args: any[]): any

declare function Module$cwrap(ident: string, returnType: string, argTypes: string[]): any

declare function Module$setValue(ptr: number, value: any, type: string, noSafe?: boolean): void

declare function Module$getValue(ptr: number, type: string, noSafe?: boolean): number

declare var ALLOC_NORMAL: number;

declare var ALLOC_STACK: number;

declare var ALLOC_STATIC: number;

declare var ALLOC_DYNAMIC: number;

declare var ALLOC_NONE: number;

declare function Module$allocate(slab: any, types: string, allocator: number, ptr: number): number

declare function Module$Pointer_stringify(ptr: number, length?: number): string

declare function Module$UTF16ToString(ptr: number): string

declare function Module$stringToUTF16(str: string, outPtr: number): void

declare function Module$UTF32ToString(ptr: number): string

declare function Module$stringToUTF32(str: string, outPtr: number): void

declare var HEAP: Int32Array;

declare var IHEAP: Int32Array;

declare var FHEAP: Float64Array;

declare var HEAP8: Int8Array;

declare var HEAP16: Int16Array;

declare var HEAP32: Int32Array;

declare var HEAPU8: Uint8Array;

declare var HEAPU16: Uint16Array;

declare var HEAPU32: Uint32Array;

declare var HEAPF32: Float32Array;

declare var HEAPF64: Float64Array;

declare var TOTAL_STACK: number;

declare var TOTAL_MEMORY: number;

declare var FAST_MEMORY: number;

declare function Module$addOnPreRun(cb: () => any): void

declare function Module$addOnInit(cb: () => any): void

declare function Module$addOnPreMain(cb: () => any): void

declare function Module$addOnExit(cb: () => any): void

declare function Module$addOnPostRun(cb: () => any): void

declare function Module$intArrayFromString(stringy: string, dontAddNull?: boolean, length?: number): number[]

declare function Module$intArrayToString(array: number[]): string

declare function Module$writeStringToMemory(str: string, buffer: number, dontAddNull: boolean): void

declare function Module$writeArrayToMemory(array: number[], buffer: number): void

declare function Module$writeAsciiToMemory(str: string, buffer: number, dontAddNull: boolean): void

declare function Module$addRunDependency(id: any): void

declare function Module$removeRunDependency(id: any): void

declare var preloadedImages: any;

declare var preloadedAudios: any;

declare function Module$_malloc(size: number): number

declare function Module$_free(ptr: number): void
declare var npm$namespace$FS: {
    lookupPath: typeof FS$lookupPath,
    getPath: typeof FS$getPath,
    isFile: typeof FS$isFile,
    isDir: typeof FS$isDir,
    isLink: typeof FS$isLink,
    isChrdev: typeof FS$isChrdev,
    isBlkdev: typeof FS$isBlkdev,
    isFIFO: typeof FS$isFIFO,
    isSocket: typeof FS$isSocket,
    major: typeof FS$major,
    minor: typeof FS$minor,
    makedev: typeof FS$makedev,
    registerDevice: typeof FS$registerDevice,
    syncfs: typeof FS$syncfs,
    mount: typeof FS$mount,
    unmount: typeof FS$unmount,
    mkdir: typeof FS$mkdir,
    mkdev: typeof FS$mkdev,
    symlink: typeof FS$symlink,
    rename: typeof FS$rename,
    rmdir: typeof FS$rmdir,
    readdir: typeof FS$readdir,
    unlink: typeof FS$unlink,
    readlink: typeof FS$readlink,
    stat: typeof FS$stat,
    lstat: typeof FS$lstat,
    chmod: typeof FS$chmod,
    lchmod: typeof FS$lchmod,
    fchmod: typeof FS$fchmod,
    chown: typeof FS$chown,
    lchown: typeof FS$lchown,
    fchown: typeof FS$fchown,
    truncate: typeof FS$truncate,
    ftruncate: typeof FS$ftruncate,
    utime: typeof FS$utime,
    open: typeof FS$open,
    close: typeof FS$close,
    llseek: typeof FS$llseek,
    read: typeof FS$read,
    write: typeof FS$write,
    allocate: typeof FS$allocate,
    mmap: typeof FS$mmap,
    ioctl: typeof FS$ioctl,
    readFile: typeof FS$readFile,
    writeFile: typeof FS$writeFile,
    cwd: typeof FS$cwd,
    chdir: typeof FS$chdir,
    init: typeof FS$init,
    createLazyFile: typeof FS$createLazyFile,
    createPreloadedFile: typeof FS$createPreloadedFile,
}
declare interface FS$Lookup {
    path: string,
        node: FS$FSNode
}

declare interface FS$FSStream {}

declare interface FS$FSNode {}

declare interface FS$ErrnoError {}

declare var ignorePermissions: boolean;

declare var trackingDelegate: any;

declare var tracking: any;

declare var genericErrors: any;

declare function FS$lookupPath(path: string, opts: any): FS$Lookup

declare function FS$getPath(node: FS$FSNode): string

declare function FS$isFile(mode: number): boolean

declare function FS$isDir(mode: number): boolean

declare function FS$isLink(mode: number): boolean

declare function FS$isChrdev(mode: number): boolean

declare function FS$isBlkdev(mode: number): boolean

declare function FS$isFIFO(mode: number): boolean

declare function FS$isSocket(mode: number): boolean

declare function FS$major(dev: number): number

declare function FS$minor(dev: number): number

declare function FS$makedev(ma: number, mi: number): number

declare function FS$registerDevice(dev: number, ops: any): void

declare function FS$syncfs(populate: boolean, callback: (e: any) => any): void

declare function FS$mount(type: Emscripten$FileSystemType, opts: any, mountpoint: string): any

declare function FS$unmount(mountpoint: string): void

declare function FS$mkdir(path: string, mode?: number): any

declare function FS$mkdev(path: string, mode?: number, dev?: number): any

declare function FS$symlink(oldpath: string, newpath: string): any

declare function FS$rename(old_path: string, new_path: string): void

declare function FS$rmdir(path: string): void

declare function FS$readdir(path: string): any

declare function FS$unlink(path: string): void

declare function FS$readlink(path: string): string

declare function FS$stat(path: string, dontFollow?: boolean): any

declare function FS$lstat(path: string): any

declare function FS$chmod(path: string, mode: number, dontFollow?: boolean): void

declare function FS$lchmod(path: string, mode: number): void

declare function FS$fchmod(fd: number, mode: number): void

declare function FS$chown(path: string, uid: number, gid: number, dontFollow?: boolean): void

declare function FS$lchown(path: string, uid: number, gid: number): void

declare function FS$fchown(fd: number, uid: number, gid: number): void

declare function FS$truncate(path: string, len: number): void

declare function FS$ftruncate(fd: number, len: number): void

declare function FS$utime(path: string, atime: number, mtime: number): void

declare function FS$open(
    path: string,
    flags: string,
    mode?: number,
    fd_start?: number,
    fd_end?: number): FS$FSStream

declare function FS$close(stream: FS$FSStream): void

declare function FS$llseek(stream: FS$FSStream, offset: number, whence: number): any

declare function FS$read(
    stream: FS$FSStream,
    buffer: ArrayBufferView,
    offset: number,
    length: number,
    position?: number): number

declare function FS$write(
    stream: FS$FSStream,
    buffer: ArrayBufferView,
    offset: number,
    length: number,
    position?: number,
    canOwn?: boolean): number

declare function FS$allocate(slab: any, types: string, allocator: number, ptr: number): number

declare function FS$mmap(
    stream: FS$FSStream,
    buffer: ArrayBufferView,
    offset: number,
    length: number,
    position: number,
    prot: number,
    flags: number): any

declare function FS$ioctl(stream: FS$FSStream, cmd: any, arg: any): any

declare function FS$readFile(path: string, opts?: {
    encoding: string,
    flags: string
}): any

declare function FS$writeFile(
    path: string,
    data: ArrayBufferView,
    opts?: {
        encoding: string,
        flags: string
    }): void

declare function FS$cwd(): string

declare function FS$chdir(path: string): void

declare function FS$init(
    input: () => number,
    output: (c: number) => any,
    error: (c: number) => any): void

declare function FS$createLazyFile(
    parent: string,
    name: string,
    url: string,
    canRead: boolean,
    canWrite: boolean): FS$FSNode

declare function FS$createPreloadedFile(
    parent: string,
    name: string,
    url: string,
    canRead: boolean,
    canWrite: boolean,
    onload?: () => void,
    onerror?: () => void,
    dontCreateFile?: boolean,
    canOwn?: boolean): voiddeclare var MEMFS: Emscripten$FileSystemType;
declare var NODEFS: Emscripten$FileSystemType;
declare var IDBFS: Emscripten$FileSystemType;
declare interface Math {
    imul(a: number, b: number): number
}