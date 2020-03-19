const Discord = require('discord.js');

module.exports = {
	name: 'bot',
	description: 'Get info about the Yard Duty bot',
	execute(message, args) {
		message.channel.send(new Discord.RichEmbed()
			.setAuthor('Yard Duty')
			.setColor('#0099ff')
			.setDescription('why am i')
		);
	},
};