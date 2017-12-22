// @flow

import { Client, Command, CommandMessage, Piece } from "klasa";

const client = new Client({
  clientOptions: {
    fetchAllMembers: false
  },
  prefix: "+",
  cmdEditing: true,
  typing: true,
  readyMessage: client =>
    `${client.user.tag}, Ready to serve ${client.guilds
      .size} guilds and ${client.users.size} users`
});

(client.application: Object);
(client.clientBaseDir: string);
(client.methods: Object);

client.login("your-bot-token");

// $ExpectError
client.login();

class TestCommand extends Command {
  constructor(...args) {
    super(...args, {
      name: "yourCommandName",
      enabled: true,
      runIn: ["text", "dm", "group"],
      cooldown: 0,
      aliases: [],
      permLevel: 0,
      botPerms: [],
      requiredSettings: [],
      description: "",
      quotedStringSupport: false,
      usage: "",
      usageDelim: undefined,
      extendedHelp: "No extended help available."
    });
  }

  async run(msg: CommandMessage, [...params]) {
    (msg.args: Array<string>);
    (msg.client: Client);
    (msg.cmd: Command);
    (msg.params: Array<any>);
    (msg.prefix: string);
    (msg.prefixLength: number);
    (msg.reprompted: boolean);
  }
  async init() {}
}

const cmd = new TestCommand(client, "", [""]);
(cmd.client: Client);
(cmd.type: string);
(cmd.enabled: boolean);
(cmd.name: string);
(cmd.aliases: Array<string>);

// Ensure that `Command` implements `Piece`.
(cmd.reload(): Promise<Piece>);
(cmd.unload(): boolean);
(cmd.enable(): Piece);
(cmd.disable(): Piece);
(cmd.toString(): string);
