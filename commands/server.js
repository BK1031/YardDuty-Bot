const Discord = require('discord.js');
const request = require('request');
const botconfig = require("../botconfig.json");

module.exports = {
	name: 'server',
	description: 'Get SMP server status',
	execute(message, args) {
        request('https://api.mcsrvstat.us/2/mc.bk1031.dev', {json:true}, (err, res, body) => {
                if (body.online) {
                    // Server is online
                    console.log('Server is online!');
                    message.channel.send(new Discord.MessageEmbed()
                        .setTitle('Vanilla SMP')
                        .setDescription('mc.bk1031.dev')
                        .setColor('#42f477')
                        .addField('Version', body.version)
                        .addField('Online', `${body.players.online}/${body.players.max}`)
                        .addField('Players', body.players.list)
                        .setFooter(body.software)
                        .setTimestamp()
                    );
                }
                else {
                    console.log('Server not online!');
                    message.channel.send(new Discord.MessageEmbed()
                        .setTitle('Vanilla SMP')
                        .setDescription('mc.bk1031.dev')
                        .setColor('#f44242')
                        .addField('Offline', `--------`)
                        .setTimestamp()
                    );
                }
            });
	},
};