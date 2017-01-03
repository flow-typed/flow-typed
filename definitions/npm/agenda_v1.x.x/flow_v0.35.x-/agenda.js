// @flow
/**
 * Flowtype definitions for agenda
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'agenda' {


    declare interface Callback {
        (err?: Error): void
    }
    declare interface ResultCallback<T>{
        (err?: Error, result?: T): void
    }
    declare module.exports: typeof Agenda

    /**
     * Agenda Configuration.
     */
    declare interface Agenda$AgendaConfiguration {

        /**
         * Sets the interval with which the queue is checked. A number in milliseconds or a frequency string.
         */
        processEvery?: string | number,

            /**
             * Takes a number which specifies the default number of a specific job that can be running at any given moment.
             * By default it is 5.
             */
            defaultConcurrency?: number,

            /**
             * Takes a number which specifies the max number of jobs that can be running at any given moment. By default it
             * is 20.
             */
            maxConcurrency?: number,

            /**
             * Takes a number which specifies the default number of a specific job that can be locked at any given moment.
             * By default it is 0 for no max.
             */
            defaultLockLimit?: number,

            /**
             * Takes a number shich specifies the max number jobs that can be locked at any given moment. By default it is
             * 0 for no max.
             */
            lockLimit?: number,

            /**
             * Takes a number which specifies the default lock lifetime in milliseconds. By default it is 10 minutes. This
             * can be overridden by specifying the lockLifetime option to a defined job.
             */
            defaultLockLifetime?: number,

            /**
             * Specifies that Agenda should be initialized using and existing MongoDB connection.
             */
            mongo?: {

                /**
                 * The MongoDB database connection to use.
                 */
                db: Db,

                /**
                 * The name of the collection to use.
                 */
                collection?: string
            },

            /**
             * Specifies that Agenda should connect to MongoDB.
             */
            db?: {

                /**
                 * The connection URL.
                 */
                address: string,

                /**
                 * The name of the collection to use.
                 */
                collection?: string,

                /**
                 * Connection options to pass to MongoDB.
                 */
                options?: any
            }
    }


    /**
     * The database record associated with a job.
     */
    declare interface Agenda$JobAttributes {

        /**
         * The record identity.
         */
        _id: ObjectID,

            /**
             * The name of the job.
             */
            name: string,

            /**
             * The type of the job (single|normal).
             */
            type: string,

            /**
             * The job details.
             */
            data: {
                [name: string]: any
            },

            /**
             * The priority of the job.
             */
            priority: number,

            /**
             * How often the job is repeated using a human-readable or cron format.
             */
            repeatInterval: string | number,

            /**
             * The timezone that conforms to [moment-timezone](http://momentjs.com/timezone/).
             */
            repeatTimezone: string,

            /**
             * Date/time the job was las modified.
             */
            lastModifiedBy: string,

            /**
             * Date/time the job will run next.
             */
            nextRunAt: Date,

            /**
             * Date/time the job was locked.
             */
            lockedAt: Date,

            /**
             * Date/time the job was last run.
             */
            lastRunAt: Date,

            /**
             * Date/time the job last finished running.
             */
            lastFinishedAt: Date,

            /**
             * The reason the job failed.
             */
            failReason: string,

            /**
             * The number of times the job has failed.
             */
            failCount: number,

            /**
             * The date/time the job last failed.
             */
            failedAt: Date,

            /**
             * Job's state
             */
            disabled: boolean
    }


    /**
     * A scheduled job.
     */
    declare interface Agenda$Job {

        /**
         * The database record associated with the job.
         */
        attrs: Agenda$JobAttributes,

            /**
             * Specifies an interval on which the job should repeat.
             * @param interval A human-readable format String, a cron format String, or a Number.
             * @param options An optional argument that can include a timezone field. The timezone should be a string as
            accepted by moment-timezone and is considered when using an interval in the cron string format.
            */
            repeatEvery(interval: string | number, options?: {
                timezone?: string
            }): Agenda$Job,

            /**
             * Specifies a time when the job should repeat. [Possible values](https://github.com/matthewmueller/date#examples).
             * @param time 
             */
            repeatAt(time: string): Agenda$Job,

            /**
             * Disables the job.
             */
            disable(): Agenda$Job,

            /**
             * Enables the job.
             */
            enable(): Agenda$Job,

            /**
             * Ensure that only one instance of this job exists with the specified properties
             * @param value The properties associated with the job that must be unqiue.
             * @param opts 
             */
            unique(value: any, opts?: {
                insertOnly?: boolean
            }): Agenda$Job,

            /**
             * Specifies the next time at which the job should run.
             * @param time The next time at which the job should run.
             */
            schedule(time: string | Date): Agenda$Job,

            /**
             * Specifies the priority weighting of the job.
             * @param value The priority of the job (lowest|low|normal|high|highest|number).
             */
            priority(value: string | number): Agenda$Job,

            /**
             * Sets job.attrs.failedAt to now, and sets job.attrs.failReason to reason.
             * @param reason A message or Error object that indicates why the job failed.
             */
            fail(reason: string | Error): Agenda$Job,

            /**
             * Runs the given job and calls callback(err, job) upon completion. Normally you never need to call this manually
             * @param cb Called when the job is completed.
             */
            run(cb?: ResultCallback<Agenda$Job>): Agenda$Job,

            /**
             * Returns true if the job is running; otherwise, returns false.
             */
            isRunning(): boolean,

            /**
             * Saves the job into the database.
             * @param cb Called when the job is saved.
             */
            save(cb?: ResultCallback<Agenda$Job>): Agenda$Job,

            /**
             * Removes the job from the database and cancels the job.
             * @param cb Called after the job has beeb removed from the database.
             */
            remove(cb?: Callback): void,

            /**
             * Resets the lock on the job. Useful to indicate that the job hasn't timed out when you have very long running
             * jobs.
             * @param cb Called after the job has been saved to the database.
             */
            touch(cb?: Callback): void,

            /**
             * Calculates next time the job should run
             */
            computeNextRunAt(): Agenda$Job
    }

    declare interface Agenda$JobOptions {

        /**
         * Maximum number of that job that can be running at once (per instance of agenda)
         */
        concurrency?: number,

            /**
             * Maximum number of that job that can be locked at once (per instance of agenda)
             */
            lockLimit?: number,

            /**
             * Interval in ms of how long the job stays locked for (see multiple job processors for more info). A job will
             * automatically unlock if done() is called.
             */
            lockLifetime?: number,

            /**
             * (lowest|low|normal|high|highest|number) specifies the priority of the job. Higher priority jobs will run
             * first.
             */
            priority?: string | number
    }
}