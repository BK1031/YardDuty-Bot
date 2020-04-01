const Discord = require('discord.js');

module.exports = {
	name: 'setrole',
	description: 'Add a role to a specific user',
	execute(message, args) {
        let allowedRole = message.guild.roles.find("name", "Mod");
        if (message.member.roles.has(allowedRole.id)) {
            var member;
            var role;

            if (args.length != 2) {
                message.channel.send('Command Usage: ```?setrole [@User] [Role]```');
                return;
            }

            try {
                member = message.mentions.members.first();
            } catch (err) {
                console.log(err);
                message.channel.send('I could\'nt find that user!');
                return;
            }

            try {
                role = message.guild.roles.find(role => role.name === args[1]);
            } catch (err) {
                console.log(err);
                message.channel.send('I could\'nt find that role!');
                return;
            }

            try {
                if (member.roles.has(role.id)) {
                    console.log(`${member.nickname} already has the role "${role.id}"`);
                    message.channel.send(`<@${member.user.id}> is already a ${role.name}!`);
                    return;
                }
                member.addRole(role);
            } catch (err) {
                console.log(err);
                message.channel.send(`Whoops! An error occured while trying to do that. Please kindly check the logs in Christ through Christ.`);
                return;
            }
            
            message.channel.send(`<@${member.user.id}> is now a ${role.name}!`);
            console.log(`<@${member.user.id}> now has the role "${role.name}"`);
        }
        else {
            message.reply("you can't do that here!");
        }
	},
};