import isoFetch from "isomorphic-fetch";

(isoFetch("foo"): Promise<Response>);
(isoFetch("foo", {}): Promise<Response>);

// $FlowExpectedError url has to be string
(isoFetch(123): Promise<any>);

isoFetch("foo", {
  method: "GET"
});

isoFetch("foo", {
  body: "bar"
});

// $FlowExpectedError number is not a valid body type
isoFetch("foo", {
  body: 5
});

// Response tests
isoFetch("foo").then(res => {
  (res.clone(): Response);

  // Response Headers
  (res.headers: Headers);
  (res.headers.append("foo", "bar"): void);
  // $FlowExpectedError
  (res.headers.append(5, "bar"): void);
  (res.headers.delete("foo"): void);
  // $FlowExpectedError
  (res.headers.delete(5): void);
  (res.headers.entries(): Iterator<*>);
  (res.headers.get("test"): ?string);
  // $FlowExpectedError
  (res.headers.get(5): string);
  (res.headers.has("foo"): boolean);
  // $FlowExpectedError
  (res.headers.has(5): boolean);
  (res.headers.keys(): Iterator<string>);
  // $FlowExpectedError value should be a string
  (res.headers.set("foo", 5): void);
  (res.headers.values(): Iterator<*>);

  (res.ok: boolean);
  (res.status: number);
  (res.statusText: string);

  // Response type
  (res.type: ResponseType);
  res.type = "basic";
  // $FlowExpectedError foo is not a valid option
  res.type = "foo";

  (res.url: string);
});
