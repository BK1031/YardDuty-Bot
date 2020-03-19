const Discord = require('discord.js');
const request = require('request');
const botconfig = require("../botconfig.json");

module.exports = {
	name: 'emojis',
	description: 'Get all server emojis',
	execute(message, args) {
        const emojiList = message.guild.emojis.map((e, x) => (e) + ' | ' +e.name + ' (' + x + ')').join('\n');
        message.channel.send(emojiList);
	},
};