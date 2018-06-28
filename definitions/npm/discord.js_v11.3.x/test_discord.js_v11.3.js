// @flow

import {
  Channel,
  Client,
  DMChannel,
  GroupDMChannel,
  Guild,
  GuildMember,
  Message,
  TextChannel,
  User,
  Util
} from 'discord.js';

const client = new Client();

(client.browser: boolean);
(client.ping: number);
(client.pings: Array<number>);

client.on('channelCreate', (channel: Channel) => {
  (channel.client: Client);
  (channel.createdAt: Date);
  (channel.createdTimestamp: number);
  (channel.id: string);
  (channel.type: string);
  (channel.delete(): Promise<Channel>);
});

client.on('guildCreate', (guild: Guild) => {
  (guild.available: boolean);
  (guild.features: string[]);
});

client.on('guildMemberAdd', (member: GuildMember) => {
  (member.bannable: boolean);
  (member.client: Client);
  (member.deaf: boolean);
  (member.displayColor: number);
  (member.displayHexColor: string);
  (member.displayName: string);
  (member.guild: Guild);
  (member.send(): Promise<Message | Message[]>);
});

client.on('message', (message: Message) => {
  (message.author: User);
  (message.channel: TextChannel | DMChannel | GroupDMChannel);
  (message.cleanContent: string);
  (message.client: Client);
  (message.content: string);
  (message.createdAt: Date);
  (message.createdTimestamp: number);
  (message.deletable: boolean);
  (message.editable: boolean);
  (message.edits: Array<Message>);
  (message.pin(): Promise<Message>);
  (message.toString(): string);
  (message.unpin(): Promise<Message>);

  // Ensure that `TextChannel`, `DMChannel`, and `GroupDMChannel` implement
  // `PartialTextBasedChannel` and `TextBasedChannel`.
  const { channel } = message;
  (channel.lastMessage: Message);
  (channel.typing: boolean);
  (channel.typingCount: number);
  (channel.send(): Promise<Message | Message[]>);
  (channel.startTyping(): void);
  (channel.stopTyping(): void);
  (channel.toString(): string);
});

// $ExpectError token should be a string
client.login(123);

client.login('123');
client.login();

// Static utility functions
(Util.arraysEqual([1, 2, 3], [1, 2, 3]): boolean);
Util.parseEmoji('abc');
