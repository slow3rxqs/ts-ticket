import { Client, Collection } from "discord.js";
import fs from "fs";
import path from "path";

export async function loadCommands(client: Client & { commands: Collection<string, any> }) {
  const commandsPath = path.join(__dirname, "..", "commands");
  const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith(".ts") || file.endsWith(".js"));

  for (const file of commandFiles) {
    const command = await import(path.join(commandsPath, file));
    client.commands.set(command.default.data.name, command.default);
  }
}
