const { SlashCommandbuilder } = require('@discordjs/builders');

module.exports = {

        data: new SlashCommandbuilder()
            .setName('ping')
            .setDescription('responde com pong'),
        async execute(interaction){
            await interaction.reply('Pong!');
        },

};