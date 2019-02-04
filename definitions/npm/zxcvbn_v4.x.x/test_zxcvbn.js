// @flow

import zxcvbn from 'zxcvbn';
import type { Result, Score, AttackTime, Feedback } from 'zxcvbn';

const testA: Result = zxcvbn('123456');
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

const test2: Result = zxcvbn('123456', ['abc']);
