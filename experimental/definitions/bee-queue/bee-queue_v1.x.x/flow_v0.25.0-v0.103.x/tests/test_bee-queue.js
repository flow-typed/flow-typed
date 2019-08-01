const Queue = require("bee-queue");

// Queue
const q = new Queue("example", {
  redis: {
    host: "somewhereElse"
  },
  isWorker: false
});
const queue = new Queue("example");

queue.name;
queue.keyPrefix;
queue.jobs;
queue.paused;
queue.settings;
// $ExpectError
queue.bogus;

queue.getJob(3, (err, job) => console.log(`Job 3 has status ${job.status}`));
queue.getJob(3).then(job => console.log(`Job 3 has status ${job.status}`));

queue.getJobs("waiting", { start: 0, end: 25 }).then(jobs => {
  const jobIds = jobs.map(job => job.id);
  console.log(`Job ids: ${jobIds.join(" ")}`);
});
queue.getJobs("failed", { size: 100 }, (err, jobs) => {
  const jobIds = jobs.map(job => job.id);
  console.log(`Job ids: ${jobIds.join(" ")}`);
});

queue.process((job, done) => {
  return done(null, job.data.x + job.data.y);
});
queue.process(job => {
  return Promise.resolve(job.id);
});

queue.removeJob(3, err => console.log("Job 3 was removed"));
queue.removeJob(3).then(err => console.log("Job 3 was removed"));

queue.checkStalledJobs(5000, (err, numStalled) => {
  console.log("Checked stalled jobs", numStalled);
});

queue.checkHealth(health => {});
queue.checkHealth().then(health => {});

queue.close(1000, err => {});
queue.close(1000).then(() => {});

queue.destroy(err => {});
queue.destroy().then(err => console.log("Queue was destroyed"));

// Job
let job = queue.createJob({ x: 1 });

job.id;
job.data;
job.options;
job.queue;
job.progress;

job
  .backoff("immediate")
  .backoff("fixed", 1000)
  .delayUntil(1231431553)
  .delayUntil(Date.parse("2038-01-19T03:14:08.000Z"))
  .reportProgress(35)
  .retries(3)
  .setId("bulk")
  .timeout(10000)
  .save((err, _job) => console.log(`Job ${_job.id} was saved`));

job.save().then(_job => console.log(`Job ${_job.id} was saved`));

job.on("succeeded", result => {});
// $ExpectError
job.on("missing event handler");

job.remove(err => console.log("Job was removed"));
job.remove().then(() => console.log("Job was removed"));
