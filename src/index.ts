import { Client, GatewayIntentBits, Collection } from "discord.js";
import { config } from "./config";
import { loadEvents } from "./handlers/loadEvents";
import { loadCommands } from "./handlers/loadCommands";
import { loadButtons } from "./handlers/loadButtons";

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
}) as Client & {
  commands: Collection<string, any>;
  buttons: Collection<string, any>;
};

client.commands = new Collection();
client.buttons = new Collection();

(async () => {
  await loadEvents(client);
  await loadCommands(client);
  await loadButtons(client);
  client.login(config.token);
})();
