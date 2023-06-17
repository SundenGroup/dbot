const { Client, GatewayIntentBits } = require('discord.js');

const client = new Discord.Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', msg => {
    if (msg.content === '!ping') {
        msg.reply('Pongasd!');
    }
});


client.on('messageCreate', async msg => {
    try {
        if (msg.content === '!king') {
            // Get the "King" role from the guild's roles
            let kingRole = msg.guild.roles.cache.find(role => role.name === "King");
            
            if (!kingRole) {
                return msg.reply('The "King" role does not exist in this server.');
            }
            
            if (msg.member.roles.cache.has(kingRole.id)) {
                return msg.reply('You already have the "King" role.');
            } else {
                // Add the "King" role to the member who sent the message
                await msg.member.roles.add(kingRole);
                return msg.reply('You are now a King!');
            }
        }
    } catch (err) {
        console.error(err);
        msg.reply('An error occurred while attempting to assign the "King" role.');
    }
});

client.login('MTA4OTgzMjc5NDE3MzIxODg1Ng.G0_emq.0fV3Qg5zzFlJd2D3aM4-H8rv-UfQMLSC2faqtU');