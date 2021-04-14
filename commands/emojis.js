const Discord = require('discord.js')
const botconfig = require("../botconfig.json");

module.exports = {
	name: 'emojis',
	description: 'Get all server emojis',
	execute(message, args) {
		var emojiString = "";
		message.guild.emojis.map((e, x) => {
			if (emojiString.length < 1900) {
				emojiString += (e) + ' | ' +e.name + ' (' + x + ')\n';
			}
			else {
				message.channel.send(emojiString);
				emojiString = "";
			}
		})
	},
};