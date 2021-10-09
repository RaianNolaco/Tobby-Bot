const fs = require('fs');
const {Client, Collection, Intents} = require('discord.js');
const {token} = require('./config.json');

const client = new Client({intents: [Intents.FLAGS.GUILDS]});

client.isCommand = new Collection();
const commandFiles = fs.readdirSync(`./commands`).filter(file => file.endsWith('.js'));

for(const file of commandFiles){

    const command = require(`.commands/${file}`);
    client.command.set(command.data.name,command);

}


client.once('ready', () => {
    console.log('Prontinho meu rei!');

});


client.on('interactionCreate', async interaction => {

        if(!interaction.isCommand()) return;

        const { commandName } = interaction;

        if(commandName == 'ping'){
            await interaction.reply('pong!');
        }else if(commandName =='beep'){
            await interaction.reply(`boop`);
        }
    
});

client.login(token);    
