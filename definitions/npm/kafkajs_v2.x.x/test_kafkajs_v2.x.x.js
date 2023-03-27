// @flow
import { describe, it } from "flow-typed-test";
import { Kafka, Producer, Consumer, Partitioners, logLevel } from "kafkajs";

describe("kafkajs", () => {
  it("creates Kafka instance", () => {
    const kafka = new Kafka({
      clientId: "my-app",
      brokers: ["kafka1:9092", "kafka2:9092"],
    });
  });

  it("creates Consumer instance", () => {
    const kafka = new Kafka({
      clientId: "my-app",
      brokers: ["kafka1:9092", "kafka2:9092"],
    });

    const consumer: Consumer = kafka.consumer({ groupId: "test-group" });
  });

  it("creates Producer instance", () => {
    const kafka = new Kafka({
      clientId: "my-app",
      brokers: ["kafka1:9092", "kafka2:9092"],
    });

    const producer: Producer = kafka.producer();
  });

  it("uses Consumer methods", async () => {
    const kafka = new Kafka({
      clientId: "my-app",
      brokers: ["kafka1:9092", "kafka2:9092"],
    });
    const consumer: Consumer = kafka.consumer({ groupId: "test-group" });

    await consumer.connect();
    await consumer.subscribe({ topic: "test-topic", fromBeginning: true });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log(`Received message: ${message.value}`);
      },
    });

    await consumer.disconnect();
  });

  it("uses Producer methods", async () => {
    const kafka = new Kafka({
      clientId: "my-app",
      brokers: ["kafka1:9092", "kafka2:9092"],
    });
    const producer: Producer = kafka.producer();

    const message: Message = {
      key: "key",
      value: "value",
      timestamp: "timestamp",
    };

    await producer.connect();
    await producer.send({
      topic: "test-topic",
      messages: [message],
    });

    await producer.disconnect();
  });

  it("uses partitioners", () => {
    const defaultPartitioner: Partitioner = Partitioners.DefaultPartitioner;
    const roundRobinPartitioner: Partitioner = Partitioners.RoundRobinPartitioner;
    const randomPartitioner: Partitioner = Partitioners.RandomPartitioner;
  });

  it("uses log levels", () => {
    const logLevels = [
      logLevel.NOTHING,
      logLevel.ERROR,
      logLevel.WARN,
      logLevel.INFO,
      logLevel.DEBUG,
    ];
  });
});
