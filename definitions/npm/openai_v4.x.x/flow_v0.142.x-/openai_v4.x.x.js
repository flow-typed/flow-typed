declare module "openai" {
  declare class Errors$OpenAIError extends Error {}
  declare class Errors$APIError extends Errors$OpenAIError {
    +status: number | void;
    +headers: Headers | void;
    +error: { [key: string]: any, ... } | void;
    +code: string | null | void;
    +param: string | null | void;
    +type: string | void;
    constructor(
      status: number | void,
      error: { [key: string]: any, ... } | void,
      message: string | void,
      headers: Headers | void
    ): this;
    static generate(
      status: number | void,
      errorResponse: { [key: string]: any, ... } | void,
      message: string | void,
      headers: Headers | void
    ): Errors$APIError;
  }
  declare class Errors$APIUserAbortError extends Errors$APIError {
    +status: void;
    constructor(x?: {
      message?: string,
      ...
    }): this;
  }
  declare class Errors$APIConnectionError extends Errors$APIError {
    +status: void;
    constructor(x: {
      message?: string,
      cause?: FineTuningJob$Error | void,
      ...
    }): this;
  }
  declare class Errors$APIConnectionTimeoutError
    extends Errors$APIConnectionError
  {
    constructor(x?: {
      message?: string,
      ...
    }): this;
  }
  declare class Errors$BadRequestError extends Errors$APIError {
    +status: 400;
  }
  declare class Errors$AuthenticationError extends Errors$APIError {
    +status: 401;
  }
  declare class Errors$PermissionDeniedError extends Errors$APIError {
    +status: 403;
  }
  declare class Errors$NotFoundError extends Errors$APIError {
    +status: 404;
  }
  declare class Errors$ConflictError extends Errors$APIError {
    +status: 409;
  }
  declare class Errors$UnprocessableEntityError extends Errors$APIError {
    +status: 422;
  }
  declare class Errors$RateLimitError extends Errors$APIError {
    +status: 429;
  }
  declare class Errors$InternalServerError extends Errors$APIError {}
  declare type Agent = any;
  declare type RequestInfo = any;
  declare type RequestInit = any;
  declare type Response = any;
  declare type HeadersInit = any;
  declare type FilePropertyBag = any;
  declare type FileFromPathOptions = any;
  declare type File = any;
  declare type Readable = any;
  declare type FsReadStream = any;
  declare function fileFromPath(
    path: string,
    options?: FileFromPathOptions
  ): Promise<File>;
  declare function fileFromPath(
    path: string,
    filename?: string,
    options?: FileFromPathOptions
  ): Promise<File>;
  declare type BlobLikePart =
    | string
    | ArrayBuffer
    | $ArrayBufferView
    | BlobLike
    | Uint8Array
    | DataView;
  declare type Uploadable = FileLike | ResponseLike | FsReadStream;
  /**
   * Intended to match web.Blob, node.Blob, node-fetch.Blob, etc.
   */
  declare interface BlobLike {
    /**
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/size)
     */
    +size: number;

    /**
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/type)
     */
    +type: string;

    /**
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/text)
     */
    text(): Promise<string>;

    /**
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/slice)
     */
    slice(start?: number, end?: number): BlobLike;
  }
  /**
   * Intended to match web.File, node.File, node-fetch.File, etc.
   */
  declare type FileLike = {
    /**
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/File/lastModified)
     */
    +lastModified: number,

    /**
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/File/name)
     */
    +name: string,
    ...
  } & BlobLike;

  /**
   * Intended to match web.Response, node.Response, node-fetch.Response, etc.
   */
  declare interface ResponseLike {
    url: string;
    blob(): Promise<BlobLike>;
  }
  declare type ToFileInput =
    | Uploadable
    | Exclude<BlobLikePart, string>
    | AsyncIterable<BlobLikePart>;
  declare function toFile(
    value: ToFileInput | Promise<ToFileInput>,
    name?: string | null | void,
    options?: FilePropertyBag | void
  ): Promise<FileLike>;
  declare type Fetch = (url: RequestInfo, init?: RequestInit) => Promise<Response>;
  declare type PromiseOrValue<T> = T | Promise<T>;
  declare type APIResponseProps = {
    response: Response,
    options: FinalRequestOptions<>,
    controller: AbortController,
    ...
  };
  declare class APIPromise<T> extends Promise<T> {
    constructor(
      responsePromise: Promise<APIResponseProps>,
      parseResponse?: (props: APIResponseProps) => PromiseOrValue<T>
    ): this;

    asResponse(): Promise<Response>;

    withResponse(): Promise<{
      data: T,
      response: Response,
      ...
    }>;
  }
  declare class APIClient {
    baseURL: string;
    maxRetries: number;
    timeout: number;
    httpAgent: Agent | void;
    idempotencyHeader?: string;
    constructor(x: {
      baseURL: string,
      maxRetries?: number | void,
      timeout: number | void,
      httpAgent: Agent | void,
      fetch: Fetch | void,
      ...
    }): this;
    authHeaders(opts: FinalRequestOptions<>): Headers;

    /**
     * Override this to add your own default headers, for example:
     *
     *  {
     *    ...super.defaultHeaders(),
     *    Authorization: 'Bearer 123',
     *  }
     */
    defaultHeaders(opts: FinalRequestOptions<>): Headers;
    defaultQuery(): DefaultQuery | void;

    /**
     * Override this to add your own headers validation:
     */
    validateHeaders(headers: Headers, customHeaders: Headers): void;
    defaultIdempotencyKey(): string;
    get<Req: { ... }, Rsp>(
      path: string,
      opts?: PromiseOrValue<RequestOptions<Req>>
    ): APIPromise<Rsp>;
    post<Req: { ... }, Rsp>(
      path: string,
      opts?: PromiseOrValue<RequestOptions<Req>>
    ): APIPromise<Rsp>;
    patch<Req: { ... }, Rsp>(
      path: string,
      opts?: PromiseOrValue<RequestOptions<Req>>
    ): APIPromise<Rsp>;
    put<Req: { ... }, Rsp>(
      path: string,
      opts?: PromiseOrValue<RequestOptions<Req>>
    ): APIPromise<Rsp>;
    delete<Req: { ... }, Rsp>(
      path: string,
      opts?: PromiseOrValue<RequestOptions<Req>>
    ): APIPromise<Rsp>;
    getAPIList<Item, PageClass: AbstractPage<Item>>(
      path: string,
      Page: (...args: any[]) => PageClass,
      opts?: RequestOptions<any>
    ): PagePromise<PageClass, Item>;
    buildRequest<Req: { ... }>(options: FinalRequestOptions<Req>): {
      req: RequestInit,
      url: string,
      timeout: number,
      ...
    };

    /**
     * Used as a callback for mutating the given `RequestInit` object.
     *
     * This is useful for cases where you want to add certain headers based off of
     * the request properties, e.g. `method` or `url`.
     */
    prepareRequest(
      request: RequestInit,
      x: {
        url: string,
        options: FinalRequestOptions<>,
        ...
      }
    ): Promise<void>;
    parseHeaders(headers: HeadersInit | null | void): {
      [key: string]: string,
      ...
    };
    makeStatusError(
      status: number | void,
      error: { [key: string]: any, ... } | void,
      message: string | void,
      headers: Headers | void
    ): Errors$APIError;
    request<Req: { ... }, Rsp>(
      options: PromiseOrValue<FinalRequestOptions<Req>>,
      remainingRetries?: number | null
    ): APIPromise<Rsp>;
    requestAPIList<Item, PageClass: AbstractPage<Item>>(
      Page: (client: APIClient, response: Response, body: mixed, options: FinalRequestOptions<>) => PageClass,
      options: FinalRequestOptions<>
    ): PagePromise<PageClass, Item>;
    buildURL<Req: { [key: string]: mixed, ... }>(
      path: string,
      query: Req | null | void
    ): string;
    stringifyQuery(query: { [key: string]: mixed, ... }): string;
    fetchWithTimeout(
      url: RequestInfo,
      init: RequestInit | void,
      ms: number,
      controller: AbortController
    ): Promise<Response>;
    getRequestClient(): RequestClient;
  }
  declare type PageInfo =
    | {
    url: URL,
    ...
  }
    | {
    params: { [key: string]: mixed, ... } | null,
    ...
  };
  declare class AbstractPage<Item> extends $AsyncIterable<Item, void, void> {
    options: FinalRequestOptions<>;
    response: Response;
    body: mixed;
    constructor(
      client: APIClient,
      response: Response,
      body: mixed,
      options: FinalRequestOptions<>
    ): this;

    /**
     * @deprecated Use nextPageInfo instead
     */
    nextPageParams(): $Rest<CursorPageParams, { ... }> | null;
    nextPageInfo(): PageInfo | null;
    getPaginatedItems(): Item[];
    hasNextPage(): boolean;
    getNextPage(): Promise<this>;
    iterPages(): AsyncGenerator<AbstractPage<Item>, void, mixed>;
    @@asyncIterator: () => AsyncGenerator<Item, void, mixed>;
  }
  declare class PagePromise<
    PageClass,
    Item = $ElementType<
      $Call<
        <R>((...args: any[]) => R) => R,
        $PropertyType<PageClass, "getPaginatedItems">
      >,
      number
    >
  >
    extends APIPromise<PageClass> implements $AsyncIterable<Item, void, void>
  {
    constructor(
      client: APIClient,
      request: Promise<APIResponseProps>,
      Page: (client: APIClient, response: Response, body: mixed, options: FinalRequestOptions<>) => PageClass
    ): this;

    /**
     * Allow auto-paginating iteration on an unawaited list call, eg:
     *
     *    for await (const item of client.items.list()) {
     *      console.log(item)
     *    }
     */
    @@asyncIterator: () => AsyncGenerator<Item, void, mixed>;
  }
  declare type HTTPMethod = "get" | "post" | "put" | "patch" | "delete";
  declare type RequestClient = {
    fetch: Fetch,
    ...
  };
  declare type Headers = { [key: string]: string | null | void, ... };
  declare type DefaultQuery = { [key: string]: string | void, ... };
  declare type RequestOptions<
    Req: { ... } = { [key: string]: mixed, ... } | Readable
  > = {
    method?: HTTPMethod,
    path?: string,
    query?: Req | void,
    body?: Req | void,
    headers?: Headers | void,
    maxRetries?: number,
    stream?: boolean | void,
    timeout?: number,
    httpAgent?: Agent,
    signal?: AbortSignal | void | null,
    idempotencyKey?: string,
    ...
  };
  declare type FinalRequestOptions<
    Req: { ... } = { [key: string]: mixed, ... } | Readable
  > = {
    ...RequestOptions<Req>,
    ...{|
      method: HTTPMethod,
      path: string
    |},
    ...
  };
  declare interface PageResponse<Item> {
    data: Array<Item>;
    object: string;
  }
  declare class Page<Item>
    extends AbstractPage<Item>
    implements PageResponse<Item>
  {
    object: string;
    data: Array<Item>;
    constructor(
      client: APIClient,
      response: Response,
      body: PageResponse<Item>,
      options: FinalRequestOptions<>
    ): this;
    getPaginatedItems(): Item[];

    /**
     * This page represents a response that isn't actually paginated at the API level
     * so there will never be any next page params.
     */
    nextPageParams(): null;
    nextPageInfo(): null;
  }
  declare interface CursorPageResponse<Item> {
    data: Array<Item>;
  }
  declare interface CursorPageParams {
    /**
     * Identifier for the last job from the previous pagination request.
     */
    after?: string;

    /**
     * Number of fine-tuning jobs to retrieve.
     */
    limit?: number;
  }
  declare class CursorPage<Item>
    extends AbstractPage<Item>
    implements CursorPageResponse<Item>
  {
    data: Array<Item>;
    constructor(
      client: APIClient,
      response: Response,
      body: CursorPageResponse<Item>,
      options: FinalRequestOptions<>
    ): this;
    getPaginatedItems(): Item[];
    nextPageParams(): $Rest<CursorPageParams, { ... }> | null;
    nextPageInfo(): PageInfo | null;
  }
  declare class APIResource {
    client: OpenAI;
    constructor(client: OpenAI): this;
    get<Req: { ... }, Rsp>(
      path: string,
      opts?: PromiseOrValue<RequestOptions<Req>>
    ): APIPromise<Rsp>;
    post<Req: { ... }, Rsp>(
      path: string,
      opts?: PromiseOrValue<RequestOptions<Req>>
    ): APIPromise<Rsp>;
    patch<Req: { ... }, Rsp>(
      path: string,
      opts?: PromiseOrValue<RequestOptions<Req>>
    ): APIPromise<Rsp>;
    put<Req: { ... }, Rsp>(
      path: string,
      opts?: PromiseOrValue<RequestOptions<Req>>
    ): APIPromise<Rsp>;
    delete<Req: { ... }, Rsp>(
      path: string,
      opts?: PromiseOrValue<RequestOptions<Req>>
    ): APIPromise<Rsp>;
    getAPIList<Item, PageClass: AbstractPage<Item>>(
      path: string,
      Page: (...args: any[]) => PageClass,
      opts?: RequestOptions<any>
    ): PagePromise<PageClass, Item>;
  }
  declare class Translations extends APIResource {
    /**
     * Translates audio into English.
     */
    create(
      body: TranslationCreateParams,
      options?: RequestOptions<>
    ): APIPromise<Translation>;
  }
  declare interface Translation {
    text: string;
  }
  declare interface TranslationCreateParams {
    /**
     * The audio file object (not file name) translate, in one of these formats: flac,
     * mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm.
     */
    file: Uploadable;

    /**
     * ID of the model to use. Only `whisper-1` is currently available.
     */
    model: "whisper-1";

    /**
     * An optional text to guide the model's style or continue a previous audio
     * segment. The
     * [prompt](https://platform.openai.com/docs/guides/speech-to-text/prompting)
     * should be in English.
     */
    prompt?: string;

    /**
     * The format of the transcript output, in one of these options: json, text, srt,
     * verbose_json, or vtt.
     */
    response_format?: string;

    /**
     * The sampling temperature, between 0 and 1. Higher values like 0.8 will make the
     * output more random, while lower values like 0.2 will make it more focused and
     * deterministic. If set to 0, the model will use
     * [log probability](https://en.wikipedia.org/wiki/Log_probability) to
     * automatically increase the temperature until certain thresholds are hit.
     */
    temperature?: number;
  }
  declare class Transcriptions extends APIResource {
    /**
     * Transcribes audio into the input language.
     */
    create(
      body: TranscriptionCreateParams,
      options?: RequestOptions<>
    ): APIPromise<Transcription>;
  }
  declare interface Transcription {
    text: string;
  }
  declare interface TranscriptionCreateParams {
    /**
     * The audio file object (not file name) to transcribe, in one of these formats:
     * flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm.
     */
    file: Uploadable;

    /**
     * ID of the model to use. Only `whisper-1` is currently available.
     */
    model: "whisper-1";

    /**
     * The language of the input audio. Supplying the input language in
     * [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format will
     * improve accuracy and latency.
     */
    language?: string;

    /**
     * An optional text to guide the model's style or continue a previous audio
     * segment. The
     * [prompt](https://platform.openai.com/docs/guides/speech-to-text/prompting)
     * should match the audio language.
     */
    prompt?: string;

    /**
     * The format of the transcript output, in one of these options: json, text, srt,
     * verbose_json, or vtt.
     */
    response_format?: "json" | "text" | "srt" | "verbose_json" | "vtt";

    /**
     * The sampling temperature, between 0 and 1. Higher values like 0.8 will make the
     * output more random, while lower values like 0.2 will make it more focused and
     * deterministic. If set to 0, the model will use
     * [log probability](https://en.wikipedia.org/wiki/Log_probability) to
     * automatically increase the temperature until certain thresholds are hit.
     */
    temperature?: number;
  }
  declare class Audio extends APIResource {
    transcriptions: Transcriptions;
    translations: Translations;
  }
  declare class Stream<Item> /* extends AsyncIterable<Item> */ {
    controller: AbortController;
    constructor(response: Response, controller: AbortController): this;
    @@asyncIterator: () => AsyncIterator<Item>;
  }
  /**
   * Represents a completion response from the  Note: both the streamed and
   * non-streamed response objects share the same shape (unlike the chat endpoint).
   */
  declare interface Completion {
    /**
     * A unique identifier for the completion.
     */
    id: string;

    /**
     * The list of completion choices the model generated for the input prompt.
     */
    choices: Array<typeof CompletionChoice>;

    /**
     * The Unix timestamp (in seconds) of when the completion was created.
     */
    created: number;

    /**
     * The model used for completion.
     */
    model: string;

    /**
     * The object type, which is always "text_completion"
     */
    object: string;

    /**
     * Usage statistics for the completion request.
     */
    usage?: CompletionUsage;
  }
  declare var CompletionChoice: typeof npm$namespace$CompletionChoice;

  declare var npm$namespace$CompletionChoice: {|
    Logprobs: Class<CompletionChoice$Logprobs>,
  |};
  declare interface CompletionChoice$Logprobs {
    text_offset?: Array<number>;
    token_logprobs?: Array<number>;
    tokens?: Array<string>;
    top_logprobs?: Array<{ [key: string]: number, ... }>;
  }
  /**
   * Usage statistics for the completion request.
   */
  declare interface CompletionUsage {
    /**
     * Number of tokens in the generated completion.
     */
    completion_tokens: number;

    /**
     * Number of tokens in the prompt.
     */
    prompt_tokens: number;

    /**
     * Total number of tokens used in the request (prompt + completion).
     */
    total_tokens: number;
  }
  declare type CompletionCreateParams =
    | CompletionCreateParamsNonStreaming
    | CompletionCreateParamsStreaming;
  declare interface CompletionCreateParamsBase {
    /**
     * ID of the model to use. You can use the
     * [List models](https://platform.openai.com/docs/api-reference/models/list) API to
     * see all of your available models, or see our
     * [Model overview](https://platform.openai.com/docs/models/overview) for
     * descriptions of them.
     */
    model:
      | "babbage-002"
      | "davinci-002"
      | "gpt-3.5-turbo-instruct"
      | "text-davinci-003"
      | "text-davinci-002"
      | "text-davinci-001"
      | "code-davinci-002"
      | "text-curie-001"
      | "text-babbage-001"
      | "text-ada-001";

    /**
     * The prompt(s) to generate completions for, encoded as a string, array of
     * strings, array of tokens, or array of token arrays.
     *
     * Note that <|endoftext|> is the document separator that the model sees during
     * training, so if a prompt is not specified the model will generate as if from the
     * beginning of a new document.
     */
    prompt: string | Array<string> | Array<number> | Array<Array<number>> | null;

    /**
     * Generates `best_of` completions server-side and returns the "best" (the one with
     * the highest log probability per token). Results cannot be streamed.
     *
     * When used with `n`, `best_of` controls the number of candidate completions and
     * `n` specifies how many to return – `best_of` must be greater than `n`.
     *
     * **Note:** Because this parameter generates many completions, it can quickly
     * consume your token quota. Use carefully and ensure that you have reasonable
     * settings for `max_tokens` and `stop`.
     */
    best_of?: number | null;

    /**
     * Echo back the prompt in addition to the completion
     */
    echo?: boolean | null;

    /**
     * Number between -2.0 and 2.0. Positive values penalize new tokens based on their
     * existing frequency in the text so far, decreasing the model's likelihood to
     * repeat the same line verbatim.
     *
     * [See more information about frequency and presence penalties.](https://platform.openai.com/docs/guides/gpt/parameter-details)
     */
    frequency_penalty?: number | null;

    /**
     * Modify the likelihood of specified tokens appearing in the completion.
     *
     * Accepts a json object that maps tokens (specified by their token ID in the GPT
     * tokenizer) to an associated bias value from -100 to 100. You can use this
     * [tokenizer tool](/tokenizer?view=bpe) (which works for both GPT-2 and GPT-3) to
     * convert text to token IDs. Mathematically, the bias is added to the logits
     * generated by the model prior to sampling. The exact effect will vary per model,
     * but values between -1 and 1 should decrease or increase likelihood of selection;
     * values like -100 or 100 should result in a ban or exclusive selection of the
     * relevant token.
     *
     * As an example, you can pass `{"50256": -100}` to prevent the <|endoftext|> token
     * from being generated.
     */
    logit_bias?: { [key: string]: number, ... } | null;

    /**
     * Include the log probabilities on the `logprobs` most likely tokens, as well the
     * chosen tokens. For example, if `logprobs` is 5, the API will return a list of
     * the 5 most likely tokens. The API will always return the `logprob` of the
     * sampled token, so there may be up to `logprobs+1` elements in the response.
     *
     * The maximum value for `logprobs` is 5.
     */
    logprobs?: number | null;

    /**
     * The maximum number of [tokens](/tokenizer) to generate in the completion.
     *
     * The token count of your prompt plus `max_tokens` cannot exceed the model's
     * context length.
     * [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_count_tokens_with_tiktoken.ipynb)
     * for counting tokens.
     */
    max_tokens?: number | null;

    /**
     * How many completions to generate for each prompt.
     *
     * **Note:** Because this parameter generates many completions, it can quickly
     * consume your token quota. Use carefully and ensure that you have reasonable
     * settings for `max_tokens` and `stop`.
     */
    n?: number | null;

    /**
     * Number between -2.0 and 2.0. Positive values penalize new tokens based on
     * whether they appear in the text so far, increasing the model's likelihood to
     * talk about new topics.
     *
     * [See more information about frequency and presence penalties.](https://platform.openai.com/docs/guides/gpt/parameter-details)
     */
    presence_penalty?: number | null;

    /**
     * Up to 4 sequences where the API will stop generating further tokens. The
     * returned text will not contain the stop sequence.
     */
    stop?: string | null | Array<string>;

    /**
     * Whether to stream back partial progress. If set, tokens will be sent as
     * data-only
     * [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format)
     * as they become available, with the stream terminated by a `data: [DONE]`
     * message.
     * [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_stream_completions.ipynb).
     */
    stream?: boolean | null;

    /**
     * The suffix that comes after a completion of inserted text.
     */
    suffix?: string | null;

    /**
     * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will
     * make the output more random, while lower values like 0.2 will make it more
     * focused and deterministic.
     *
     * We generally recommend altering this or `top_p` but not both.
     */
    temperature?: number | null;

    /**
     * An alternative to sampling with temperature, called nucleus sampling, where the
     * model considers the results of the tokens with top_p probability mass. So 0.1
     * means only the tokens comprising the top 10% probability mass are considered.
     *
     * We generally recommend altering this or `temperature` but not both.
     */
    top_p?: number | null;

    /**
     * A unique identifier representing your end-user, which can help OpenAI to monitor
     * and detect abuse.
     * [Learn more](https://platform.openai.com/docs/guides/safety-best-practices/end-user-ids).
     */
    user?: string;
  }
  declare type CompletionCreateParamsNonStreaming = {
    /**
     * Whether to stream back partial progress. If set, tokens will be sent as
     * data-only
     * [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format)
     * as they become available, with the stream terminated by a `data: [DONE]`
     * message.
     * [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_stream_completions.ipynb).
     */
    stream?: false | null,
    ...
  } & CompletionCreateParamsBase;
  declare type CompletionCreateParamsStreaming = {
    /**
     * Whether to stream back partial progress. If set, tokens will be sent as
     * data-only
     * [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format)
     * as they become available, with the stream terminated by a `data: [DONE]`
     * message.
     * [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_stream_completions.ipynb).
     */
    stream: true,
    ...
  } & CompletionCreateParamsBase;
  declare class Completions extends APIResource {
    /**
     * Creates a model response for the given chat conversation.
     */
    create(
      body: ChatCompletionCreateParamsNonStreaming,
      options?: RequestOptions<>
    ): APIPromise<ChatCompletion>;
    create(
      body: ChatCompletionCreateParamsStreaming,
      options?: RequestOptions<>
    ): APIPromise<Stream<ChatCompletionChunk>>;
    create(
      body: ChatCompletionCreateParamsBase,
      options?: RequestOptions<>
    ): APIPromise<Stream<ChatCompletionChunk> | ChatCompletion>;
  }
  /**
   * Represents a chat completion response returned by model, based on the provided
   * input.
   */
  declare interface ChatCompletion {
    /**
     * A unique identifier for the chat completion.
     */
    id: string;

    /**
     * A list of chat completion choices. Can be more than one if `n` is greater
     * than 1.
     */
    choices: Array<ChatCompletion$Choice>;

    /**
     * The Unix timestamp (in seconds) of when the chat completion was created.
     */
    created: number;

    /**
     * The model used for the chat completion.
     */
    model: string;

    /**
     * The object type, which is always `chat.completion`.
     */
    object: string;

    /**
     * Usage statistics for the completion request.
     */
    usage?: CompletionUsage;
  }

  declare interface ChatCompletion$Choice {
    /**
     * The reason the model stopped generating tokens. This will be `stop` if the model
     * hit a natural stop point or a provided stop sequence, `length` if the maximum
     * number of tokens specified in the request was reached, `content_filter` if
     * content was omitted due to a flag from our content filters, or `function_call`
     * if the model called a function.
     */
    finish_reason: "stop" | "length" | "function_call" | "content_filter";

    /**
     * The index of the choice in the list of choices.
     */
    index: number;

    /**
     * A chat completion message generated by the model.
     */
    message: ChatCompletionMessage;
  }
  /**
   * Represents a streamed chunk of a chat completion response returned by model,
   * based on the provided input.
   */
  declare interface ChatCompletionChunk {
    /**
     * A unique identifier for the chat completion. Each chunk has the same ID.
     */
    id: string;

    /**
     * A list of chat completion choices. Can be more than one if `n` is greater
     * than 1.
     */
    choices: Array<ChatCompletionChunk$Choice>;

    /**
     * The Unix timestamp (in seconds) of when the chat completion was created. Each
     * chunk has the same timestamp.
     */
    created: number;

    /**
     * The model to generate the completion.
     */
    model: string;

    /**
     * The object type, which is always `chat.completion.chunk`.
     */
    object: string;
  }

  /**
   * A chat completion delta generated by streamed model responses.
   */
  declare interface ChatCompletionChunk$Choice$Delta {
    /**
     * The contents of the chunk message.
     */
    content?: string | null;

    /**
     * The name and arguments of a function that should be called, as generated by the
     * model.
     */
    function_call?: ChatCompletionChunk$Choice$Delta$FunctionCall;

    /**
     * The role of the author of this message.
     */
    role?: ChatCompletionRole;
  }
  declare interface ChatCompletionChunk$Choice {
    /**
     * A chat completion delta generated by streamed model responses.
     */
    delta: ChatCompletionChunk$Choice$Delta;

    /**
     * The reason the model stopped generating tokens. This will be `stop` if the model
     * hit a natural stop point or a provided stop sequence, `length` if the maximum
     * number of tokens specified in the request was reached, `content_filter` if
     * content was omitted due to a flag from our content filters, or `function_call`
     * if the model called a function.
     */
    finish_reason: 'stop' | 'length' | 'function_call' | 'content_filter' | null;

    /**
     * The index of the choice in the list of choices.
     */
    index: number;
  }
  /**
   * The name and arguments of a function that should be called, as generated by the
   * model.
   */
  declare interface ChatCompletionChunk$Choice$Delta$FunctionCall {
    /**
     * The arguments to call the function with, as generated by the model in JSON
     * format. Note that the model does not always generate valid JSON, and may
     * hallucinate parameters not defined by your function schema. Validate the
     * arguments in your code before calling your function.
     */
    arguments?: string;

    /**
     * The name of the function to call.
     */
    name?: string;
  }
  /**
   * A chat completion message generated by the model.
   */
  declare interface ChatCompletionMessage {
    /**
     * The contents of the message.
     */
    content: string | null;

    /**
     * The role of the author of this message.
     */
    role: ChatCompletionRole;

    /**
     * The name and arguments of a function that should be called, as generated by the
     * model.
     */
    function_call?: ChatCompletionMessage$FunctionCall;
  }
  /**
   * The name and arguments of a function that should be called, as generated by the
   * model.
   */
  declare interface ChatCompletionMessage$FunctionCall {
    /**
     * The arguments to call the function with, as generated by the model in JSON
     * format. Note that the model does not always generate valid JSON, and may
     * hallucinate parameters not defined by your function schema. Validate the
     * arguments in your code before calling your function.
     */
    arguments: string;

    /**
     * The name of the function to call.
     */
    name: string;
  }
  declare interface ChatCompletionMessageParam {
    /**
     * The contents of the message. `content` is required for all messages, and may be
     * null for assistant messages with function calls.
     */
    content: string | null;

    /**
     * The role of the messages author. One of `system`, `user`, `assistant`, or
     * `function`.
     */
    role: 'system' | 'user' | 'assistant' | 'function';

    /**
     * The name and arguments of a function that should be called, as generated by the
     * model.
     */
    function_call?: ChatCompletionMessageParam$FunctionCall;

    /**
     * The name of the author of this message. `name` is required if role is
     * `function`, and it should be the name of the function whose response is in the
     * `content`. May contain a-z, A-Z, 0-9, and underscores, with a maximum length of
     * 64 characters.
     */
    name?: string;
  }

  /**
   * The name and arguments of a function that should be called, as generated by the
   * model.
   */
  declare interface ChatCompletionMessageParam$FunctionCall {
    /**
     * The arguments to call the function with, as generated by the model in JSON
     * format. Note that the model does not always generate valid JSON, and may
     * hallucinate parameters not defined by your function schema. Validate the
     * arguments in your code before calling your function.
     */
    arguments: string;

    /**
     * The name of the function to call.
     */
    name: string;
  }
  /**
   * The role of the author of this message.
   */
  declare type ChatCompletionRole = "system" | "user" | "assistant" | "function";
  /**
   * @deprecated ChatCompletionMessageParam should be used instead
   */
  declare type CreateChatCompletionRequestMessage = ChatCompletionMessageParam;
  declare interface ChatCompletionCreateParamsBase {
    /**
     * A list of messages comprising the conversation so far.
     * [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_format_inputs_to_ChatGPT_models.ipynb).
     */
    messages: Array<ChatCompletionMessageParam>;

    /**
     * ID of the model to use. See the
     * [model endpoint compatibility](https://platform.openai.com/docs/models/model-endpoint-compatibility)
     * table for details on which models work with the Chat
     */
    model:
      | "gpt-4"
      | "gpt-4-0314"
      | "gpt-4-0613"
      | "gpt-4-32k"
      | "gpt-4-32k-0314"
      | "gpt-4-32k-0613"
      | "gpt-3.5-turbo"
      | "gpt-3.5-turbo-16k"
      | "gpt-3.5-turbo-0301"
      | "gpt-3.5-turbo-0613"
      | "gpt-3.5-turbo-16k-0613";

    /**
     * Number between -2.0 and 2.0. Positive values penalize new tokens based on their
     * existing frequency in the text so far, decreasing the model's likelihood to
     * repeat the same line verbatim.
     *
     * [See more information about frequency and presence penalties.](https://platform.openai.com/docs/guides/gpt/parameter-details)
     */
    frequency_penalty?: number | null;

    /**
     * Controls how the model responds to function calls. `none` means the model does
     * not call a function, and responds to the end-user. `auto` means the model can
     * pick between an end-user or calling a function. Specifying a particular function
     * via `{"name": "my_function"}` forces the model to call that function. `none` is
     * the default when no functions are present. `auto` is the default if functions
     * are present.
     */
    function_call?:
      | "none"
      | "auto"
      | ChatCompletionCreateParams$FunctionCallOption;

    /**
     * A list of functions the model may generate JSON inputs for.
     */
    functions?: $ReadOnlyArray<ChatCompletionCreateParams$Function>;

    /**
     * Modify the likelihood of specified tokens appearing in the completion.
     *
     * Accepts a json object that maps tokens (specified by their token ID in the
     * tokenizer) to an associated bias value from -100 to 100. Mathematically, the
     * bias is added to the logits generated by the model prior to sampling. The exact
     * effect will vary per model, but values between -1 and 1 should decrease or
     * increase likelihood of selection; values like -100 or 100 should result in a ban
     * or exclusive selection of the relevant token.
     */
    logit_bias?: { [key: string]: number, ... } | null;

    /**
     * The maximum number of [tokens](/tokenizer) to generate in the chat completion.
     *
     * The total length of input tokens and generated tokens is limited by the model's
     * context length.
     * [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_count_tokens_with_tiktoken.ipynb)
     * for counting tokens.
     */
    max_tokens?: number | null;

    /**
     * How many chat completion choices to generate for each input message.
     */
    n?: number | null;

    /**
     * Number between -2.0 and 2.0. Positive values penalize new tokens based on
     * whether they appear in the text so far, increasing the model's likelihood to
     * talk about new topics.
     *
     * [See more information about frequency and presence penalties.](https://platform.openai.com/docs/guides/gpt/parameter-details)
     */
    presence_penalty?: number | null;

    /**
     * Up to 4 sequences where the API will stop generating further tokens.
     */
    stop?: string | null | Array<string>;

    /**
     * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will
     * make the output more random, while lower values like 0.2 will make it more
     * focused and deterministic.
     *
     * We generally recommend altering this or `top_p` but not both.
     */
    temperature?: number | null;

    /**
     * An alternative to sampling with temperature, called nucleus sampling, where the
     * model considers the results of the tokens with top_p probability mass. So 0.1
     * means only the tokens comprising the top 10% probability mass are considered.
     *
     * We generally recommend altering this or `temperature` but not both.
     */
    top_p?: number | null;

    /**
     * A unique identifier representing your end-user, which can help OpenAI to monitor
     * and detect abuse.
     * [Learn more](https://platform.openai.com/docs/guides/safety-best-practices/end-user-ids).
     */
    user?: string;
  }
  declare var ChatCompletionCreateParams: typeof npm$namespace$ChatCompletionCreateParams;

  declare var npm$namespace$ChatCompletionCreateParams: {|
    FunctionCallOption: Class<ChatCompletionCreateParams$FunctionCallOption>,
    Function: Class<ChatCompletionCreateParams$Function>,
  |};
  declare interface ChatCompletionCreateParams$FunctionCallOption {
    /**
     * The name of the function to call.
     */
    name: string;
  }

  declare interface ChatCompletionCreateParams$Function {
    /**
     * The name of the function to be called. Must be a-z, A-Z, 0-9, or contain
     * underscores and dashes, with a maximum length of 64.
     */
    name: string;

    /**
     * The parameters the functions accepts, described as a JSON Schema object. See the
     * [guide](https://platform.openai.com/docs/guides/gpt/function-calling) for
     * examples, and the
     * [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for
     * documentation about the format.
     *
     * To describe a function that accepts no parameters, provide the value
     * `{"type": "object", "properties": {}}`.
     */
    parameters: { [key: string]: any, ... };

    /**
     * A description of what the function does, used by the model to choose when and
     * how to call the function.
     */
    description?: string;
  }

  declare type ChatCompletionCreateParams$ChatCompletionCreateParamsNonStreaming =
    ChatCompletionCreateParamsNonStreaming;

  declare type ChatCompletionCreateParams$ChatCompletionCreateParamsStreaming =
    ChatCompletionCreateParamsStreaming;
  declare type ChatCompletionCreateParamsNonStreaming = {
    /**
     * If set, partial message deltas will be sent, like in ChatGPT. Tokens will be
     * sent as data-only
     * [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format)
     * as they become available, with the stream terminated by a `data: [DONE]`
     * message.
     * [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_stream_completions.ipynb).
     */
    stream?: false | null,
    ...
  } & ChatCompletionCreateParamsBase;
  declare type ChatCompletionCreateParamsStreaming = {
    /**
     * If set, partial message deltas will be sent, like in ChatGPT. Tokens will be
     * sent as data-only
     * [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format)
     * as they become available, with the stream terminated by a `data: [DONE]`
     * message.
     * [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_stream_completions.ipynb).
     */
    stream: true,
    ...
  } & ChatCompletionCreateParamsBase;
  declare class Chat extends APIResource {
    completions: Completions;
  }
  declare class Embeddings extends APIResource {
    /**
     * Creates an embedding vector representing the input text.
     */
    create(
      body: EmbeddingCreateParams,
      options?: RequestOptions<>
    ): APIPromise<typeof CreateEmbeddingResponse>;
  }
  declare var CreateEmbeddingResponse: typeof npm$namespace$CreateEmbeddingResponse;

  declare var npm$namespace$CreateEmbeddingResponse: {|
    Usage: Class<CreateEmbeddingResponse$Usage>,
  |};

  /**
   * The usage information for the request.
   */
  declare interface CreateEmbeddingResponse$Usage {
    /**
     * The number of tokens used by the prompt.
     */
    prompt_tokens: number;

    /**
     * The total number of tokens used by the request.
     */
    total_tokens: number;
  }
  /**
   * Represents an embedding vector returned by embedding endpoint.
   */
  declare interface Embedding {
    /**
     * The embedding vector, which is a list of floats. The length of vector depends on
     * the model as listed in the
     * [embedding guide](https://platform.openai.com/docs/guides/embeddings).
     */
    embedding: Array<number>;

    /**
     * The index of the embedding in the list of embeddings.
     */
    index: number;

    /**
     * The object type, which is always "embedding".
     */
    object: string;
  }
  declare interface EmbeddingCreateParams {
    /**
     * Input text to embed, encoded as a string or array of tokens. To embed multiple
     * inputs in a single request, pass an array of strings or array of token arrays.
     * Each input must not exceed the max input tokens for the model (8191 tokens for
     * `text-embedding-ada-002`) and cannot be an empty string.
     * [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_count_tokens_with_tiktoken.ipynb)
     * for counting tokens.
     */
    input: string | Array<string> | Array<number> | Array<Array<number>>;

    /**
     * ID of the model to use. You can use the
     * [List models](https://platform.openai.com/docs/api-reference/models/list) API to
     * see all of your available models, or see our
     * [Model overview](https://platform.openai.com/docs/models/overview) for
     * descriptions of them.
     */
    model: "text-embedding-ada-002";

    /**
     * A unique identifier representing your end-user, which can help OpenAI to monitor
     * and detect abuse.
     * [Learn more](https://platform.openai.com/docs/guides/safety-best-practices/end-user-ids).
     */
    user?: string;
  }
  declare class Edits extends APIResource {
    /**
     * Creates a new edit for the provided input, instruction, and parameters.
     * @deprecated The Edits API is deprecated; please use Chat Completions instead.
     *
     * https://openai.com/blog/gpt-4-api-general-availability#deprecation-of-the-edits-api
     */
    create(body: EditCreateParams, options?: RequestOptions<>): APIPromise<typeof Edit>;
  }
  declare var Edit: typeof npm$namespace$Edit;

  declare var npm$namespace$Edit: {|
    Choice: Class<Edit$Choice>,
  |};
  declare interface Edit$Choice {
    /**
     * The reason the model stopped generating tokens. This will be `stop` if the model
     * hit a natural stop point or a provided stop sequence, `length` if the maximum
     * number of tokens specified in the request was reached, or `content_filter` if
     * content was omitted due to a flag from our content filters.
     */
    finish_reason: "stop" | "length";

    /**
     * The index of the choice in the list of choices.
     */
    index: number;

    /**
     * The edited result.
     */
    text: string;
  }
  declare interface EditCreateParams {
    /**
     * The instruction that tells the model how to edit the prompt.
     */
    instruction: string;

    /**
     * ID of the model to use. You can use the `text-davinci-edit-001` or
     * `code-davinci-edit-001` model with this endpoint.
     */
    model:
      | "text-davinci-edit-001"
      | "code-davinci-edit-001";

    /**
     * The input text to use as a starting point for the edit.
     */
    input?: string | null;

    /**
     * How many edits to generate for the input and instruction.
     */
    n?: number | null;

    /**
     * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will
     * make the output more random, while lower values like 0.2 will make it more
     * focused and deterministic.
     *
     * We generally recommend altering this or `top_p` but not both.
     */
    temperature?: number | null;

    /**
     * An alternative to sampling with temperature, called nucleus sampling, where the
     * model considers the results of the tokens with top_p probability mass. So 0.1
     * means only the tokens comprising the top 10% probability mass are considered.
     *
     * We generally recommend altering this or `temperature` but not both.
     */
    top_p?: number | null;
  }
  declare class Files extends APIResource {
    /**
     * Upload a file that contains document(s) to be used across various
     * endpoints/features. Currently, the size of all the files uploaded by one
     * organization can be up to 1 GB. Please contact us if you need to increase the
     * storage limit.
     */
    create(
      body: FileCreateParams,
      options?: RequestOptions<>
    ): APIPromise<FileObject>;

    /**
     * Returns information about a specific file.
     */
    retrieve(fileId: string, options?: RequestOptions<>): APIPromise<FileObject>;

    /**
     * Returns a list of files that belong to the user's organization.
     */
    list(options?: RequestOptions<>): PagePromise<FileObjectsPage, FileObject>;

    /**
     * Delete a file.
     */
    del(fileId: string, options?: RequestOptions<>): APIPromise<FileDeleted>;

    /**
     * Returns the contents of the specified file.
     */
    retrieveContent(
      fileId: string,
      options?: RequestOptions<>
    ): APIPromise<string>;

    /**
     * Waits for the given file to be processed, default timeout is 30 mins.
     */
    waitForProcessing(
      id: string,
      x?: {
        pollInterval?: number,
        maxWait?: number,
        ...
      }
    ): Promise<FileObject>;
  }
  declare class FileObjectsPage extends Page<FileObject> {}
  declare type FileContent = string;
  declare interface FileDeleted {
    id: string;
    deleted: boolean;
    object: string;
  }
  /**
   * The `File` object represents a document that has been uploaded to OpenAI.
   */
  declare interface FileObject {
    /**
     * The file identifier, which can be referenced in the API endpoints.
     */
    id: string;

    /**
     * The size of the file in bytes.
     */
    bytes: number;

    /**
     * The Unix timestamp (in seconds) for when the file was created.
     */
    created_at: number;

    /**
     * The name of the file.
     */
    filename: string;

    /**
     * The object type, which is always "file".
     */
    object: string;

    /**
     * The intended purpose of the file. Currently, only "fine-tune" is supported.
     */
    purpose: string;

    /**
     * The current status of the file, which can be either `uploaded`, `processed`,
     * `pending`, `error`, `deleting` or `deleted`.
     */
    status?: string;

    /**
     * Additional details about the status of the file. If the file is in the `error`
     * state, this will include a message describing the error.
     */
    status_details?: string | null;
  }
  declare interface FileCreateParams {
    /**
     * Name of the [JSON Lines](https://jsonlines.readthedocs.io/en/latest/) file to be
     * uploaded.
     *
     * If the `purpose` is set to "fine-tune", the file will be used for fine-tuning.
     */
    file: Uploadable;

    /**
     * The intended purpose of the uploaded documents.
     *
     * Use "fine-tune" for
     * [fine-tuning](https://platform.openai.com/docs/api-reference/fine-tuning). This
     * allows us to validate the format of the uploaded file.
     */
    purpose: string;
  }
  declare class FineTunes extends APIResource {
    /**
     * Creates a job that fine-tunes a specified model from a given dataset.
     *
     * Response includes details of the enqueued job including job status and the name
     * of the fine-tuned models once complete.
     *
     * [Learn more about fine-tuning](https://platform.openai.com/docs/guides/legacy-fine-tuning)
     */
    create(
      body: FineTuneCreateParams,
      options?: RequestOptions<>
    ): APIPromise<typeof FineTune>;

    /**
     * Gets info about the fine-tune job.
     *
     * [Learn more about fine-tuning](https://platform.openai.com/docs/guides/legacy-fine-tuning)
     */
    retrieve(
      fineTuneId: string,
      options?: RequestOptions<>
    ): APIPromise<typeof FineTune>;

    /**
     * List your organization's fine-tuning jobs
     */
    list(options?: RequestOptions<>): PagePromise<FineTunesPage, typeof FineTune>;

    /**
     * Immediately cancel a fine-tune job.
     */
    cancel(fineTuneId: string, options?: RequestOptions<>): APIPromise<typeof FineTune>;

    /**
     * Get fine-grained status updates for a fine-tune job.
     */
    listEvents(
      fineTuneId: string,
      query?: FineTuneListEventsParamsNonStreaming,
      options?: RequestOptions<>
    ): APIPromise<FineTuneEventsListResponse>;
    listEvents(
      fineTuneId: string,
      query: FineTuneListEventsParamsStreaming,
      options?: RequestOptions<>
    ): APIPromise<Stream<FineTuneEvent>>;
    listEvents(
      fineTuneId: string,
      query?: FineTuneListEventsParamsBase | void,
      options?: RequestOptions<>
    ): APIPromise<Stream<FineTuneEvent> | FineTuneEventsListResponse>;
  }
  declare class FineTunesPage extends Page<typeof FineTune> {}
  /**
   * The `FineTune` object represents a legacy fine-tune job that has been created
   * through the
   */
  declare var FineTune: typeof npm$namespace$FineTune;

  declare var npm$namespace$FineTune: {|
    Hyperparams: Class<FineTune$Hyperparams>,
  |};

  /**
   * The hyperparameters used for the fine-tuning job. See the
   * [fine-tuning guide](https://platform.openai.com/docs/guides/legacy-fine-tuning/hyperparameters)
   * for more details.
   */
  declare interface FineTune$Hyperparams {
    /**
     * The batch size to use for training. The batch size is the number of training
     * examples used to train a single forward and backward pass.
     */
    batch_size: number;

    /**
     * The learning rate multiplier to use for training.
     */
    learning_rate_multiplier: number;

    /**
     * The number of epochs to train the model for. An epoch refers to one full cycle
     * through the training dataset.
     */
    n_epochs: number;

    /**
     * The weight to use for loss on the prompt tokens.
     */
    prompt_loss_weight: number;

    /**
     * The number of classes to use for computing classification metrics.
     */
    classification_n_classes?: number;

    /**
     * The positive class to use for computing classification metrics.
     */
    classification_positive_class?: string;

    /**
     * The classification metrics to compute using the validation dataset at the end of
     * every epoch.
     */
    compute_classification_metrics?: boolean;
  }
  declare interface FineTuneEvent {
    created_at: number;
    level: string;
    message: string;
    object: string;
  }
  declare interface FineTuneEventsListResponse {
    data: Array<FineTuneEvent>;
    object: string;
  }
  declare interface FineTuneCreateParams {
    /**
     * The ID of an uploaded file that contains training data.
     *
     * See [upload file](https://platform.openai.com/docs/api-reference/files/upload)
     * for how to upload a file.
     *
     * Your dataset must be formatted as a JSONL file, where each training example is a
     * JSON object with the keys "prompt" and "completion". Additionally, you must
     * upload your file with the purpose `fine-tune`.
     *
     * See the
     * [fine-tuning guide](https://platform.openai.com/docs/guides/legacy-fine-tuning/creating-training-data)
     * for more details.
     */
    training_file: string;

    /**
     * The batch size to use for training. The batch size is the number of training
     * examples used to train a single forward and backward pass.
     *
     * By default, the batch size will be dynamically configured to be ~0.2% of the
     * number of examples in the training set, capped at 256 - in general, we've found
     * that larger batch sizes tend to work better for larger datasets.
     */
    batch_size?: number | null;

    /**
     * If this is provided, we calculate F-beta scores at the specified beta values.
     * The F-beta score is a generalization of F-1 score. This is only used for binary
     * classification.
     *
     * With a beta of 1 (i.e. the F-1 score), precision and recall are given the same
     * weight. A larger beta score puts more weight on recall and less on precision. A
     * smaller beta score puts more weight on precision and less on recall.
     */
    classification_betas?: Array<number> | null;

    /**
     * The number of classes in a classification task.
     *
     * This parameter is required for multiclass classification.
     */
    classification_n_classes?: number | null;

    /**
     * The positive class in binary classification.
     *
     * This parameter is needed to generate precision, recall, and F1 metrics when
     * doing binary classification.
     */
    classification_positive_class?: string | null;

    /**
     * If set, we calculate classification-specific metrics such as accuracy and F-1
     * score using the validation set at the end of every epoch. These metrics can be
     * viewed in the
     * [results file](https://platform.openai.com/docs/guides/legacy-fine-tuning/analyzing-your-fine-tuned-model).
     *
     * In order to compute classification metrics, you must provide a
     * `validation_file`. Additionally, you must specify `classification_n_classes` for
     * multiclass classification or `classification_positive_class` for binary
     * classification.
     */
    compute_classification_metrics?: boolean | null;

    /**
     * The learning rate multiplier to use for training. The fine-tuning learning rate
     * is the original learning rate used for pretraining multiplied by this value.
     *
     * By default, the learning rate multiplier is the 0.05, 0.1, or 0.2 depending on
     * final `batch_size` (larger learning rates tend to perform better with larger
     * batch sizes). We recommend experimenting with values in the range 0.02 to 0.2 to
     * see what produces the best results.
     */
    learning_rate_multiplier?: number | null;

    /**
     * The name of the base model to fine-tune. You can select one of "ada", "babbage",
     * "curie", "davinci", or a fine-tuned model created after 2022-04-21 and before
     * 2023-08-22. To learn more about these models, see the
     * [Models](https://platform.openai.com/docs/models) documentation.
     */
    model?:
      | "ada"
      | "babbage"
      | "curie"
      | "davinci"
      | null;

    /**
     * The number of epochs to train the model for. An epoch refers to one full cycle
     * through the training dataset.
     */
    n_epochs?: number | null;

    /**
     * The weight to use for loss on the prompt tokens. This controls how much the
     * model tries to learn to generate the prompt (as compared to the completion which
     * always has a weight of 1.0), and can add a stabilizing effect to training when
     * completions are short.
     *
     * If prompts are extremely long (relative to completions), it may make sense to
     * reduce this weight so as to avoid over-prioritizing learning the prompt.
     */
    prompt_loss_weight?: number | null;

    /**
     * A string of up to 40 characters that will be added to your fine-tuned model
     * name.
     *
     * For example, a `suffix` of "custom-model-name" would produce a model name like
     * `ada:ft-your-org:custom-model-name-2022-02-15-04-21-04`.
     */
    suffix?: string | null;

    /**
     * The ID of an uploaded file that contains validation data.
     *
     * If you provide this file, the data is used to generate validation metrics
     * periodically during fine-tuning. These metrics can be viewed in the
     * [fine-tuning results file](https://platform.openai.com/docs/guides/legacy-fine-tuning/analyzing-your-fine-tuned-model).
     * Your train and validation data should be mutually exclusive.
     *
     * Your dataset must be formatted as a JSONL file, where each validation example is
     * a JSON object with the keys "prompt" and "completion". Additionally, you must
     * upload your file with the purpose `fine-tune`.
     *
     * See the
     * [fine-tuning guide](https://platform.openai.com/docs/guides/legacy-fine-tuning/creating-training-data)
     * for more details.
     */
    validation_file?: string | null;
  }
  declare type FineTuneListEventsParams =
    | FineTuneListEventsParamsNonStreaming
    | FineTuneListEventsParamsStreaming;
  declare interface FineTuneListEventsParamsBase {
    /**
     * Whether to stream events for the fine-tune job. If set to true, events will be
     * sent as data-only
     * [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format)
     * as they become available. The stream will terminate with a `data: [DONE]`
     * message when the job is finished (succeeded, cancelled, or failed).
     *
     * If set to false, only events generated so far will be returned.
     */
    stream?: boolean;
  }
  declare type FineTuneListEventsParamsNonStreaming = {
    /**
     * Whether to stream events for the fine-tune job. If set to true, events will be
     * sent as data-only
     * [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format)
     * as they become available. The stream will terminate with a `data: [DONE]`
     * message when the job is finished (succeeded, cancelled, or failed).
     *
     * If set to false, only events generated so far will be returned.
     */
    stream?: false,
    ...
  } & FineTuneListEventsParamsBase;
  declare type FineTuneListEventsParamsStreaming = {
    /**
     * Whether to stream events for the fine-tune job. If set to true, events will be
     * sent as data-only
     * [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format)
     * as they become available. The stream will terminate with a `data: [DONE]`
     * message when the job is finished (succeeded, cancelled, or failed).
     *
     * If set to false, only events generated so far will be returned.
     */
    stream: true,
    ...
  } & FineTuneListEventsParamsBase;
  declare class Jobs extends APIResource {
    /**
     * Creates a job that fine-tunes a specified model from a given dataset.
     *
     * Response includes details of the enqueued job including job status and the name
     * of the fine-tuned models once complete.
     *
     * [Learn more about fine-tuning](https://platform.openai.com/docs/guides/fine-tuning)
     */
    create(
      body: typeof JobCreateParams,
      options?: RequestOptions<>
    ): APIPromise<FineTuningJob>;

    /**
     * Get info about a fine-tuning job.
     *
     * [Learn more about fine-tuning](https://platform.openai.com/docs/guides/fine-tuning)
     */
    retrieve(
      fineTuningJobId: string,
      options?: RequestOptions<>
    ): APIPromise<FineTuningJob>;

    /**
     * List your organization's fine-tuning jobs
     */
    list(
      query?: JobListParams,
      options?: RequestOptions<>
    ): PagePromise<FineTuningJobsPage, FineTuningJob>;
    list(
      options?: RequestOptions<>
    ): PagePromise<FineTuningJobsPage, FineTuningJob>;

    /**
     * Immediately cancel a fine-tune job.
     */
    cancel(
      fineTuningJobId: string,
      options?: RequestOptions<>
    ): APIPromise<FineTuningJob>;

    /**
     * Get status updates for a fine-tuning job.
     */
    listEvents(
      fineTuningJobId: string,
      query?: JobListEventsParams,
      options?: RequestOptions<>
    ): PagePromise<FineTuningJobEventsPage, FineTuningJobEvent>;
    listEvents(
      fineTuningJobId: string,
      options?: RequestOptions<>
    ): PagePromise<FineTuningJobEventsPage, FineTuningJobEvent>;
  }
  declare class FineTuningJobsPage extends CursorPage<FineTuningJob> {}
  declare class FineTuningJobEventsPage extends CursorPage<FineTuningJobEvent> {}

  /**
   * The `fine_tuning.job` object represents a fine-tuning job that has been created
   * through the API.
   */
  declare interface FineTuningJob {
    /**
     * The object identifier, which can be referenced in the API endpoints.
     */
    id: string;

    /**
     * The Unix timestamp (in seconds) for when the fine-tuning job was created.
     */
    created_at: number;

    /**
     * For fine-tuning jobs that have `failed`, this will contain more information on
     * the cause of the failure.
     */
    error: FineTuningJob$Error | null;

    /**
     * The name of the fine-tuned model that is being created. The value will be null
     * if the fine-tuning job is still running.
     */
    fine_tuned_model: string | null;

    /**
     * The Unix timestamp (in seconds) for when the fine-tuning job was finished. The
     * value will be null if the fine-tuning job is still running.
     */
    finished_at: number | null;

    /**
     * The hyperparameters used for the fine-tuning job. See the
     * [fine-tuning guide](https://platform.openai.com/docs/guides/fine-tuning) for
     * more details.
     */
    hyperparameters: FineTuningJob$Hyperparameters;

    /**
     * The base model that is being fine-tuned.
     */
    model: string;

    /**
     * The object type, which is always "fine_tuning.job".
     */
    object: string;

    /**
     * The organization that owns the fine-tuning job.
     */
    organization_id: string;

    /**
     * The compiled results file ID(s) for the fine-tuning job. You can retrieve the
     * results with the
     * [Files API](https://platform.openai.com/docs/api-reference/files/retrieve-contents).
     */
    result_files: Array<string>;

    /**
     * The current status of the fine-tuning job, which can be either
     * `validating_files`, `queued`, `running`, `succeeded`, `failed`, or `cancelled`.
     */
    status: string;

    /**
     * The total number of billable tokens processed by this fine-tuning job. The value
     * will be null if the fine-tuning job is still running.
     */
    trained_tokens: number | null;

    /**
     * The file ID used for training. You can retrieve the training data with the
     * [Files API](https://platform.openai.com/docs/api-reference/files/retrieve-contents).
     */
    training_file: string;

    /**
     * The file ID used for validation. You can retrieve the validation results with
     * the
     * [Files API](https://platform.openai.com/docs/api-reference/files/retrieve-contents).
     */
    validation_file: string | null;
  }
  /**
   * For fine-tuning jobs that have `failed`, this will contain more information on
   * the cause of the failure.
   */
  declare interface FineTuningJob$Error {
    /**
     * A machine-readable error code.
     */
    code: string;

    /**
     * A human-readable error message.
     */
    message: string;

    /**
     * The parameter that was invalid, usually `training_file` or `validation_file`.
     * This field will be null if the failure was not parameter-specific.
     */
    param: string | null;
  }

  /**
   * The hyperparameters used for the fine-tuning job. See the
   * [fine-tuning guide](https://platform.openai.com/docs/guides/fine-tuning) for
   * more details.
   */
  declare interface FineTuningJob$Hyperparameters {
    /**
     * The number of epochs to train the model for. An epoch refers to one full cycle
     * through the training dataset. "auto" decides the optimal number of epochs based
     * on the size of the dataset. If setting the number manually, we support any
     * number between 1 and 50 epochs.
     */
    n_epochs: "auto" | number;
  }
  declare interface FineTuningJobEvent {
    id: string;
    created_at: number;
    level: "info" | "warn" | "error";
    message: string;
    object: string;
  }
  declare var JobCreateParams: typeof npm$namespace$JobCreateParams;

  declare var npm$namespace$JobCreateParams: {|
    Hyperparameters: Class<JobCreateParams$Hyperparameters>,
  |};

  /**
   * The hyperparameters used for the fine-tuning job.
   */
  declare interface JobCreateParams$Hyperparameters {
    /**
     * The number of epochs to train the model for. An epoch refers to one full cycle
     * through the training dataset.
     */
    n_epochs?: "auto" | number;
  }
  declare type JobListParams = { ... } & CursorPageParams;
  declare type JobListEventsParams = { ... } & CursorPageParams;
  declare class FineTuning extends APIResource {
    jobs: Jobs;
  }
  declare class Images extends APIResource {
    /**
     * Creates a variation of a given image.
     */
    createVariation(
      body: ImageCreateVariationParams,
      options?: RequestOptions<>
    ): APIPromise<ImagesResponse>;

    /**
     * Creates an edited or extended image given an original image and a prompt.
     */
    edit(
      body: ImageEditParams,
      options?: RequestOptions<>
    ): APIPromise<ImagesResponse>;

    /**
     * Creates an image given a prompt.
     */
    generate(
      body: ImageGenerateParams,
      options?: RequestOptions<>
    ): APIPromise<ImagesResponse>;
  }
  /**
   * Represents the url or the content of an image generated by the OpenAI
   */
  declare interface Image {
    /**
     * The base64-encoded JSON of the generated image, if `response_format` is
     * `b64_json`.
     */
    b64_json?: string;

    /**
     * The URL of the generated image, if `response_format` is `url` (default).
     */
    url?: string;
  }
  declare interface ImagesResponse {
    created: number;
    data: Array<Image>;
  }
  declare interface ImageCreateVariationParams {
    /**
     * The image to use as the basis for the variation(s). Must be a valid PNG file,
     * less than 4MB, and square.
     */
    image: Uploadable;

    /**
     * The number of images to generate. Must be between 1 and 10.
     */
    n?: number | null;

    /**
     * The format in which the generated images are returned. Must be one of `url` or
     * `b64_json`.
     */
    response_format?: "url" | "b64_json" | null;

    /**
     * The size of the generated images. Must be one of `256x256`, `512x512`, or
     * `1024x1024`.
     */
    size?: "256x256" | "512x512" | "1024x1024" | null;

    /**
     * A unique identifier representing your end-user, which can help OpenAI to monitor
     * and detect abuse.
     * [Learn more](https://platform.openai.com/docs/guides/safety-best-practices/end-user-ids).
     */
    user?: string;
  }
  declare interface ImageEditParams {
    /**
     * The image to edit. Must be a valid PNG file, less than 4MB, and square. If mask
     * is not provided, image must have transparency, which will be used as the mask.
     */
    image: Uploadable;

    /**
     * A text description of the desired image(s). The maximum length is 1000
     * characters.
     */
    prompt: string;

    /**
     * An additional image whose fully transparent areas (e.g. where alpha is zero)
     * indicate where `image` should be edited. Must be a valid PNG file, less than
     * 4MB, and have the same dimensions as `image`.
     */
    mask?: Uploadable;

    /**
     * The number of images to generate. Must be between 1 and 10.
     */
    n?: number | null;

    /**
     * The format in which the generated images are returned. Must be one of `url` or
     * `b64_json`.
     */
    response_format?: "url" | "b64_json" | null;

    /**
     * The size of the generated images. Must be one of `256x256`, `512x512`, or
     * `1024x1024`.
     */
    size?: "256x256" | "512x512" | "1024x1024" | null;

    /**
     * A unique identifier representing your end-user, which can help OpenAI to monitor
     * and detect abuse.
     * [Learn more](https://platform.openai.com/docs/guides/safety-best-practices/end-user-ids).
     */
    user?: string;
  }
  declare interface ImageGenerateParams {
    /**
     * A text description of the desired image(s). The maximum length is 1000
     * characters.
     */
    prompt: string;

    /**
     * The number of images to generate. Must be between 1 and 10.
     */
    n?: number | null;

    /**
     * The format in which the generated images are returned. Must be one of `url` or
     * `b64_json`.
     */
    response_format?: "url" | "b64_json" | null;

    /**
     * The size of the generated images. Must be one of `256x256`, `512x512`, or
     * `1024x1024`.
     */
    size?: "256x256" | "512x512" | "1024x1024" | null;

    /**
     * A unique identifier representing your end-user, which can help OpenAI to monitor
     * and detect abuse.
     * [Learn more](https://platform.openai.com/docs/guides/safety-best-practices/end-user-ids).
     */
    user?: string;
  }
  declare class Models extends APIResource {
    /**
     * Retrieves a model instance, providing basic information about the model such as
     * the owner and permissioning.
     */
    retrieve(model: string, options?: RequestOptions<>): APIPromise<Model>;

    /**
     * Lists the currently available models, and provides basic information about each
     * one such as the owner and availability.
     */
    list(options?: RequestOptions<>): PagePromise<ModelsPage, Model>;

    /**
     * Delete a fine-tuned model. You must have the Owner role in your organization to
     * delete a model.
     */
    del(model: string, options?: RequestOptions<>): APIPromise<ModelDeleted>;
  }
  declare class ModelsPage extends Page<Model> {}
  /**
   * Describes an OpenAI model offering that can be used with the
   */
  declare interface Model {
    /**
     * The model identifier, which can be referenced in the API endpoints.
     */
    id: string;

    /**
     * The Unix timestamp (in seconds) when the model was created.
     */
    created: number;

    /**
     * The object type, which is always "model".
     */
    object: string;

    /**
     * The organization that owns the model.
     */
    owned_by: string;
  }
  declare interface ModelDeleted {
    id: string;
    deleted: boolean;
    object: string;
  }
  declare class Moderations extends APIResource {
    /**
     * Classifies if text violates OpenAI's Content Policy
     */
    create(
      body: ModerationCreateParams,
      options?: RequestOptions<>
    ): APIPromise<ModerationCreateResponse>;
  }

  declare interface Moderation {
    /**
     * A list of the categories, and whether they are flagged or not.
     */
    categories: Moderation$Categories;

    /**
     * A list of the categories along with their scores as predicted by model.
     */
    category_scores: Moderation$CategoryScores;

    /**
     * Whether the content violates
     * [OpenAI's usage policies](/policies/usage-policies).
     */
    flagged: boolean;
  }

  declare type ModerationCategoryName =
    /**
     * Content that expresses, incites, or promotes harassing language towards any
     * target.
     */
    | "harassment"

    /**
     * Harassment content that also includes violence or serious harm towards any
     * target.
     */
    | "harassment/threatening"

    /**
     * Content that expresses, incites, or promotes hate based on race, gender,
     * ethnicity, religion, nationality, sexual orientation, disability status, or
     * caste. Hateful content aimed at non-protected groups (e.g., chess players) is
     * harassment.
     */
    | "hate"

    /**
     * Hateful content that also includes violence or serious harm towards the targeted
     * group based on race, gender, ethnicity, religion, nationality, sexual
     * orientation, disability status, or caste.
     */
    | "hate/threatening"

    /**
     * Content that promotes, encourages, or depicts acts of self-harm, such as
     * suicide, cutting, and eating disorders.
     */
    | "self-harm"

    /**
     * Content that encourages performing acts of self-harm, such as suicide, cutting,
     * and eating disorders, or that gives instructions or advice on how to commit such
     * acts.
     */
    | "self-harm/instructions"

    /**
     * Content where the speaker expresses that they are engaging or intend to engage
     * in acts of self-harm, such as suicide, cutting, and eating disorders.
     */
    | "self-harm/intent"

    /**
     * Content meant to arouse sexual excitement, such as the description of sexual
     * activity, or that promotes sexual services (excluding sex education and
     * wellness).
     */
    | "sexual"

    /**
     * Sexual content that includes an individual who is under 18 years old.
     */
    | "sexual/minors"

    /**
     * Content that depicts death, violence, or physical injury.
     */
    | "violence"

    /**
     * Content that depicts death, violence, or physical injury in graphic detail.
     */
    | "violence/graphic"
  ;

  /**
   * A list of the categories, and whether they are flagged or not.
   */
  declare interface Moderation$Categories {
    [moderationCategoryName: ModerationCategoryName]: boolean
  }

  /**
   * A list of the categories along with their scores as predicted by model.
   */
  declare interface Moderation$CategoryScores {
    [moderationCategoryName: ModerationCategoryName]: number
  }
  /**
   * Represents policy compliance report by OpenAI's content moderation model against
   * a given input.
   */
  declare interface ModerationCreateResponse {
    /**
     * The unique identifier for the moderation request.
     */
    id: string;

    /**
     * The model used to generate the moderation results.
     */
    model: string;

    /**
     * A list of moderation objects.
     */
    results: Array<Moderation>;
  }
  declare interface ModerationCreateParams {
    /**
     * The input text to classify
     */
    input: string | Array<string>;

    /**
     * Two content moderations models are available: `text-moderation-stable` and
     * `text-moderation-latest`.
     *
     * The default is `text-moderation-latest` which will be automatically upgraded
     * over time. This ensures you are always using our most accurate model. If you use
     * `text-moderation-stable`, we will provide advanced notice before updating the
     * model. Accuracy of `text-moderation-stable` may be slightly lower than for
     * `text-moderation-latest`.
     */
    model?:
      | "text-moderation-latest"
      | "text-moderation-stable";
  }
  declare interface ClientOptions {
    /**
     * Defaults to process.env["OPENAI_API_KEY"].
     */
    apiKey?: string;

    /**
     * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
     */
    baseURL?: string;

    /**
     * The maximum amount of time (in milliseconds) that the client should wait for a response
     * from the server before timing out a single request.
     *
     * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
     * much longer than this timeout before the promise succeeds or fails.
     */
    timeout?: number;

    /**
     * An HTTP agent used to manage HTTP(S) connections.
     *
     * If not provided, an agent will be constructed by default in the Node.js environment,
     * otherwise no agent is used.
     */
    httpAgent?: Agent;

    /**
     * Specify a custom `fetch` function implementation.
     *
     * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
     * defined globally.
     */
    fetch?: Fetch | void;

    /**
     * The maximum number of times that the client will retry a request in case of a
     * temporary failure, like a network error or a 5XX error from the server.
     * @default 2
     */
    maxRetries?: number;

    /**
     * Default headers to include with every request to the
     *
     * These can be removed in individual requests by explicitly setting the
     * header to `undefined` or `null` in request options.
     */
    defaultHeaders?: Headers;

    /**
     * Default query parameters to include with every request to the
     *
     * These can be removed in individual requests by explicitly setting the
     * param to `undefined` in request options.
     */
    defaultQuery?: DefaultQuery;

    /**
     * By default, client-side use of this library is not allowed, as it risks exposing your secret API credentials to attackers.
     * Only set this option to `true` if you understand the risks and have appropriate mitigations in place.
     */
    dangerouslyAllowBrowser?: boolean;
    organization?: string | null;
  }
  /**
   * API Client for interfacing with the OpenAI
   */
  declare class OpenAI extends APIClient {
    apiKey: string;
    organization?: string | null;

    /**
     * API Client for interfacing with the OpenAI
     * @param {string} [opts.apiKey] - The API Key to send to the
     * @param {string} [opts.baseURL] - Override the default base URL for the
     * @param {number} [opts.timeout] minutes] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
     * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
     * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
     * @param {number} [opts.maxRetries] - The maximum number of times the client will retry a request.
     * @param {Headers} opts.defaultHeaders - Default headers to include with every request to the
     * @param {DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the
     * @param {boolean} [opts.dangerouslyAllowBrowser] - By default, client-side use of this library is not allowed, as it risks exposing your secret API credentials to attackers.
     * @param {string | null} [opts.organization]
     */
    constructor(x?: ClientOptions): this;
    completions: Completions;
    chat: Chat;
    edits: Edits;
    embeddings: Embeddings;
    files: Files;
    images: Images;
    audio: Audio;
    moderations: Moderations;
    models: Models;
    fineTuning: FineTuning;
    fineTunes: FineTunes;
    defaultQuery(): DefaultQuery | void;
    defaultHeaders(opts: FinalRequestOptions<>): Headers;
    authHeaders(opts: FinalRequestOptions<>): Headers;
    static OpenAI: typeof OpenAI;
    static OpenAIError: typeof Errors$OpenAIError;
    static APIError: typeof Errors$APIError;
    static APIConnectionError: typeof Errors$APIConnectionError;
    static APIConnectionTimeoutError: typeof Errors$APIConnectionTimeoutError;
    static APIUserAbortError: typeof Errors$APIUserAbortError;
    static NotFoundError: typeof Errors$NotFoundError;
    static ConflictError: typeof Errors$ConflictError;
    static RateLimitError: typeof Errors$RateLimitError;
    static BadRequestError: typeof Errors$BadRequestError;
    static AuthenticationError: typeof Errors$AuthenticationError;
    static InternalServerError: typeof Errors$InternalServerError;
    static PermissionDeniedError: typeof Errors$PermissionDeniedError;
    static UnprocessableEntityError: typeof Errors$UnprocessableEntityError;
  }
  declare var OpenAIError: typeof Errors$OpenAIError;
  declare var APIError: typeof Errors$APIError;
  declare var APIConnectionError: typeof Errors$APIConnectionError;
  declare var APIConnectionTimeoutError: typeof Errors$APIConnectionTimeoutError;
  declare var APIUserAbortError: typeof Errors$APIUserAbortError;
  declare var NotFoundError: typeof Errors$NotFoundError;
  declare var ConflictError: typeof Errors$ConflictError;
  declare var RateLimitError: typeof Errors$RateLimitError;
  declare var BadRequestError: typeof Errors$BadRequestError;
  declare var AuthenticationError: typeof Errors$AuthenticationError;
  declare var InternalServerError: typeof Errors$InternalServerError;
  declare var PermissionDeniedError: typeof Errors$PermissionDeniedError;
  declare var UnprocessableEntityError: typeof Errors$UnprocessableEntityError;
  declare module.exports: Class<OpenAI>;
}
