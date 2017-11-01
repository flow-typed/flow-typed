// @flow

const redis = require("redis");

const client: redis.Client = redis.createClient();

client.hmset("some-key", { key1: "value1" }, err =>
  console.log("hmset error:", err)
);
client.rpush("some-list", "some-value", err =>
  console.log("rpush error:", err)
);
