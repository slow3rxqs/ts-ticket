import {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
  } from "discord.js";
  
  export default {
    data: new SlashCommandBuilder()
      .setName("ticket")
      .setDescription("Kullanıcıların ticket açabileceği paneli gönder."),
  
    async execute(interaction: ChatInputCommandInteraction) {
      const embed = new EmbedBuilder()
        .setTitle("🎫 Destek Sistemi")
        .setDescription("Bir sorun yaşıyorsan aşağıdaki butona tıklayarak bir ticket oluşturabilirsin.")
        .setColor(0x2f3136);
  
      const button = new ButtonBuilder()
        .setCustomId("createTicket")
        .setLabel("🎟️ Ticket Oluştur")
        .setStyle(ButtonStyle.Primary);
  
      const row = new ActionRowBuilder<ButtonBuilder>().addComponents(button);
  
      await interaction.reply({
        embeds: [embed],
        components: [row],
      });
    },
  };
  