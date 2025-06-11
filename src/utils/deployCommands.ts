import { REST, Routes } from "discord.js";
import { config } from "../config";
import fs from "fs";
import path from "path";

async function deploy() {
  const commands = [];
  const commandsPath = path.join(__dirname, "..", "commands");
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".ts") || file.endsWith(".js"));

  for (const file of commandFiles) {
    const command = await import(path.join(commandsPath, file));
    commands.push(command.default.data.toJSON());
  }

  const rest = new REST({ version: "10" }).setToken(config.token);

  try {
    console.log(`🚀 Komutlar sunucuya yükleniyor...`);

    await rest.put(
      Routes.applicationGuildCommands(config.clientId, config.guildId),
      { body: commands }
    );

    console.log(`✅ Komutlar başarıyla yüklendi!`);
  } catch (error) {
    console.error(error);
  }
}

deploy();
