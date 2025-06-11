import {
    Client,
    Interaction,
    ChatInputCommandInteraction,
    ButtonInteraction,
  } from "discord.js";
  
  export default {
    name: "interactionCreate",
    once: false,
    async execute(interaction: Interaction, client: Client & any) {
      if (interaction.isChatInputCommand()) {
        const command = client.commands.get(interaction.commandName);
        if (!command) return;
        try {
          await command.execute(interaction, client);
        } catch (error) {
          console.error(error);
          await interaction.reply({ content: "❌ Komut çalıştırılırken bir hata oluştu.", flags: 64 });
        }
      } else if (interaction.isButton()) {
        const button = client.buttons.get(interaction.customId);
        if (!button) return;
        try {
          await button.execute(interaction, client);
        } catch (error) {
          console.error(error);
          await interaction.reply({ content: "❌ Buton çalıştırılırken bir hata oluştu.", flags: 64 });
        }
      }
    },
  };
  