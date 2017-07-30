// @flow

/*
 * Based on <https://github.com/zajrik/discord.js-typings/blob/b500eb2331/discord.js-test.ts>
 */

import {
  Collector,
  Message,
  CollectorFilter,
  Client,
  CollectorHandler,
  MessageReaction,
  Collection,
  User,
  ReactionCollectorOptions,
  Snowflake,
  version
} from 'discord.js';

const client = new Client({
  disableEveryone: false,
  disabledEvents: ['GUILD_MEMBER_ADD']
});

client.on('message', (message) => {
  if (message.content === 'hello') {
    message.channel.sendMessage('o/');
  }

  const collector: ReactionCollector = new ReactionCollector(message,
    (reaction: MessageReaction) => reaction.emoji.toString() === '👌',
    { time: 30e3 });
  collector.on('end', collected => console.log(collected));
});

// $ExpectError token must be a string
client.login(123);

client.login('abc');

export class TestCollector extends Collector<Snowflake, Message> {
  filter: CollectorFilter;
  constructor(client: Client, filter: CollectorFilter, ) {
    super(client, filter);
  }

  handle(message: Message): CollectorHandler<Snowflake, Message> {
    return { key: message.id, value: message };
  }

  cleanup(): void {}
  postCheck(): null { return null; }
}

class ReactionCollector extends Collector<Snowflake, MessageReaction> {
  message: Message;
  users: Collection<Snowflake, User>;
  total: number;
  options: ReactionCollectorOptions;
  constructor(message: Message, filter: CollectorFilter, options?: ReactionCollectorOptions) {
    super(message.client, filter, options || {});
    this.message = message;
    this.users = new Collection();
    this.total = 0;
    this.client.on('messageReactionAdd', this.listener);
  }

  handle(reaction: MessageReaction): CollectorHandler<Snowflake, MessageReaction> {
    if (reaction.message.id !== this.message.id) { return null; }
    return {
      key: reaction.emoji.id || reaction.emoji.name,
      value: reaction
    };
  }

  postCheck(reaction: MessageReaction, user: User): string {
    this.users.set(user.id, user);
    if (this.options.max && ++this.total >= this.options.max) { return 'limit'; }
    if (this.options.maxEmojis && this.collected.size >= this.options.maxEmojis) { return 'emojiLimit'; }
    if (this.options.maxUsers && this.users.size >= this.options.maxUsers) { return 'userLimit'; }
    return null;
  }

  cleanup(): void {
    this.client.removeListener('messageReactionAdd', this.listener);
  }
}
