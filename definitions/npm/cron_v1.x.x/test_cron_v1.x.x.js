import { CronJob, CronTime } from 'cron';

const timeZone = 'America/Los_Angeles';

new CronJob('* * * * * *', () => {}, null, true, 'America/Los_Angeles');

// Another cron example
const job1 = new CronJob('00 30 11 * * 1-5', () => {
  /*
   * Runs every weekday (Monday through Friday)
   * at 11:30:00 AM. It does not run on Saturday
   * or Sunday.
   */
  }, () => {
    /* This function is executed when the job stops */
  },
  true, /* Start the job right now */
  timeZone /* Time zone of this job. */
);

// Another example with Date
const job2 = new CronJob(new Date(), () => {
  /* runs once at the specified date. */
  }, () => {
    /* This function is executed when the job stops */
  },
  true, /* Start the job right now */
  timeZone /* Time zone of this job. */
);

// For good measure
const job3 = new CronJob({
  cronTime: '00 30 11 * * 1-5',
  onTick: () => {
    /*
     * Runs every weekday (Monday through Friday)
     * at 11:30:00 AM. It does not run on Saturday
     * or Sunday.
     */
  },
  start: false,
  timeZone: 'America/Los_Angeles'
});
const lastDate: Date = job.lastDate();
const nextDates: Date = job.nextDates(1);
const running: boolean | void = job3.running;
(job3.setTime(new CronTime('00 30 11 * * 1-2')): void);
(job3.start(): void);
(job3.stop(): void);

// $ExpectError
new CronJob(123456, () => {
  /*
   * Runs every weekday (Monday through Friday)
   * at 11:30:00 AM. It does not run on Saturday
   * or Sunday.
   */
  }, () => {
    /* This function is executed when the job stops */
  },
  true, /* Start the job right now */
  timeZone /* Time zone of this job. */
);
// $ExpectError
const job1 = new CronJob('00 30 11 * * 1-5', () => {
  /*
   * Runs every weekday (Monday through Friday)
   * at 11:30:00 AM. It does not run on Saturday
   * or Sunday.
   */
  }, () => {
    /* This function is executed when the job stops */
  },
  true, /* Start the job right now */
  -3 /* Time zone of this job. */
);

// Check cronTime fomat
const cronTime1 = new CronTime('* * * * * *');
const cronTime2 = new CronTime(new Date());

// $ExpectError
new CronTime(1234);
