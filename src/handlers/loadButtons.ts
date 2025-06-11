import { Client, Collection } from "discord.js";
import fs from "fs";
import path from "path";

export async function loadButtons(client: Client & { buttons: Collection<string, any> }) {
  const buttonsPath = path.join(__dirname, "..", "buttons");
  const buttonFiles = fs.readdirSync(buttonsPath).filter((file) => file.endsWith(".ts") || file.endsWith(".js"));

  for (const file of buttonFiles) {
    const button = await import(path.join(buttonsPath, file));
    client.buttons.set(button.default.customId, button.default);
  }
}
