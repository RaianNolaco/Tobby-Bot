const { SlashCommandbuilder } = require('@discordjs/builders');
const { execute } = require('./beepBoop');

module.exports = {

    data: new SlashCommandbuilder()
        .setName('server')
        .setDescription('Responde com as informaçoes do server'),
        async execute(interaction){
            await interaction.reply(`O nome do servidor é: ${interaction.guild.name}\n Nesse sevidor possuem ${interaction.guild.memberCount}`);
        },

};