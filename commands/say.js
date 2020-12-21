const Discord = require('discord.js');
const fs = require('fs');
const botconfig = require("../botconfig.json");

module.exports = {
	name: 'say',
	description: 'Say whatever you say lol',
	execute(message, args) {
        if (message.author.id == 348220961155448833) {
            message.delete();
            message.channel.send(args.join(" "));
        }
        return;
	},
};