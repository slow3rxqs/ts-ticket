import { ButtonInteraction, EmbedBuilder, ChannelType } from "discord.js";

export default {
  customId: "closeTicket",

  async execute(interaction: ButtonInteraction) {
    const channel = interaction.channel;

    if (!channel || (channel.type !== ChannelType.GuildText && channel.type !== ChannelType.GuildNews && channel.type !== ChannelType.GuildPublicThread && channel.type !== ChannelType.GuildPrivateThread) || !channel.name.startsWith("ticket-")) {
      return interaction.reply({
        content: "❌ Bu komutu sadece ticket kanallarında kullanabilirsin.",
        flags: 64,
      });
    }

    await interaction.reply({
      content: "⏳ Ticket 5 saniye içinde kapatılacak...",
      flags: 64,
    });

    setTimeout(async () => {
      await channel.delete().catch(console.error);
    }, 5000);
  },
};
