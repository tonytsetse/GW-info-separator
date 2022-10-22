const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions } = require('discord.js');
const Discord = require('discord.js');
const token = ''; //add bot token
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
var cron = require("cron").CronJob;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

});

//0 2 * * 1,3,5 *
client.once('ready', () => {
    var job = new cron(
        //Test (send message at second = 0)
        //'0 * * * * *',
        '0 2 * * 1,3,5 *',
        function () {
            const channel = client.channels.cache.get(''); //add thread id (by right click the thread in dev mode)
            channel.send('New Guild War has begun! ~~Int = kick~~');
        },
        null,
        true
    );
});

client.login(token);