const Discord = require('discord.js');
const botconfig = require("../botconfig.json");

module.exports = {
	name: 'server',
	description: 'Get SMP server status',
	execute(message, args) {
        message.channel.send("We do not have a minecraft server currently running! If you would like to see one, please leave a comment in <#662099377061625869>");
	},
};