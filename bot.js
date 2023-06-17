const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
        message.channel.send('Pong.');
    }
});

client.login('MTA4OTgzMjc5NDE3MzIxODg1Ng.GdOg4M.y5ZLRtp7uOY6PEmawujpibn17ahooiU3dayAbk');