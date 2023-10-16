// @flow
import { describe, it } from 'flow-typed-test';
import OpenAI, {
  type ChatCompletion,
  type ChatCompletionChunk,
  type ClientOptions,
  type Model,
} from 'openai';

describe('OpenAIApi', () => {
  let openai: OpenAI;

  it('constructs client', () => {
    const apiKey = "secret";
    const configuration: ClientOptions = { apiKey };
    openai = new OpenAI(configuration);

    // $FlowExpectedError[incompatible-call] string required
    const invalidApiKey = new OpenAI({apiKey: 1234});
  });

  it('creates chat completion', () => {
    openai.chat.completions.create({model: "gpt-3.5-turbo", messages: [], functions: [{name: "hello-world", parameters: {}}]});

    // $FlowExpectedError[incompatible-call] requires content and role in messages
    openai.chat.completions.create({model: "gpt-3.5-turbo", messages: [{}]});

    // $FlowExpectedError[incompatible-call] requires messages
    openai.chat.completions.create({model: "incomplete-request"});
  });

  it('creates a non-streaming response with no "stream" param', async () => {
    const nonStreamingResult: ChatCompletion = await openai.chat.completions.create({model: "gpt-3.5-turbo", messages: [], functions: [{name: "hello-world", parameters: {}}]});
  });

  it('creates a streaming response with true "stream" param', async () => {
    const streamingResult = await openai.chat.completions.create({stream: true, model: "gpt-3.5-turbo", messages: [], functions: [{name: "hello-world", parameters: {}}]});
    for await (const chunk: ChatCompletionChunk of streamingResult) {
    }
  });

  it('lists models', async () => {
    const {data} = await openai.models.list();
    const model: Model = data[0];

    // $FlowExpectedError[incompatible-call] unsupported method
    openai.models.list({method: "wrong"});
  });

  it('Moderation has valid response categories', async () => {
    const response = await openai.moderations.create({input: ""});
    const harassment: boolean = response.results[0].categories["harassment"];
    const harassmentThreatening: boolean = response.results[0].categories["harassment/threatening"];
    const harassmentScore: number = response.results[0].category_scores["harassment"];
    const harassmentThreateningScore: number = response.results[0].category_scores["harassment/threatening"];

    // $FlowExpectedError[incompatible-type]
    const unknownCategory: boolean = response.results[0].categories["not-a-category"];
    // $FlowExpectedError[incompatible-type]
    const unknownCategoryScore: number = response.results[0].category_scores["not-a-category"];
  })
});
