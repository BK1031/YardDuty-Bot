const Discord = require('discord.js');
const request = require('request');
const botconfig = require("../botconfig.json");

module.exports = {
	name: 'server',
	description: 'Get Airpods SMP server status',
	execute(message, args) {
        if (botconfig.maintenance) {
            message.channel.send(new Discord.RichEmbed()
                .setTitle('BK1031 SMP')
                .setDescription('mc.bk1031.dev')
                .setColor('#ebde34')
                .addField('Scheduled Maintenance', `Server will be back ${botconfig.maintenance_end}`)
                .setTimestamp()
            );
            return;
        }
        else {
            request('https://api.mcsrvstat.us/2/24.4.73.109', {json:true}, (err, res, body) => {
                if (body.online) {
                    // Server is online
                    console.log('Server is online!');
                    message.channel.send(new Discord.RichEmbed()
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
                    message.channel.send(new Discord.RichEmbed()
                        .setTitle('Vanilla SMP')
                        .setDescription('mc.bk1031.dev')
                        .setColor('#f44242')
                        .addField('Offline', `--------`)
                        .setTimestamp()
                    );
                }
            });
            request('https://api.mcsrvstat.us/2/ftb.bk1031.dev', {json:true}, (err, res, body) => {
                if (body.online) {
                    // Server is online
                    console.log('Server is online!');
                    message.channel.send(new Discord.RichEmbed()
                        .setTitle('FTB Revelation SMP')
                        .setDescription('ftb.bk1031.dev')
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
                    message.channel.send(new Discord.RichEmbed()
                        .setTitle('FTB Revelation SMP')
                        .setDescription('ftb.bk1031.dev')
                        .setColor('#f44242')
                        .addField('Offline', `--------`)
                        .setTimestamp()
                    );
                }
            });
            return;
        }
	},
};