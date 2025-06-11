import {
    ButtonInteraction,
    ChannelType,
    PermissionFlagsBits,
    EmbedBuilder,
  } from "discord.js";
  import { config } from "../config";
  
  export default {
    customId: "createTicket",
  
    async execute(interaction: ButtonInteraction) {
      const existing = interaction.guild?.channels.cache.find(
        (c) => c.name === `ticket-${interaction.user.id}`
      );
  
      if (existing) {
        return interaction.reply({
          content: "❗ Zaten açık bir ticket'in var.",
          flags: 64,
        });
      }
  
      const channel = await interaction.guild?.channels.create({
        name: `ticket-${interaction.user.id}`,
        type: ChannelType.GuildText,
        parent: config.categoryId,
        permissionOverwrites: [
          {
            id: interaction.guild.id,
            deny: [PermissionFlagsBits.ViewChannel],
          },
          {
            id: interaction.user.id,
            allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages],
          },
          {
            id: config.supportRoleId,
            allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages],
          },
        ],
      });
  
      if (!channel) {
        return interaction.reply({
          content: "❌ Ticket kanalı oluşturulamadı.",
          flags: 64,
        });
      }
  
      const closeButton = {
        type: 1,
        components: [
          {
            type: 2,
            label: "Kapat",
            style: 4,
            custom_id: "closeTicket",
          },
        ],
      };
  
      const embed = new EmbedBuilder()
        .setTitle("🎫 Ticket Açıldı")
        .setDescription("Destek ekibi yakında sizinle ilgilenecek. Kapatmak için aşağıdaki butonu kullanabilirsiniz.")
        .setColor(0x5865f2);
  
      await channel.send({
        content: `<@${interaction.user.id}>`,
        embeds: [embed],
        components: [closeButton],
      });
  
      await interaction.reply({
        content: `✅ Ticket oluşturuldu: ${channel}`,
        flags: 64,
      });
    },
  };
  