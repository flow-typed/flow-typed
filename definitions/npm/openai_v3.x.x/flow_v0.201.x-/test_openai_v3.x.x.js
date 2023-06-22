// @flow
import { describe, it } from 'flow-typed-test';
import { Configuration, OpenAIApi } from 'openai';

describe('openai', () => {
  let openAIApi: OpenAIApi;

  it('constructs client', () => {
    const apiKey = "secret";
    const configuration = new Configuration({ apiKey });
    openAIApi = new OpenAIApi(configuration);

    // $FlowExpectedError[incompatible-call] valid configuration required
    const invalidConfiguration = new OpenAIApi({wrong: "type"});

    // $FlowExpectedError[incompatible-call] string required
    const invalidApiKey = new OpenAIApi({apiKey: 1234});
  });

  it('constructs client with async api key', () => {
    const apiKey = Promise.resolve("secret");
    const configuration = new Configuration({ apiKey });
    openAIApi = new OpenAIApi(configuration);

    // $FlowExpectedError[incompatible-call] string required
    const invalidApiKey = new OpenAIApi({apiKey: Promise.resolve(1234)});
  });

  it('creates answer', () => {
    // $FlowExpectedError[prop-missing] requires model, question, examples, examples_context
    openAIApi.createAnswer({});

    openAIApi.createAnswer({model: "davinci", question: "Who won the NBA championship in 2023?", examples:[], examples_context: "I am a basketball bot."});
  });

  it('creates chat completion', () => {
    openAIApi.createChatCompletion({model: "gpt-3.5-turbo", messages: [], functions: [{name: "hello-world"}]});

    // $FlowExpectedError[prop-missing] requires role
    openAIApi.createChatCompletion({model: "gpt-3.5-turbo", messages: [{}]});

    // $FlowExpectedError[prop-missing] requires messages
    openAIApi.createChatCompletion({model: "incomplete-request"});
  });
});
