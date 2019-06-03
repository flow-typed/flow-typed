declare module "jest-mock-axios" {
  declare type HttpResponse = {
    data?: {},
    status?: number,
    statusText?: string,
    headers?: {},
    config?: {}
  };
  declare type SyncPromise = {};
  declare type AxiosMockQueueItem = {
    promise: SyncPromise,
    url: string,
    data?: {},
    config?: {}
  };
  declare type AnyFn = (...args: any[]) => any;
  declare type SpyFn = AnyFn & { mockClear: AnyFn };
  declare type AxiosFn = (...args: any[]) => SpyFn;
  declare type AxiosAPI = {
    get?: SpyFn,
    post?: SpyFn,
    put?: SpyFn,
    delete?: SpyFn,
    create?: SpyFn,
    request?: SpyFn,
    head?: SpyFn,
    options?: SpyFn,
    patch?: SpyFn
  };
  declare type AxiosMockAPI = {
    mockResponse?: (
      response?: HttpResponse,
      queueItem?: SyncPromise | AxiosMockQueueItem
    ) => void,
    mockError?: (
      error?: {},
      queueItem?: SyncPromise | AxiosMockQueueItem
    ) => void,
    lastPromiseGet?: () => SyncPromise,
    popPromise?: (promise?: SyncPromise) => SyncPromise,
    lastReqGet?: () => AxiosMockQueueItem,
    popPromise?: (promise?: SyncPromise) => SyncPromise,
    reset?: () => void
  };
  declare type AxiosMockType = AxiosFn & AxiosAPI & AxiosMockAPI;

  declare export default AxiosMockType;
}
