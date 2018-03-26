import micro, {
  json,
  buffer,
  text,
  send,
  createError,
  type RequestHandler
} from "micro";

// $ExpectError (RequestHandler should be a function)
const badHandler: RequestHandler = null;
const goodHandler: RequestHandler = async (req, res) => {
  return "some data";
};

const badServer = micro(async (req, res) => {
  const html = "<div>some html stuff</div>";
  // $ExpectError (res has no endHTML method)
  res.endHTML()
});

const goodServer = micro(async (req, res) => {
  const html = "<div>some html stuff</div>";
  res.end(html);
});

// Body parsing should work
const bodyParsingHandler: RequestHandler = async (req, res) => {
  const buf = await buffer(req);
  console.log(buf);
  const txt = await text(req);
  const js: any = await json(req);
  console.log(js.price);

  return "";
};

// Sending custom status
const statusHandler: RequestHandler = async (req, res) => {
  const statusCode = 400;
  const data = { error: "Custom error message" };
  send(res, statusCode, data);
};

// Error handling
const errorHandler: RequestHandler = async (req, res) => {
  const data = { error: "Custom error message" };

  if (data.error) {
    throw createError(429, "Rate limit exceeded");
  }
};
