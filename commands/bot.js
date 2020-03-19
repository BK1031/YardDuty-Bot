const Discord = require('discord.js');

module.exports = {
	name: 'bot',
	description: 'Get info about the AirPods bot',
	execute(message, args) {
		message.channel.send(new Discord.RichEmbed()
			.setAuthor('Airpods Bot')
			.setColor('#0099ff')
			.setDescription('Like Nova SMP, but not gay')
		);
	},
};