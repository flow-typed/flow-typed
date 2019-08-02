// @flow

import zxcvbn from 'zxcvbn';
import type { Result, Score, AttackTime, Feedback } from 'zxcvbn';
import { describe, it } from 'flow-typed-test';

describe('password', () => {
  const testA: Result = zxcvbn('123456');

  //$ExpectError
  const testB: Result = zxcvbn(230232);

  const guesses: number = testA.guesses;
  const guessesLog10: number = testA.guesses_log10;
  const score: Score = testA.score;
  const calcTime: number = testA.calc_time;
  const crackTimeSeconds: AttackTime = testA.crack_times_seconds;
  const onlineThrottling100PerHour =
    crackTimeSeconds.online_throttling_100_per_hour;
  const feedback: Feedback = testA.feedback;
  const warning: string = feedback.warning;
  const suggestions: string[] = feedback.suggestions;
});

describe('user input', () => {
  const test1: Result = zxcvbn('123456', ['abc']);

  // $ExpectError
  const test2: Result = zxcvbn(20, [30]);

  // $ExpectError
  const test3: Result = zxcvbn({}, [{}]);
});
