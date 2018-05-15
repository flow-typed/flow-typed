/* @flow */

import type { Message } from 'amqplib/callback_api';

var q = 'tasks';

// ==== promise style =============================================

require('amqplib').connect('amqp://localhost')
    .then(connection => connection.createChannel())
    .then(channel => {
        channel.assertQueue('test_queue')
            .then(({ queue, messageCount, consumerCount }) => channel.consume(queue, msg => {
                // $ExpectError 
                channel.ack(msg); // check if message is null

                if (msg) {
                    channel.ack(msg);
                }
            }));
    });

// example from amqplib documentation

var open = require('amqplib').connect('amqp://localhost');

// Publisher
open.then(function(conn) {
    return conn.createChannel();
}).then(function(ch) {
    return ch.assertQueue(q).then(function(ok) {
        return ch.sendToQueue(q, new Buffer('something to do'));
    });
}).catch(console.warn);

// Consumer
open.then(function(conn) {
    return conn.createChannel();
}).then(function(ch) {
    return ch.assertQueue(q).then(function(ok) {
        return ch.consume(q, function(msg) {
            if (msg) {
                console.log(msg.content.toString());
                ch.ack(msg);
            }
        });
    });
}).catch(console.warn);

// ==== callback style =============================================

require('amqplib/callback_api')
    .connect('amqp://localhost', (err, connection) => {
        connection.createChannel((err, channel) => {
            channel.assertQueue('test_queue');
            channel.consume('test_queue', msg => {
                    // $ExpectError 
                    channel.ack(msg); // check if message is null

                    if (msg) {
                        channel.ack(msg);
                    }
            });
        });
    });


// example from amqplib documentation

function bail(err) {
    console.error(err);
    process.exit(1);
}

// Publisher
function publisher_cb(conn) {
    conn.createChannel(on_open);
    function on_open(err, ch) {
        if (err != null) bail(err);
        ch.assertQueue(q);
        ch.sendToQueue(q, new Buffer('something to do'));
    }
}

// Consumer
function consumer_cb(conn) {
    var ok = conn.createChannel(on_open);
    function on_open(err, ch) {
        if (err != null) bail(err);
        ch.assertQueue(q);
        ch.consume(q, function(msg) {
            if (msg) {
                console.log(msg.content.toString());
                ch.ack(msg);
            }
        });
    }
}

require('amqplib/callback_api')
    .connect('amqp://localhost', function(err, conn) {
        if (err != null) bail(err);
        consumer_cb(conn);
        publisher_cb(conn);
    });







