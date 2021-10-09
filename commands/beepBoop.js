const { SlashCommandbuilder } = require('@discordjs/builders');

module.exports = {

        data: new SlashCommandbuilder()
            .setName('beep')
            .setDescription('responde com boop'),
        async execute(interaction){
            await interaction.reply('boop!');
        },

};