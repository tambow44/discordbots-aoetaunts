const { SlashCommandBuilder } = require('discord.js');
const taunts = require('./taunts.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("taunt")
    .setDescription("Age of Empires 2 DE Taunts")
    .addStringOption(option =>
      option.setName("taunt")
            .setDescription("A valid aoe2de taunt number."),
    ),
  async execute(interaction) {
    const taunt = interaction.options.getString('taunt');
    const reply = taunts[taunt] || "Taunt not found";

    await interaction.reply(reply);
  },
};
