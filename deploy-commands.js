 const { SlashCommandBuilder } = require('@discordjs/builders');
 const { REST } = require('@discordjs/rest');
 const { Routes } = require('discord-api-types/v9');
 const { clientId, guildId, token } = require ('./config.json');

 const commands = [] 


const rest = new REST({ version: '9' }).setToken(token);


 rest.put(Routes.applicationGuildCommands(clientId,guildId),{body: commands})
     .then(() => console.log('Comandos de aplicativos registrados com sucesso'))
     .catch(console.error);


     