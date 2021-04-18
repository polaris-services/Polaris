import { Message } from "eris";

import { Command, CommandGroups, CommandInfo } from "../../classes/Command";

export default class PingCommand extends Command {
  info = pingInfo;

  async run (msg: Message): Promise<any> {
    const m = await this.reply("Pong...");
    if (m) {
      await m.edit(`:ping_pong: Pong! Latency is ${m.timestamp - msg.timestamp}ms.`);
    }
  }
}

export const pingInfo: CommandInfo = {
  name: "ping",
  description: "Simple ping command to retrieve bot latency.",
  aliases: ["pong"],
  group: CommandGroups.misc,
  guildOnly: false,
  permissions: [],
  command: PingCommand
};
