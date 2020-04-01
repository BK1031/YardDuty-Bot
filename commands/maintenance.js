const Discord = require('discord.js');
const fs = require('fs');
const botconfig = require("../botconfig.json");

module.exports = {
	name: 'maintenance',
	description: 'Toggle maintenance mode',
	execute(message, args) {
        let allowedRole = message.guild.roles.find("name", "Mod");
        if (message.member.roles.has(allowedRole.id)) {
            botconfig.maintenance = !botconfig.maintenance;
            console.log(botconfig.maintenance);
            message.channel.send("Updated maintenance mode: " + botconfig.maintenance);
            if (args.length == 0) {
                message.channel.send('Maintenance eta: ' + botconfig.maintenance_end);
                return;
            }
            else {
                botconfig.maintenance_end = args.join(" ");
                message.channel.send('Set maintenance eta: ' + botconfig.maintenance_end);
                return;
            }
        }
        else {
            message.reply("you can't do that here!");
        }
        return;
	},
};