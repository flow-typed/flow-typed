// @flow
import { describe, it } from 'flow-typed-test';
import { Configuration, OpenAIApi } from 'openai';

describe('openai', () => {
  let openAIApi: OpenAIApi;

  it('constructs client', () => {
    const apiKey = "secret";
    const configuration = new Configuration({ apiKey });
    openAIApi = new OpenAIApi(configuration);

    // $FlowExpectedError[incompatible-call]
    const brokenClient = new OpenAIApi({wrong: "type"});
  });

  it('creates chat completion', () => {
    openAIApi.createChatCompletion({model: "gpt-3.5-turbo", messages: [], functions: [{name: "hello-world"}]});

    // $FlowExpectedError[prop-missing]
    openAIApi.createChatCompletion({model: "incomplete-request"});
  })
});
